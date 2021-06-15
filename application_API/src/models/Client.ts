const mongoose = require('mongoose');

const clientSchema = mongoose.Schema({
    id: { type: String, required: true },
    name: { type: String, required: true },
    nickname: { type: String, required: true },
    address: { type: String, required: true },
    city: {type : String, required : true},
    mail: { type: String, required: true },
    phone:{ type: Number, required: true}
});

module.exports = mongoose.model('Client', clientSchema);