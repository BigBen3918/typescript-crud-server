require("dotenv").config();
import express, { Express } from "express";
import cors from "cors";

// External Modules
import API from "./apis";

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

app.use(express.static(__dirname + "/build"));
app.get("/*", function (req, res) {
    res.sendFile(__dirname + "/build/index.html", function (err) {
        if (err) {
            res.status(500).send(err);
        }
    });
});

// API Router
API(router);
app.use("/api", router);

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
