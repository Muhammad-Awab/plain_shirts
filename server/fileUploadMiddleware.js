// fileUploadMiddleware.js

const multer = require('multer');
const { storage } = require('./firebaseConfig'); // Adjust the path as per your project structure

if (!storage) {
    throw new Error('Firebase Storage configuration is missing or invalid');
}

// Set up multer storage
const multerStorage = multer.memoryStorage();

// Set up multer instance
const upload = multer({
    storage: multerStorage,
    limits: {
        fileSize: 5 * 1024 * 1024 // Limit file size to 5MB (adjust as needed)
    }
});

module.exports = upload;
