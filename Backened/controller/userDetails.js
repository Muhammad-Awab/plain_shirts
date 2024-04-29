async function userDetailsController(req,res){
    try{
    
    }catch(err){
        res.status(400).json({message:err,success:false,error:true});
    }
}
module.exports=userDetailsController;