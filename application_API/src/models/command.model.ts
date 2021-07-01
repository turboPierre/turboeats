import mongoose, {Schema, Document} from 'mongoose';

export interface CommandInterface extends Document {
    price: string,
    delivered: boolean
}

export const commandSchema = new Schema({
    price: { type: String, required: true },
    delivered: {type: Boolean, required:true},
    _clientId: {type: Number, required:true},
    _restaurantId: {type: String, required:true},
    _delivererId: {type: Number, required:true},
    address: {type: String, required:true},
    city: {type: String, required:true},
    _menuId:[
        {type: Schema.Types.ObjectId, ref: 'Menu'}
    ],
    _productId:[
        {type: Schema.Types.ObjectId, ref: 'Product'}
    ]
});

const Command = mongoose.model<CommandInterface>('Command', commandSchema);

export default Command;