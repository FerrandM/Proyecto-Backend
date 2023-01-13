

const getProduct = []
let id = 1

function addProduct (title, des, price, thumbnail, code, stock){
    let flag = true
    getProduct.forEach(e => {
            let obj = {
                title: title,
                des: des,
                price: price,
                thumbnail: thumbnail,
                code: code,
                stock: stock}
            let claves = Object.keys(e)
            for(let i=0; i < 2; i++){
                let clave = claves[i];
                if (obj[clave] === e[clave]){
                    console.log('nombre identico, error');
                    flag = false
                }
            }        
        });
    if (flag === true){
        getProduct.push({
            id: id,
            title: title,
            des: des,
            price: price,
            thumbnail: thumbnail,
            code: code,
            stock: stock})
        id += 1  
    }     
    if ( getProduct.length === 0){
        getProduct.push({
            id: id,
            title: title,
            des: des,
            price: price,
            thumbnail: thumbnail,
            code: code,
            stock: stock})
        id += 1         
    }
};

function getProductById (id) {
    let flag = true
    getProduct.forEach(element => {
        if (id === element.id){
            console.log(element)
            flag = false
        }
    })
    if (flag === true){
        console.log('id del producto no encontrado; el producto no existe');
    }
}

addProduct('producto prueba', 'Este producto es una prueba', 200, 'sin imagen', 'abc123', 25)
addProduct('producto prueba', 'Este producto es una prueba', 200, 'sin imagen', 'abc123', 25)
addProduct('producto prueb', 'Este producto es una prueba', 200, 'sin imagen', 'abc123', 25)
addProduct('producto prueb', 'Este producto es una prueba', 200, 'sin imagen', 'abc123', 25)
addProduct('producto prueb', 'Este producto es una pruea', 200, 'sin imagen', 'abc123', 25)
addProduct('productprueb', 'Este producto es una prueba', 200, 'sin imagen', 'abc123', 25)
getProductById(0)
console.log(getProduct);


//el id es de números y empieza desde el 1 ;)
