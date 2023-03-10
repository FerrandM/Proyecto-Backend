const { Router } =require('express')
const router = Router()

router.put('/:cid', async(req, res)=>{
    const { cid } = req.params 
})

router.put('/:cid/products/:pid', async(req, res)=>{
    const { cid, pid } = req.params 
})

router.delete('/:cid', async(req, res)=>{
    
})