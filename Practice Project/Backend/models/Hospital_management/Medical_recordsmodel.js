import mongoose from "mongoose";

const medicalrecordsschema = new mongoose.schema({}, { timestamps: true })

export default Medicalrecords = mongoose.model("Medicalrecords", medicalrecordsschema)