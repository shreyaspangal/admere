const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        const connection = await mongoose.connect(process.env.MONGO_URI, {
            useUnifiedTopology: true,
            usenewUrlParser: true,
        });

        console.log(`Mongo DB connected to ${connection.connection.host}`);
    } catch (error) {
        console.log(error.message);
        process.exit();
    }
}

mongoose.set('strictQuery', true);

module.exports = connectDB;