let mongoose =require('mongoose')
mongoose.connect("mongodb://127.0.0.1:27017/practicekaro");
//uper wali line se database banega practice name se


//schema matlab aappko ye batana banne wlaa har document main kya kya hoga

let userSchema=mongoose.Schema({
  userName:String,
  name:String,
  age:Number,
});

let employeSchema=mongoose.Schema({
  name:String,
  Place:String,
  dateOfBIrst:Number,
})

let tour=mongoose.Schema({
  place:String,
  name:String
})
module.exports=mongoose.model("user",userSchema);//collection banata hai and aage wale naam se banega 
module.exports=mongoose.model("Employe",employeSchema)
module.exports=mongoose.model("tour",tour)