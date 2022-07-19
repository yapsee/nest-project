import { Schema } from "mongoose";

export const userSchema = new Schema({
    username: { type: String, unique: true, required: true },
    password: { type: String, required: true }
}, { timestamps: true });