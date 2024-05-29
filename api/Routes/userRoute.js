const express = require("express")
const userRouter = express.Router()
const userController = require("../controller.js/userController")

userRouter.post("/",userController.createUser)
.get("/all",userController.getUsers)
.get("/:id",userController.getUserbyId)


module.exports=userRouter;