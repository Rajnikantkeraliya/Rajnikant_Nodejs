import mongoose from "mongoose";


const patientschema = new mongoose.Schema({


    name: {
        type: String,
        required: true
    },
    diagonsedwith: {
        type: String,
        required: true
    },
    Address: {
        type: String,
        required: true
    },
    Age: {
        type: Number,
        required: true
    },
    Bloodgroup: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        enum: ["Male", "Female", "Other"],
        required: true
    },
    admitedin: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Hospital"
    }


}, { timestamps: true })

export default Patient = mongoose.model("Patient", patientschema)

