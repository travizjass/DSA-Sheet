
const mongoose =require('mongoose');
require('dotenv').config()


const mongo_URI="mongodb://localhost:27017/test?directConnection=true"
// const mongo_URI="mongodb+srv://root:toor@cluster0.vh2d3os.mongodb.net/Faraj"

   console.log(process.env.mongo_URI_Atlas)
const connectToMongo=()=>{
    mongoose.connect(mongo_URI, ()=>{
        console.log("Connect with mongo successfull");
    })
}

module.exports=connectToMongo