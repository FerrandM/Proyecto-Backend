const { Router } = require("express");
//-----------Rutas--------------------
const cartRouter = require('./cart.router')
//------------------------------------

const router = Router()

router.get('/api', async(req, res)=>{
    res.send('Ruta Raíz')
})

router.use('/api/carts', cartRouter)



module.exports = router