module.exports = function(){
    return function(req,res,next){
        const user = req.user;
        console.log(req.body.user_id,user._id);
        if(req.body.user_id != user._id){
            return res.status(403).send({ message: "Permission denied" });
        }
        return next();
    };
}