import mongoose from "mongoose";


const orderitemscheema = new mongoose.Schema({

    productid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product"
    },
    Quantity: {
        type: Number,
        required: true
    }
})

const orderscheema = new mongoose.Schema({

    orderPrice: {
        type: Number,
        required: true
    },
    customer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    orderitems: {
        type: [orderitemscheema]
    },
    Address: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: ["PENDING", "CANCELLED", "DELIVERED"],
        default: "PENDING"
    }

}, { timestamps: truw })

export default Order = mongoose.model("Order", orderscheema)