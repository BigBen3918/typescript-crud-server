require("dotenv").config();
import express, { Express } from "express";
import cors from "cors";

// External Modules
import API from "./apis";
import config from "./config";
import ConnectDatabase from "./config/database";

// Get router
const router = express.Router();

const app: Express = express();
const port: Number = Number(process.env.HTTP_PORT || 5005);

app.use(
    cors({
        origin: "*",
        methods: ["POST", "GET"],
    })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// API Router
API(router);
app.use("/api", router);

ConnectDatabase(config.mongoURI);
app.listen(port, () => {
    console.log(`Server listening on http://localhost:${port}`);
});
