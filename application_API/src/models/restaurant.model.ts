import { POINT_CONVERSION_UNCOMPRESSED } from 'constants';
import mongoose, {Schema, Document} from 'mongoose';

export interface RestaurantInterface extends Document {
    name: string,
    _userId: number,
    describe: string,
    picture: string,
    address: string,
    city: string,
    phone: string,
    open_hour: string,
    close_hour: string
}

export const restaurantSchema = new Schema({
    name: { type: String, required: true },
    _userId: {type: Number, required:true},
    describe: { type: String, required: true},
    picture : { type: String, required : true},
    address : { type: String, required: true },
    city : {type: String, required:true},
    phone : { type: String, required: true },
    open_hour : { type: String, required:true},
    close_hour : { type: String, required:true}
});

const Restaurant = mongoose.model<RestaurantInterface>('Restaurant', restaurantSchema);

export default Restaurant;