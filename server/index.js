require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const connection = require("./db");
const userRoutes = require("./routes/users");
const authRoutes = require("./routes/auth");
// Import product controller
const productController = require("./controllers/productController");

// database connection
connection();

// middlewares
app.use(express.json());
app.use(cors());

// routes
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
// Product routes
app.post("/api/products", productController.createProduct);
app.get("/api/products", productController.getAllProducts);
app.get("/api/products/:id", productController.getProductById);
app.put("/api/products/:id", productController.updateProduct);
app.delete("/api/products/:id", productController.deleteProduct);

const port = process.env.PORT || 8080;
app.listen(port, console.log(`Listening on port ${port}...`));
