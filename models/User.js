const {Schema, model, Types} = require("mongoose");

const schema = new Schema({
    name: {type: String, required: true}, // "unique: true" - уникальность
    telephone: {type: String, required: true},
    date: {type: Date, required: true}
});

module.exports = model("User", schema);