const mongoose = require('mongoose')

const msh = mongoose.Schema

 const registerSchema =  msh({
    email:{
        type:String,
        unqiue:true,
        required:true
    },
    username:{
        type:String,
        unqiue:true,
        required:true
    },
    password:{
        type:String,
        unqiue:true,
        required:true
    },
})

 const Register = mongoose.model('Register',registerSchema);

 module.exports = Register