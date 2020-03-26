const mongoose = require('mongoose')

const POSTS = mongoose.model('posts',{
    title:{
        type:String,
        required:true
    },
    bodyp:{
        type:String,
        required:true
    }
})

module.exports = POSTS