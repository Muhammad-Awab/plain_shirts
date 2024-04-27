const express = require('express');
const router = express.Router();
const Category = require('../models/categoryModel');

// Define routes for category CRUD operations similar to productRoutes.js
// (Create, Read, Update, Delete)
router.post('/categories', async (req, res) => {
    try {
        const category = await Category.create(req.body);
        res.status(201).json(category);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});
router.get('/categories', async (req, res) => {
    try {
        const categories = await Category.find();
        res.json(categories);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.get('/categories/:id', getCategory, async (req, res) => {
    try{
        const category= await Category.findById(req.params.id);
        if (!category) {
            return res.status(404).json({message: 'Category not found'});
        }
        res.json(category);
    }
    catch(error){
        res.status(500).json({message: error.message});
    }
});

router.put('/categories/:id', getCategory, async (req, res) => {
    try{
        const updatedCategory = await Category.findByIdAndUpdate(req.params.id, req.body, {new: true});
        if(!updatedCategory){
            return res.status(404).json({message: 'Category not found'});
        }
        res.json(updatedCategory);
    }
    catch(error){
        res.status(500).json({message: error.message});
    }
});

router.delete('/categories/:id',async (req,res)=>{
    try {
        const category= await Category.findByIdAndDelete(req.params.id);
        if(!category){
            return res.status(404).json({message: 'Category not found'});
        }
        res.json({message: 'Category deleted'});
    } catch (error) {
        res.status(500).json({message: error.message});
    }
})