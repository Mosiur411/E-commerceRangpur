import { Schema, model, models } from 'mongoose';
const tvs = new Schema({
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
const SchemaTvs = models.tvs || model('tvs', tvs);
export default SchemaTvs