import mongoose, {Schema, Document} from 'mongoose';

export interface CommandInterface extends Document {
    price: string
}

export const commandSchema = new Schema({
    price: { type: String, required: true }
});

const Command = mongoose.model<CommandInterface>('Command', commandSchema);

export default Command;