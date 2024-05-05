const Product = require('../models/productModel');
const admin = require("../firebaseConfig");

const storageBucketName = "plain-shirts.appspot.com"; // Specify your bucket name here
const storage = admin.storage().bucket(storageBucketName);

// Controller functions for products CRUD operations
const productController = {
    // createProduct: async (req, res) => {
    //     try {
    //         const product = await Product.create(req.body);
    //         res.status(201).json(product);
    //     } catch (error) {
    //         res.status(400).json({ message: error.message });
    //     }
    // },
    createProduct: async (req, res) => {
        try {
            const { name, description, price, quantity, category } = req.body;
            const imageFile = req.file;

            // Upload image to Firebase Storage
            const imageFileName = `${Date.now()}_${imageFile.originalname}`;
            const fileUpload = storage.file(`product_images/${imageFileName}`).createWriteStream({
                metadata: {
                    contentType: imageFile.mimetype
                }
            });

            fileUpload.on('error', (error) => {
                console.error('Error uploading image to Firebase Storage:', error);
                res.status(500).json({ message: 'Error uploading image' });
            });

            fileUpload.on('finish', async () => {
                try {
                    const downloadURL = await storage.file(`product_images/${imageFileName}`).getSignedUrl({
                        action: 'read',
                        expires: '01-01-2030' // Specify expiry date as per your requirement
                    });

                    // Create the product with image URL
                    const product = await Product.create({
                        name,
                        description,
                        price,
                        quantity,
                        image: downloadURL[0], // Use the first URL in the array
                        category
                    });

                    res.status(201).json(product);
                } catch (error) {
                    console.error('Error creating product:', error);
                    res.status(500).json({ message: 'Error creating product' });
                }
            });

            // Pipe the file buffer into the upload stream
            fileUpload.end(imageFile.buffer);
        } catch (error) {
            console.error('Error creating product:', error);
            res.status(400).json({ message: error.message });
        }
    },
    
    getAllProducts: async (req, res) => {
        try {
            const products = await Product.find();
            res.json(products);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },

    getProductById: async (req, res) => {
        try {
            const product = await Product.findById(req.params.id);
            if (!product) {
                return res.status(404).json({ message: 'Product not found' });
            }
            res.json(product);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },

    updateProduct: async (req, res) => {
        try {
            const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
            if (!product) {
                return res.status(404).json({ message: 'Product not found' });
            }
            res.json(product);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },

    deleteProduct: async (req, res) => {
        try {
            const product = await Product.findByIdAndDelete(req.params.id);
            if (!product) {
                return res.status(404).json({ message: 'Product not found' });
            }
            res.json({ message: 'Product deleted successfully' });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
};

module.exports = productController;
