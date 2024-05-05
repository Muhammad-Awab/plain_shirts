async function userLogout(req, res){
    try {
        res.clearCookie("token").json({ message: "User Logged Out Successfully", success: true, error: false });
    } catch (error) {
        res.json({ message: err, success: false, error: true });
    }
}
module.exports=userLogout;