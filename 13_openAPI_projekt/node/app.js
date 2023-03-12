import express from "express";
const app = express();

app.use(express.json());

import swaggerUi from "swagger-ui-express";
import swaggerJsdoc from "swagger-jsdoc";

const swaggerDefinition = {
    openapi: "3.0.0",
    info: {
        title: "OpenAPI Application",
        version: "2.0.0",
        description: "This website is made by Alexander",
    },
};
const options = {
    swaggerDefinition,
    apis: ["./routers/*.js"],
};
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerJsdoc(options)));

import usersRouter from "./routers/userRouter.js";
app.use(usersRouter);

app.listen(8080, () => console.log("Server is running on port", 8080));