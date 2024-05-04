import mongoose from "mongoose";

const categoryschema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    }


}, { timestamps: true })

export default Category = mongoose.model("Category", categoryschema)