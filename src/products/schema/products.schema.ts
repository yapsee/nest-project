import mongoose from "mongoose";

export const productsschema = new mongoose.Schema({
    name: {type: String, required: true},
    manufacturer: { type: String, required: true},
    price: { type: Number, required: true},

}, {timestamps: true});