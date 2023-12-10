import mongoose from 'mongoose';

const configOption ={
    useNewUrlParser:true,
    useUnifiedTopology:true
}

const connectDB = async()=>{
    const connURL = "mongodb://127.0.0.1:27017/simplyNews";
    mongoose.connect(connURL,configOption)
    .then(()=>console.log("Successfully Connected"))
    .catch((err)=>console.log(`Erorr happened => ${err}`))
}

export default connectDB;