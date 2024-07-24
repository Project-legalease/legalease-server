import { NextFunction, Request, Response } from "express";
import Auth from "../services/auth.service";
import DefaultResponse from "../interfaces/default_response.interface";
import {
  validateCreateLawyer,
  validateCreateUser,
} from "../utils/validation/auth.validation";
import { errorResponse } from "../utils/response";
import { defaultErrorHandler } from "./error.middleware";
import { IAuthResult } from "../interfaces/auth.interface";

/**
 *
 * @summary validate role is user or lawyer
 *
 **/
export const validateRole = async (
  req: Request,
  res: Response<DefaultResponse>,
  next: NextFunction
) => {
  const { role } = req.body;
  if (role !== "user" && role !== "lawyer") {
    return errorResponse(res, 403, "Role can either be user or lawyer");
  }
  next();
};

/**
 * @summary if role is user,
 * check password, username, firstName, lastName,
 * profile_pic, is not empty or null
 *
 * @summary if role is lawyer, also check
 * qualification, specialization, experience,
 *  location is not empty or null too
 *
 **/
export const validateUser = async (
  req: Request,
  res: Response<DefaultResponse>,
  next: NextFunction
) => {
  const {
    email,
    password,
    username,
    firstName,
    lastName,
    role,
    profilePic,
    qualification,
    specialization,
    experience,
    location,
  } = req.body;
  const { error } = validateCreateUser({
    email,
    password,
    username,
    firstName,
    lastName,
    role,
    profilePic,
  });

  if (error) {
    return errorResponse(res, 403, error.message);
  }

  if (req.body["role"] == "lawyer") {
    const { error } = validateCreateLawyer({
      qualification,
      specialization,
      experience,
      location,
    });
    if (error) {
      return errorResponse(res, 403, error.message);
    }
  }
  next();
};

// registration middleware
export const registration = async (
  req: Request,
  res: Response<DefaultResponse>
) => {
  const {
    email,
    password,
    username,
    firstName,
    lastName,
    role,
    profilePic,
    qualification,
    specialization,
    experience,
    location,
  } = req.body;

  //

  try {
    const result: IAuthResult = await Auth.createUser({
      email,
      password,
      username,
      firstName,
      lastName,
      role,
      profilePic,
      qualification,
      specialization,
      experience,
      location,
    });

    return res.json({
      message: "Registration successful",
      success: true,
      status: 200,
      data: result,
    });
  } catch (err) {
    return defaultErrorHandler(err, req, res);
    // next(error)
  }
};
