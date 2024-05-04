import mongoose from "mongoose";

const todoscheema = new mongoose.Schema({

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
    subTodos: {
        type: mongoose.Schema.type.ObjectId,
        ref: "SubTodo   "
    }

}, { timestamps: true })

export default Todo = mongoose.model("Todo", todoscheema)