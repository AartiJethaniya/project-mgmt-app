const mongoose = require('mongoose')

const connectDB = async () =>{
    const conn = await mongoose.connect('mongodb+srv://jethaniya_20:1234@cluster0.iw3ww7j.mongodb.net/mgmt-db?retryWrites=true&w=majority');
    console.log(`MongoDB Connected : ${conn.connection.host}`.cyan.underline.bold)
}

module.exports = connectDB;