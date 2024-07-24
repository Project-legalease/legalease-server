import * as dotenv from "dotenv";
dotenv.config();

import app from './app';
import { connectDatabase, disconnectDatabase } from "./services/database.service";
import logger from "./utils/logger";

const port = process.env.PORT || 5000;
app.listen(port, async () => {
  try {
    logger.info(`Listening: http://localhost:${port}`);
    await connectDatabase();
  } catch (error) {
    logger.error(error);
    await disconnectDatabase()
  }
});
