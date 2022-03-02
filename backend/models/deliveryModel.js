const mongoose = require('mongoose')

const deliveryRouteSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    text: {
        type: String,
        required: [true, 'Please enter some text'],
    }
}, {
    timestamps: true,
})

module.exports = mongoose.model('DeliveryRoute', deliveryRouteSchema)
