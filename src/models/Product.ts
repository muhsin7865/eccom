import { Schema, model, models } from "mongoose"

const productSchema = new Schema({
    title: { type: String, required: true },
    description: String,
    price: { type: Number, required: true }
})

export const Product = models.product || model('product', productSchema)