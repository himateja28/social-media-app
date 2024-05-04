const mongoose = require('mongoose')

const postSchema = mongoose.Schema({
    img:{
        type:String,
        required:true,
    },
    caption:{
        type:String,
        required:true,
    },
    createdby:{
        type:String,
        required:true,
    }
})

const Post = mongoose.model('Post',postSchema)

module.exports = Post