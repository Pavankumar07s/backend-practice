let mongoose =require('mongoose')
mongoose.connect("mongodb://127.0.0.1:27017/practicekaro");
//uper wali line se database banega practice name se


//schema matlab aappko ye batana banne wlaa har document main kya kya hoga

let userSchema=mongoose.Schema({
  userName:String,
  name:String,
  age:Number,
});

module.exports=mongoose.model("user",userSchema);//collection banata hai and aage wale naam se banega collection