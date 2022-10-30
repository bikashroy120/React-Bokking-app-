const creactError = (status,message)=>{
    const err= new Error();
    err.status = status;
    err.message = message
}

module.exports = {creactError}