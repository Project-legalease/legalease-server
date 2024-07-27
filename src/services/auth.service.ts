import {
  ApiError,
  BadRequest,
  InternalError,
  Unauthorized,
} from "../models/error.model";
import {
  IAuthLawyer,
  IAuthResult,
  IAuthUser,
  ILogin,
} from "../interfaces/auth.interface";
import { AuthUserModel } from "../models/auth.model";
import logger from "../utils/logger";
import {
  encryptPassword,
  generateToken,
  verifyPassword,
} from "../utils/security";
import { Response } from "express";

export default class Auth {
  static async createUser(
    newUser: Omit<IAuthUser, "id" | "createdAt" | "updatedAt" | "accessToken"> &
      IAuthLawyer
  ) {
    try {
      const emailExist = await AuthUserModel.findOne({ email: newUser.email });
      const userNameExist = await AuthUserModel.findOne({
        username: newUser.username,
      });

      if (emailExist) {
        throw new BadRequest("Email already exists");
      }
      if (userNameExist) {
        throw new BadRequest("Username is not available");
      }

      const hashedPwd = await encryptPassword(newUser.password);

      const user = await AuthUserModel.create({
        ...newUser,
        password: hashedPwd,
      });

      const [token] = generateToken({
        id: user.id,
        email: user.email,
        role: user.role,
      });
      // user.accessToken = token;
      // await user.save();

      const result: IAuthResult = {
        ...user.toObject({
          transform: (doc, ret) => {
            delete ret.password;
            delete ret.__v;
            delete ret._id;
          },
        }),
        id: user._id.toString(),
        accessToken: token,
      };

      return result;
    } catch (error) {
      logger.error(error);
      if (error instanceof BadRequest) {
        throw error;
      }
      throw new InternalError("Error creating user");
    }
  }
  
  static async login(loginData: ILogin, res: Response) {
    try {
      const user = await AuthUserModel.findOne({
        email: loginData.email,
      });

      if (!user) {
        throw new Unauthorized("Incorrect email or password");
      }
      await verifyPassword(loginData.password, user.password);

      const [token] = generateToken({
        id: user.id,
        email: user.email,
        role: user.role,
      });
      // user.accessToken = token;
      // await user.save();

      const result: IAuthResult = {
        ...user.toObject({
          transform: (doc, ret) => {
            delete ret.password;
            delete ret.__v;
            delete ret._id;
          },
        }),
        id: user._id.toString(),
        accessToken: token,
      };

      return result;
    } catch (error) {
      logger.error(error);
      if (error instanceof ApiError) {
        throw error;
      }
      throw new InternalError("Error creating user");
    }
  }
}
