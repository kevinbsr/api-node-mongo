const mongoose = require("mongoose")

const { Schema } = mongoose;

const { serviceSchema } = require("./Service")

const partySchema = new Schema({
    title: {
        type: String,
        required
    },
    author: {
        type: String,
        required
    },
    description: {
        type: String,
        required
    },
    budget: {
        type: Number,
        required
    },
    image: {
        type: String,
        required
    },
    services: {
        type: [serviceSchema]
    },
}, {timestamps: true})

const Party = mongoose.model("Party", partySchema)

module.exports = Party;