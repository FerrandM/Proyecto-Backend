const fs = require('fs')

class ProductManager{
    constructor(path, id, title, des, price, thumbnail, code, stock){
        this.path = path
        this.id = id
        this.title = title
        this.des = des
        this.price = price
        this.thumbnail = thumbnail
        this.code = code
        this.stock = stock
    }
    async getProduct(){
        try {
            if(fs.existsSync('./file.json')=== true){
                let array = JSON.parse(await fs.promises.readFile('./file.json'))
                console.log(array);
            }else{
                console.log('El archivo aún no existe');
            }
        } catch (error) {
            console.log(error);
        }
    }
    async addProduct(){
        try {
            let item = {
                id: this.id,
                title: this.title,
                des: this.des,
                price: this.price, 
                thumbnail: this.thumbnail, 
                code: this.code,
                stock: this.stock
            }
            if (fs.existsSync('./file.json')===true) {
                let array = JSON.parse(await fs.promises.readFile('./file.json'))
                let flag = true
                array.forEach(element => {
                    if(element.id === this.id){
                        console.log('producto ya existente, para actualizar el producto use updateProduct()');
                        flag = false
                    }
                });
                if(flag === true){
                    array.push(item)
                    await fs.promises.writeFile('./file.json', JSON.stringify(array, 'replacer' ,'\t'), 'utf-8')
                }    
            } else {
                let array = Array(item);
                await fs.promises.writeFile('./file.json', JSON.stringify(array, 'replacer' ,'\t'), 'utf-8')

            }
        } catch (error) {
            console.log(error);
        }
        }
    async getProductById(){
        try {
            let itemId = this.id
            if(fs.existsSync('./file.json')=== true){
                let array = JSON.parse(await fs.promises.readFile('./file.json'))
                let flag = true 
                array.forEach(element => {
                    if (itemId === element.id) {
                        console.log(element);
                        flag = false
                    }
                })
                if(flag === true){
                    console.log('producto no encontrado');
                }
            }else{
                console.log('El archivo aún no existe');
            }
        } catch (error) {
            console.log(error);
        }
    }
    async updateProduct(){
        try {
            let item = {
                id: this.id,
                title: this.title,
                des: this.des,
                price: this.price, 
                thumbnail: this.thumbnail, 
                code: this.code,
                stock: this.stock
            }
            if (fs.existsSync('./file.json')===true) {
                let array = JSON.parse(await fs.promises.readFile('./file.json'))
                console.log(array);
                let i = 0
                let flag = false
                array.forEach(element => {
                    if(element.id === this.id){
                        array[i] = item
                        flag = true 
                    }else{
                        i += 1
                    }
                })
                if(flag === true){
                    await fs.promises.writeFile('./file.json', JSON.stringify(array, 'replacer', '\t'), 'utf-8')
                }else{
                    console.log('no hay producto para actualizar');
                }
            } else {
                console.log('no hay producto para actualizar');

            }
        } catch (error) {
            console.log(error);
        }
        }
    async deleteProduct(){
        if (fs.existsSync('./file.json')===true) {
            let array = JSON.parse(await fs.promises.readFile('./file.json'))
            console.log(array);
            let i = 0
            let flag = false
            array.forEach(element => {
                if(element.id === this.id){
                    array.slice(i, 1)
                    flag = true 
                }else{
                    i += 1
                }
            })
            if(flag === true){
                await fs.promises.writeFile('./file.json', JSON.stringify(array, 'replacer', '\t'), 'utf-8')
            }else{
                console.log('no hay producto para eliminar');
            }
        } else {
            console.log('no hay producto para actualizar');

        }
    } catch (error) {
        console.log(error);
    }
}

let producto = new ProductManager('./file.json', 1, 'ola', '...', 250, '...', 225, 13)

producto.addProduct()
producto.getProductById()

let producto2 = new ProductManager('./file.json', 1, 'olassss', '...', 200, '...', 15, 1300)
producto2.updateProduct()
