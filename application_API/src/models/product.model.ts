import mongoose, {Schema, Document} from 'mongoose';

export interface ProductInterface extends Document {
    name: string,
    price: string
}

export const productSchema = new Schema({
    name: { type: String, required: true },
    price:  { type: Number, required: true },
    _restaurantId: {type: Schema.Types.ObjectId, ref: 'Restaurant', required:true}
});

const Product = mongoose.model<ProductInterface>('Product', productSchema);

export default Product;