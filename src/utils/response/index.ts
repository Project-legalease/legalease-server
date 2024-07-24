import { Response } from "express";
import DefaultResponse from "../../interfaces/default_response.interface";
import logger from "../logger";

export const successResponse = (
  res: Response<DefaultResponse>,
  code: number,
  message: string,
  data?: unknown
) => {
  res.status(code).json({
    success: true,
    message,
    data,
    status: code,
  });
};

export const errorResponse = (
  res: Response<DefaultResponse>,
  code: number,
  message: string
) => {
  logger.error(message.toString())
  res.status(code).json({
    success: false,
    message: message.replace(/"/g, ""),
    status: code,
  });
};
