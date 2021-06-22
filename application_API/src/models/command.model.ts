import mongoose, {Schema, Document} from 'mongoose';

export interface CommandInterface extends Document {
    price: string
}

export const commandSchema = new Schema({
    price: { type: String, required: true },
    _clientId:[
        {type: Schema.Types.ObjectId, ref: 'Client'}
    ],
    _restaurantId:[
        {type: Schema.Types.ObjectId, ref: 'Ingredient'}
    ],
    _delivererId:[
        {type: Schema.Types.ObjectId, ref: 'Ingredient'}
    ]
});

const Command = mongoose.model<CommandInterface>('Command', commandSchema);

export default Command;