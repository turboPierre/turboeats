import mongoose, {Schema, Document} from 'mongoose';

export interface ProductInterface extends Document {
    name: string,
    price: string,
    describe: String,
    picture: File
}

export const productSchema = new Schema({
    name: { type: String, required: true },
    price:  { type: Number, required: true },
    _restaurantId: {type: Schema.Types.ObjectId, ref: 'Restaurant', required:true},
    describe: { type: String, required: false},
    picture : { type: File, required : false}
});

const Product = mongoose.model<ProductInterface>('Product', productSchema);

export default Product;