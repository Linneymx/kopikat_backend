import express from "express";
import products from "./data/Products.js";

const app = express();
//LOAD ALL PRODUCTS FROM SERVER
app.get("/api/products", (req, res) => {
  res.json(products);
});

//LOAD ONE PRODUCT FROM SERVER
app.get("/api/products/:id", (req, res) => {
  const product = products.find((p) => p._id === req.params.id);
  res.json(product);
});

// API
app.get("/", (req, res) => {
  res.send("API IS RUNNING...");
});

app.listen(5000, console.log("server run in port 5000"));
