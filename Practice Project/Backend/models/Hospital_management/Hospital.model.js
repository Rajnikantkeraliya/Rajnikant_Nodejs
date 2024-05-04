import mongoose from "mongoose";


const hospitalschema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    AddressLine1: {
        type: String,
        required: true
    },
    AddressLine2: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    pincode: {
        type: String,
        required: true
    },
    specializedIn: [{
        type: String,
    }],

}, { timestamps: true })


export default Hospital = mongoose.model("Hospital", hospitalschema)