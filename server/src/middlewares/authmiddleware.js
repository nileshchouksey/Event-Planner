export const sample=(req,res,next)=>{
    console.log("I am middleware sample")
    console.log(req.url);
    console.log(req.method);
    next();
}
export const sample1=(req,res,next)=>{
    console.log("I am middleware sample1")
    console.log(req.url);
    console.log(req.method);
    next();
    
}
export const sample2=(req,res,next)=>{
    console.log("I am middleware sample2")
    console.log(req.url);
    console.log(req.method);
    next();
}