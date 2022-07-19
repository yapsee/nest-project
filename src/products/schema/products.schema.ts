import mongoose from "mongoose";

export const productsschema = new mongoose.Schema({
    name: {type: String, required: true},
    manufacturer: { type: String, required: true},

}, {timestamps: true});
