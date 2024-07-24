import { NextFunction, Request, Response } from "express";
import Auth from "../services/auth.service";
import DefaultResponse from "../interfaces/default_response.interface";
import { validateLogin } from "../utils/validation/auth.validation";
import { errorResponse } from "../utils/response";
import { defaultErrorHandler } from "./error.middleware";
import { IAuthResult } from "../interfaces/auth.interface";

/**
 * @summary validates the login fields
 *
 **/
export const validateUser = async (
  req: Request,
  res: Response<DefaultResponse>,
  next: NextFunction
) => {
  const { email, password } = req.body;
  const { error } = validateLogin({ email, password });

  if (error) {
    return errorResponse(res, 403, error.message);
  }
  next();
};

// registration middleware
export const login = async (req: Request, res: Response<DefaultResponse>) => {
  const { email, password } = req.body;

  try {
    const result: IAuthResult = await Auth.login(
      {
        email,
        password,
      },
      res
    );

    return res.json({
      message: "Login successful",
      success: true,
      status: 200,
      data: result,
    });
  } catch (err) {
    return defaultErrorHandler(err, req, res);
  }
};
