import mongoose from "mongoose";

const subtodoscheema = new mongoose.Schema({

    content: {
        type: String,
        required: true
    },
    complete: {
        type: Boolean,
        default: false
    },
    createdby: {
        type: mongoose.Schema.type.ObjectId,
        ref: "User"
    },


}, { timestamps: true })

export default SubTodo = mongoose.model("SubTodo", subtodoscheema)