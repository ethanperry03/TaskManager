// express and instance
import path from "path";
import express from "express";
const app = express();

// import routes
import tasks from "./routes/tasks";

// db connection
import dotenv from "dotenv";
dotenv.config();
const mongoURI: string = process.env.MONGO_URI!;
import { connectDB } from "./db/connect";

// other middlewares
app.use(express.static(path.join(__dirname, "../public")));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// routes
app.use("/api/v1/tasks", tasks);

// custom middleware
import { notFound } from "./middleware/not-found";
app.use(notFound);
const errorHandler = require("./middleware/error-handler");
app.use(errorHandler);

// connection to db
const PORT = 3000;
const start = async () => {
  try {
    await connectDB(mongoURI);
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  } catch (error: any) {
    console.log(`Error: ${error.message}`);
  }
};

start();
