import { Schema, model, models } from 'mongoose';
const home = new Schema({
    title: {
        type: String,
        trim: true,
        required: true
    },
    distinction: {
        type: String,
        trim: true,
        required: true,
    },
    number: {
        type: Number,
        trim: true,
        required: true,
    },
    type: {
        type: String,
        trim: true,
        required: true,
    }
}, { timestamps: true });
const SchemaHome = models.home || model('home', home);
export default SchemaHome