const { Schema, model } = require('mongoose')

//create end export module with Schema of book (needed to work with our database in routes)
const schema = new Schema({
    title: {type: String, require: true},
    author: {type: String, required: true},
    description: {type: String, require: true}
})

module.exports = model('Book', schema)