import "dotenv/config";
import express from "express";
import data from "./data.js";

import mongoose from "mongoose";
import seedRouter from "./routes/seedRoutes.js";
import productRouter from "./routes/productRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import cors from "cors"



const app = express();
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use("/api/seed", seedRouter);
app.use("/api/products", productRouter);
app.use("/api/users", userRoutes);
app.use("*", (req, res) => {
  res.send("deploy");
});
app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("connecting to DB");
  })
  .catch((err) => {
    console.log(err.message);
  });
const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`connecting on port ${port}`);
});
