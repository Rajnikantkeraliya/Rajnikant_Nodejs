import mongoose from "mongoose";

const doctorschema = new mongoose.Schema({


    name: {
        type: String,
        required: true
    },
    salary: {
        type: String,
        required: true
    },
    qualification: {
        type: String,
        required: true
    },
    experienceInYears: {
        type: Number,
        required: true
    },
    worksInHospitals: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Hospital"
    }]


}, { timestamps: true })


export default Doctor = mongoose.model("Doctor", doctorschema)