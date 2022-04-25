const jwt=require("jsonwebtoken")

const verifyUserRol=(req,res,next)=>{
    const token = req.headers.authorization.split(" ")[1];
    if (!token) return res.status(401).json({message:"No autorizado"});
    //SECRET_JWT_KEY viene del .env 
    jwt.verify(token,process.env.SECRET_JWT_KEY,(error,decode)=>{
        if(error) return next(error);
        const adminRolId=1
        if(decode.roleId===adminRolId) return next();
        res.json({message:"El usuario no es administrador"})
    })
}
module.exports=verifyUserRol