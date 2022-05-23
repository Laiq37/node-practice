const Product = require('../models/product');
const { verifyTokenAndAdmin } = require('./userVerification');

const router = require('express').Router();

router.post("/", verifyTokenAndAdmin, async(req, res)=>{
    const newProduct = new Product(req.body)
    try{
        const saveProduct = await newProduct.save();
        return res.status(201).json(saveProduct)
    }catch(err){
        res.status(500).json(err);
    }
})

router.put("/:id", verifyTokenAndAdmin, async(req, res)=>{
    try{
        const updatedProduct = await Product.findByIdAndUpdate(req.params.id,{$set: req.body}, {new: true});
        return res.status(201).json(updatedProduct);
    }catch(err){
        res.status(500).json(err);
    }
})

router.delete("/:id", verifyTokenAndAdmin, async(req, res)=>{
    try{
        await Product.findByIdAndDelete(req.params.id);
        return res.status(201).json("Product deleted successfully");
    }catch(err){
        res.status(500).json(err);
    }
});

module.exports = router;