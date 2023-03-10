const { Schema, model} = require('mongoose')
const { mongoosePaginate } = require('mongoose-paginate-v2')

const collection = 'cart'

const CartSchema = new Schema({
    products:{
        type: [{
            product: {              
                    type: Schema.Types.ObjectId,
                    ref: 'products'
            }
        }]
    }
})
CartSchema.pre('find', function(){
    this.populate('products.product')
})

CartSchema.plugin(mongoosePaginate)
const CartModel = model(collection, CartSchema)
module.exports = CartModel