const express = require("express");
const Users = require("../schemas/test");
const Verifuser = require("../middleware/authuser");
const router = express.Router()

router.post("/add",async(req,res)=>{
  const data = Users(req.body);
  const savedata = await data.save() 
  if(savedata){
    console.log("data added to database")
  }
})

router.get("/alluser" , async(req,res)=>{
    const alldata = await Users.find({})
    res.send({"users" : alldata})
})

router.delete("/delete/:id" , async (req,res)=>{
    const id = req.params.id;
    const deleteduser = await Users.findByIdAndDelete(id)
    if(deleteduser){
        console.log("user deleted..!")
    }
})


router.patch("/edit/:id" , async(req,res)=>{
  const id = req.params.id;
  const editdata = await Users.findByIdAndUpdate(id, req.body)
  if(editdata){
    res.status(200).json({
      message: "user updated",
      data : editdata
    })
  }else{
    res.status(404).json({
      message : "something went wrong"
    })
  }

})


router.get("/getuser/:id",async(req,res)=>{
  const id = req.params.id;
  const user = await Users.findById(id)
  if(user){
    res.status(200).json({
      message : "User found",
      data :  user
    })
  }else{
    res.status(404).json({
      message : "user not found"
    })
  }
})

router.get("/username/:username",async(req,res)=>{
  const username = req.params.username;
  console.log(username)
  const user = await Users.findOne({"username" :  username})
  console.log(user)
  if(user){
    res.status(200).json({
      message : "User found",
      data :  user
    })
  }else{
    res.status(404).json({
      message : "user not found"
    })
  }
})


module.exports = router