import express, { json } from "express";
import * as swaggerUi from "swagger-ui-express";
import swaggerJSDoc from "swagger-jsdoc";
import swaggerOptions from "./config/swagger";
import morgan from "morgan";
import helmet from "helmet";
import cors, { CorsOptions } from "cors";

import * as middlewares from "./middlewares/error.middleware";
import api from "./routes";
import MessageResponse from "./interfaces/message_response.interface";
import { whitelist } from "./config";
import "./utils/security/passport"


const app = express();

const swaggerDocs = swaggerJSDoc(swaggerOptions);
app.use("/api/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.use(morgan("dev"));
app.use(helmet());
app.use(
  cors({
    credentials: true,
    origin(
      origin: string,
      callback: (err: Error | null, origin: string) => void
    ) {
      callback(
        whitelist.includes(origin) || !origin
          ? null
          : new Error(`Access to API from origin ${origin} denied`),
        origin
      );
    },
  } as CorsOptions)
);
app.use(json());

app.get<object, MessageResponse>("/", (req, res) => {
  res.json({
    message: "Welcome to LegalEase!!!",
  });
});

app.use("/api/v1", api);

app.use(middlewares.routeNotSupported);

export default app;
