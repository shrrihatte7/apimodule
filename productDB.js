const connectDB = require("./db/connect");
const model = require("./models/model");
const productJson = require("./products.json");
const start= async()=>{
    await connectDB(process.env.MONGODB_URL);
    await model.deleteMany();
    await model.create(productJson);
    console.log("success");
}
start();
