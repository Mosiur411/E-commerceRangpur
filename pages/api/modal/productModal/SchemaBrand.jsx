import { Schema, model, models } from 'mongoose';
const brand = new Schema({
    title: {
        type: String,
        trim: true,
        required: true
    },
    img: {
        type: String,
        trim: true,
        required: true
    },
    rating: {
        type: Number,
        trim: true,
        required: true,
    },
    quantity: {
        type: Number,
        trim: true,
        required: true,
    },
    ExtraQuantity: {
        type: Number,
        trim: true,
        required: true,
    },
    path: {
        type: String,
        trim: true,
        required: true,
    },
}, { timestamps: true });
const SchemaBrand = models.brand || model('brand', brand);
export default SchemaBrand