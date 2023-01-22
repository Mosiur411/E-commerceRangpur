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
    path: {
        type: String,
        trim: true,
        required: true,
    },
}, { timestamps: true });
const SchemaBrand = models.brand || model('brand', brand);
export default SchemaBrand