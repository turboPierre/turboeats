import mongoose, {Schema, Document} from 'mongoose';

export interface MenuInterface extends Document {
    name: string,
    price: string,
    describe: string,
    picture: File
}

export const menuSchema = new Schema({
    name: { type: String, required: true },
    _productId:[
        {type: Schema.Types.ObjectId, ref: 'Product', required:true}
    ],
    _restaurantId: {type: Schema.Types.ObjectId, ref: 'Restaurant', required:true},
    price: { type: String, required: true },
    describe: { type: String, required: false},
    picture : { type: File, required : false}
});

const Menu = mongoose.model<MenuInterface>('Menu', menuSchema);

export default Menu;