import mongoose, {Schema, Document} from 'mongoose';

export interface CommandInterface extends Document {
    price: string
}

export const commandSchema = new Schema({
    name: { type: String, required: true },
    price: { type: String, required: true },
    _clientId:[
        {type: Schema.Types.ObjectId, ref: 'User', required:true}
    ],
    _restaurantId:[
        {type: Schema.Types.ObjectId, ref: 'User', required:true}
    ],
    _delivererId:[
        {type: Schema.Types.ObjectId, ref: 'User', required:true}
    ],
    _menuId:[
        {type: Schema.Types.ObjectId, ref: 'Menu', required:true}
    ]
});

const Command = mongoose.model<CommandInterface>('Command', commandSchema);

export default Command;