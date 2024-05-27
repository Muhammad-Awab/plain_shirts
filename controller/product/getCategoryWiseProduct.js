const productModel = require("../../models/productModel")

const getCategoryWiseProduct = async(req,res)=>{
    res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    try{
        const { category } = req?.body || req?.query
        const product = await productModel.find({ category })

        res.json({
            data : product,
            message : "Product",
            success : true,
            error : false
        })
    }catch(err){
        res.status(400).json({
            message : err.message || err,
            error : true,
            success : false
        })
    }
}

module.exports = getCategoryWiseProduct