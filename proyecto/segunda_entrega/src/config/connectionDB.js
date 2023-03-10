const mongoose = require('mongoose')

const uri = 'mongodb://localhost:27017/proyecto'
const dbConnection = async()=>{
    try {
        return await mongoose.connect(uri)
    } catch (error) {
        console.log(error);
    }
    console.log('connected to db');
}

module.exports = { dbConnection }
