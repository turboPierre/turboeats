import mongoose, {Schema, Document} from 'mongoose';

export interface MenuInterface extends Document {
    name: string,
    price: number,
    describe: string
}

export const menuSchema = new Schema({
    name: { type: String, required: true },
    _productId:[
        {type: Schema.Types.ObjectId, ref: 'Product', required:true}
    ],
    _restaurantId: {type: Schema.Types.ObjectId, ref: 'Restaurant', required:true},
    price: { type: Number, required: true },
    describe: { type: String, required: true}
});

const Menu = mongoose.model<MenuInterface>('Menu', menuSchema);

export default Menu;