const express = require('express')
require('../../mongoose/db')

const router = express.Router()

//Get Posts
router.get('/',async(req,res)=>{
    const posts = await 
    res.send("hello")
})
//Delete Posts

//Add Posts

//Update Posts
module.exports = router