import { Schema, model, models } from 'mongoose';
const product = new Schema({
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
        unique : true,
        required: true
    },
    img: {
        type: String,
        trim: true,
        required: true
    },
    price: {
        type: Number,
        trim: true,
        required: true,
    },
    unPrice: {
        type: Number,
        default: '0',
        trim: true,
    },
    inStock: {
        type: Number,
        trim: true,
        required: true,
    },
    type: {
        type: String,
        trim: true,
        required: true,
    },
    description: {
        type: String,
        trim: true,
        required: true,
    },
    shortDescription: {
        type: String,
        trim: true,
        required: true,
    },
    byuLink: {
        type: String,
        trim: true,
        required: true,
    },
    subCategory: {
        type: String,
        trim: true,
        required: true,
    },
}, { timestamps: true });
const SchemaProducts = models.product || model('product', product);
export default SchemaProducts

/* 

buy Link




*/