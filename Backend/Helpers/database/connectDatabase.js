const mongoose = require("mongoose")

const connectDatabase =async  () => {

    // console.log("MongoDB URI:",process.env.MONGO_URI);
    mongoose.set('strictQuery', true); // or false


    await mongoose.connect(process.env.MONGO_URI ,{useNewUrlParser : true})

    console.log("MongoDB Connection Successfully")

}

module.exports = connectDatabase
