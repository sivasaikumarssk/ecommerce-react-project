const mongoose = require("mongoose");
module.exports = ()=>{
    return mongoose.connect("mongodb+srv://siva:siva123@cluster0.wpbavqx.mongodb.net/tendyz")
}