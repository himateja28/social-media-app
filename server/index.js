const express = require('express')
const cors = require('cors')
const app = new express()
const Register = require('./models/model')
const database = require('./models/db')

app.use(cors())
app.use(express.json())

database.connection

app.post('/register',(req,res)=>{
    const newuser = new Register(req.body)
    newuser.save()
    res.send("1")
})
app.post('/login',async(req,res)=>{
    console.log(req.body)
    const result = await Register.findOne({username:req.body.username,password:req.body.password})
    if(result!=null){
        console.log(result)
        res.send("1")
    }
})

app.listen(8000,()=>{
    console.log("server is running at port 8000")
})

