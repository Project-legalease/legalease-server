import * as dotenv from "dotenv";
dotenv.config();

export const devFrontendUrl = process.env.FRONTEND_URL as string;
export const prodFrontendUrl = process.env.PROD_FRONTEND_URL as string;
export const port = process.env.PORT || 5000;
export const nodeEnv = process.env.NODE_ENV || "development";
export const url = process.env.URL || "localhost:3000";
export const databaseURI = process.env.DATABASE_URL;
export const jwtSecret = process.env.JWT_SECRET as string;
export const accessTokenExpiresIn = process.env.ACCESS_TOKEN_LIFE;
export const refreshTokenExpiresIn = process.env.REFRESH_TOKEN_LIFE;
export const otpTime = process.env.OTP_TIME || 60000;
export const otpSecret = process.env.OTP_SECRET as string;
export const cookieDomain = process.env.COOKIE_DOMAIN || "localhost";

export const whitelist: string[] = [devFrontendUrl, prodFrontendUrl];
