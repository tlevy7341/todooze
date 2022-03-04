/** Imports */
import cors from "cors";
import express, { Express } from "express";
import helmet from "helmet";
import http from "http";
import { routes } from "./routes/routes";
require("dotenv").config();
const mongoose = require("mongoose");
const router: Express = express();

/** App setup */
router.use(express.json());
router.use(express.urlencoded({ extended: false }));
router.use(helmet());
router.use(cors());

/** Routes */
router.use(routes);

/** Connect to DB */
const URI = process.env.mongo_url;
const options = { useNewUrlParser: true, useUnifiedTopology: true };

mongoose.connect(URI, options).then(() => console.log("Database connected..."));

/** Server */
const httpServer = http.createServer(router);
const PORT: string = "3001";
httpServer.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
