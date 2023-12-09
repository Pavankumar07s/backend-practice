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
    name:"Pavan", 
    age:19,
  });
    res.send(createdUser)
});

router.get("/emplye",async(req,res)=>{
  let employe=await userModel.create({
  name:"Aayushya",
  Place:"Hyderabad",
  dateOfBIrst:11,
  })

  res.send(employe)
})

router.get("/tour",async(req,res)=>{
      let tourLocation=await userModel.create({
        place:"Himalya",
        name:"pavan",
      })
      res.send(tourLocation)
})
router.get("/userInformation",async (req,res)=>{
       let allUser= await userModel.find()
       res.send(allUser)
})

module.exports = router;
