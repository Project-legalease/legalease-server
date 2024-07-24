import mongoose from "mongoose";
import logger from "../utils/logger";
import { databaseURI } from "../config";

if (!databaseURI) {
  logger.error("The DATABASE_URL environment variable is not set.");
  throw new Error("The DATABASE_URL environment variable is not set.");
}


async function connectDatabase() {
  try {
    await mongoose.connect(databaseURI as string);
    logger.info("Connected to MongoDB with Mongoose");
  } catch (error) {
    logger.error("Error connecting to MongoDB with Mongoose", error);
  }
}

async function disconnectDatabase() {
  try {
    await mongoose.disconnect();
    logger.info("Disconnected from MongoDB");
  } catch (error) {
    logger.error("Error disconnecting from MongoDB", error);
  }
}


export { connectDatabase, disconnectDatabase };
