const jwt = require("jsonwebtoken")
const createError =require("./error")

const varifytoken = (req,res,next)=>{
    const token = req.cookies.access_token;
    console.log(token + "token")
    if(!token){
        return next(createError(401,"you are not authtichend!"))
    }

    jwt.verify(token, "abcdef", (err,user)=>{
        if(err) return next(createError(404,"token is not valid!"))
        req.user = user;
        next()
    })
}

 const verifyUser = (req, res, next) => {
    varifytoken(req, res, next, () => {
      if (req.user.id === req.params.id || req.user.isAdmin) {
        next();
      } else {
        return next(createError(403, "You are not authorized!"));
      }
    });
  };
  
   const verifyAdmin = (req, res, next) => {
    varifytoken(req, res, next, () => {
      if (req.user.isAdmin) {
        next();
      } else {
        return next(createError(403, "You are not authorized!"));
      }
    });
  };
  



module.exports = {varifytoken,verifyUser,verifyAdmin}
