import { compare, genSalt, hash } from "bcrypt";
import { BadRequest } from "../../models/error.model";
import {
  accessTokenExpiresIn,
  jwtSecret,
  otpSecret,
  otpTime,
  // refreshTokenExpiresIn,
} from "../../config";
import * as jwt from "jsonwebtoken";
import { IAccessToken } from "../../interfaces/auth.interface";
import * as otplib from "otplib";

export const verifyPassword = async (
  password: string,
  savedPassword: string
) => {
  //checks if userPassword and password are the same
  const isMatch = await compare(password, savedPassword);

  if (!isMatch) {
    throw new BadRequest("Incorrect email or password");
  }
};

export const encryptPassword = async (password: string) => {
  const salt = await genSalt();
  const encryptedPassword = await hash(password, salt);

  return encryptedPassword;
};

export const generateToken = (data: IAccessToken) => {
  const accessToken = jwt.sign(
    { id: data.id, email: data.email, role: data.role },
    jwtSecret,
    {
      expiresIn: accessTokenExpiresIn,
    }
  );
  const refreshToken = jwt.sign({ id: data.id, email: data.email }, jwtSecret, {
    // expiresIn: refreshTokenExpiresIn,
  });

  return [accessToken, refreshToken];
};

export const validateToken = (token: string) => {
  return jwt.verify(token, jwtSecret);
};

export const generatePasswordToken = (email: string) => {
  const token = jwt.sign({ email }, jwtSecret, {
    expiresIn: otpTime,
  });

  return token;
};

export const checkPasswordToken = async (passwordToken: string) => {
  try {
    jwt.verify(passwordToken, jwtSecret);
  } catch (error) {
    throw new BadRequest("otp expired!");
  }
};

export const generateOtp = () => {
  return otplib.authenticator.generate(otpSecret).slice(0, 6);
};
