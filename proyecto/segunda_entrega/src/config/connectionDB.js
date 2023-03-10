const mongoose = require('mongoose')

const uri = 'url'
const dbConnection = async()=>{
    try {
        return await mongoose.connect(uri)
    } catch (error) {
        console.log(error);
    }
    console.log('connected to db');
}

module.exports = { dbConnection }
