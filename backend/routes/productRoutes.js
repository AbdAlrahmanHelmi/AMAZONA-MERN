import express from "express";
import Product from "../model/productModel.js";

const productRouter = express.Router();

productRouter.get("/", async (req, res) => {
  const products = await Product.find();
  res.send(products);
});

productRouter.get("/slug/:slug", async (req, res) => {
  const { slug } = req.params;
  console.log(slug);
  const product = await Product.findOne({ slug });
  if (product) {
    console.log(product);
    res.send(product);    
  } else {
    res.status(404).send({ message: "product not found" });
  }
});

productRouter.get("/:id", async (req, res) => {
  const { id } = req.params;

  const product = await Product.findById(id);
  if (product) {
    console.log(product);
    res.send(product);
  } else {
    res.status(404).send({ message: "product not found" });
  }
});

export default productRouter;
