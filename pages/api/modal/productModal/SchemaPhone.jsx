import { Schema, model, models } from 'mongoose';
const phone = new Schema({
    name: {
        type: String,
        trim: true,
        required: true
    },
    brand: {
        type: String,
        trim: true,
        required: true
    },
    model: {
        type: String,
        trim: true,
        required: true
    },
    img: {
        type: String,
        trim: true,
        required: true
    },
    price: {
        type: String,
        trim: true,
        required: true,
    },
    role: {
        type: String,
        trim: true,
        required: true
    }
}, { timestamps: true });
const SchemaPhone = models.phone || model('phone', phone);
export default SchemaPhone