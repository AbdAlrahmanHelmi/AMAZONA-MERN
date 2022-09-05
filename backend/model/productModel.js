import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "please enter  name of product"],
      unique: [true, "the name is taken"],
    },
    slug: {
      type: String,
      required: [true, "please enter  slug of product"],
      unique: [true, "the slug is taken"],
    },
    image: {
      type: String,
      required: [true, "please enter  image of product"],
    },
    brand: {
      type: String,
      required: [true, "please enter  brand of product"],
    },
    category: {
      type: String,
      required: [true, "please enter  category of product"],
    },
    description: {
      type: String,
      required: [true, "please enter  description of product"],
    },
    price: {
      type: Number,
      required: [true, "please enter  price of product"],
    },
    countInStock: {
      type: Number,
      required: [true, "please enter  countInStock of product"],
    },
    rating: {
      type: Number,
      required: [true, "please enter  rating of product"],
    },
    numReviews: {
      type: Number,
      required: [true, "please enter  numReviwes of product"],
    },
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", productSchema);

export default Product;
