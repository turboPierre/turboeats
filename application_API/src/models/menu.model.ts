import mongoose, {Schema, Document} from 'mongoose';

export interface MenuInterface extends Document {
    name: string,
    price: string
}

export const menuSchema = new Schema({
    name: { type: String, required: true },
    _productId:[
        {type: Schema.Types.ObjectId, ref: 'Ingredient'}
    ],
    price: { type: String, required: true }
});

const Menu = mongoose.model<MenuInterface>('Menu', menuSchema);

export default Menu;