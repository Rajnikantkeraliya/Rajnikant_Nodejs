import mongoose from "mongoose";

const Userscheema = new mongoose.Schema({

    username: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true,
        unique: true,
    }


}, { timestamps: true })

export default User = mongoose.model("User", Userscheema)