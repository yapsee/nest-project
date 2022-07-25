import { Schema } from "mongoose";
import { userModelName } from "src/users/schemas/user.model-name";
import { v4 } from 'uuid';


export const reservationSchema = new Schema({
    products: [{
        id: { type: Schema.Types.ObjectId },
        name: { type: String },
        price: { type: Number },
        manufacturer: { type: String },
    }],
    amount: { type: Number },
    client: { type: Schema.Types.ObjectId, ref: userModelName },
    transactionId: { type: String, default: v4 }
}, { timestamps: true });