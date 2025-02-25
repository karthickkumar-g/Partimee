import express from "express"

const router = express.Router()

router.get('/login',async(req,res)=>{
    res.status(200).send("Hello")
})

router.post("/register",(req,res)=>{
    res.status(200).json({message:"Register route"})
})

export default router;