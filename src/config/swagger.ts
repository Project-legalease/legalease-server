import { port } from "./index";

const swaggerOptions = {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      title: "LegalEase API Docs",
      version: "1.0.0",
      description:
        "Welcome to the LegalEase API documentation. This API provides a comprehensive set of endpoints to interact with the LegalEase platform, enabling users to manage legal documents, track case statuses, and access various legal resources. Whether you are a developer integrating LegalEase into your application or a legal professional seeking to automate workflows, this documentation will guide you through the available functionalities and how to use them effectively.",
    },
    servers: [
      {
        url: `http://localhost:${port}`,
        description: "Local server",
      },
    ],
    paths: {},
    schemes: ["http", "https"],
  },
  apis: ["./src/routes/*.ts"],
};



export default swaggerOptions;
