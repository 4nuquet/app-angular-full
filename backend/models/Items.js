import { Schema, model } from 'mongoose';

const schemeItems = new Schema({
    name: String,
    info: String,
    code: Number
});

export default model('Items', schemeItems);