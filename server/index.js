require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const connection = require("./db");
const userRoutes = require("./routes/users");
const authRoutes = require("./routes/auth");
// Import product controller
const productController = require("./controllers/productController");
const categoryController = require("./controllers/categoryController");
const upload = require("./fileUploadMiddleware");

// database connection
connection();

// middlewares
app.use(express.json());
app.use(cors());

// routes
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
// Product routes
app.post("/api/products", upload.single('image'), productController.createProduct);
app.get("/api/products", productController.getAllProducts);
app.get("/api/products/:id", productController.getProductById);
app.put("/api/products/:id", productController.updateProduct);
app.delete("/api/products/:id", productController.deleteProduct);
// Category routes
app.post("/api/categories", categoryController.createCategory);
app.get("/api/categories", categoryController.getAllCategories);
app.get("/api/categories/:id", categoryController.getCategoryById);
app.put("/api/categories/:id", categoryController.updateCategory);
app.delete("/api/categories/:id", categoryController.deleteCategory);

const port = process.env.PORT || 8080;
app.listen(port, console.log(`Listening on port ${port}...`));
