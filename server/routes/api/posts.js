const express = require('express')
require('../../../mongoose/dbcon')
const Post = require('../../../mongoose/models/postsmodel')
const router = express.Router()

//Get Posts
router.get('/home',async(req,res)=>{
    try {
        const posts = await Post.find({})
        res.send(posts)
    } catch (error) {
        res.send(error)
    }
})
//Delete Posts
router.delete('/delete/:id',async(req,res)=>{
    try {
        const delpost = await Post.findByIdAndDelete(req.params.id)
        if(!delpost){
            res.status(404).send({error:"notfound"})
        }
        res.send(delpost)
    } catch(error){
        res.status(500).send()
    }
})
//Add Posts
router.post('/add-post',async(req,res)=>{
    const pos = new Post(req.body)
    try {
        await pos.save()
        res.status(201).send(pos)
    } catch (error) {
        res.status(400).send(error)
    }
})
//Update Posts
module.exports = router