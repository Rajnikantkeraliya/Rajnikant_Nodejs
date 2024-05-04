import mongoose from "mongoose";

const productschema = new mongoose.Schema({

    description: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    productimage: {
        type: String
    },
    price: {
        type: Number,
        default: 0
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category"
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        res: "User"
    }

}, { timestamps: true })

export default Product = mongoose.model("Prodoct", productschema)