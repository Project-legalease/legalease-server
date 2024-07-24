import { Request, Response } from "express";

import { ApiError, NotFound } from "../models/error.model";
import DefaultResponse from "../interfaces/default_response.interface";
import logger from "../utils/logger";

export function routeNotSupported(
  req: Request,
  res: Response<DefaultResponse>
) {
  const error = new NotFound(
    `🔍 - ${req.originalUrl} Not Found | ${req.method}`
  );
  logger.error(error.message);
  res.status(error.code).json({
    message: error.message,
    status: error.code,
    success: error.status,
  });
}

export function defaultErrorHandler(
  err: unknown,
  req: Request,
  res: Response<DefaultResponse>
) {
  const error: ApiError = err as ApiError;
  logger.error(error.message)
  res.status(error.code).json({
    message: error.message,
    status: error.code,
    success: error.status,
  });
}
