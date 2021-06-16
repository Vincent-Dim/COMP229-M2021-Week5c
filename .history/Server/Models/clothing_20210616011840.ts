import mongoose from 'mongoose';
const Schema = mongoose.Schema;  //alias for the Mongoose Schema

const ClothingSchema = new Schema
({
    name: String,
    brand: String,
    category: String,
    colour: String,
    size: String,
    price: Number
}, 
{
    collection: "clothing"
});

const Model = mongoose.model("Clothing", ClothingSchema);  //model method take in the name of the model and the schema
export default Model;
