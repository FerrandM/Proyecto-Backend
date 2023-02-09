import express from 'express'
import ProductManager from './productManager.js'
// import ProductManager from './productManager.js'
let productManager = new ProductManager('./file.json', 1, 'ola', '...', 250, '...', 225, 13)

//agrego para que exista algo
productManager.addProduct()



const app = express ()
const PORT = 8080

app.use(express.urlencoded({extended: true}))
app.get('/', (req, res)=>{
    res.send('ke lo ke ')
})

app.get('/products', (req, res)=>{
    let queries = req.query
    let size = Object.keys(queries)
    if(size.length === 0){
        console.log('mostrando productos');
        res.send(productManager.getProduct())
    }else{
        let limite = queries.limit
        console.log('mostrando los', limite, 'primeros productos');
        res.send(productManager.getProduct()[0,limite])
    }
})

app.get('/products/:pid', (req, res)=>{
    let para = req.params.pid
    res.send(productManager.getProductById(para))
})



app.listen(PORT, err=>{
    if (err) {
        console.log(err);
    }else{
        console.log(`Escuchando oli el puerto ${PORT}`);
    }
}) 