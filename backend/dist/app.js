import { config } from "dotenv";
import morgan from "morgan";
config();
import express from "express";
import appRouter from "./routes/index.js";
const app = express();
// middlewares
app.use(express.json());
// will be removed in production
app.use(morgan("dev"));
app.use("/api/v1", appRouter);
export default app;
//# sourceMappingURL=app.js.map