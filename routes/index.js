var express = require('express');
var router = express.Router();
const userModel= require("./users")
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get("/create", async function(req, res) {
 const createdUser=await userModel.create({
    userName:"Pavan07s",
    name:"aryan", 
    age:30,
  });
    res.send(createdUser)
});
router.get("/userInformation",async (req,res)=>{
       let allUser= await userModel.find()
       res.send(allUser)
})

module.exports = router;
