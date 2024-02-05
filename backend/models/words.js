var mongoose = require('mongoose')

var WordSchema = new mongoose.Schema({
    easy: {type: [String]},
    medium: {type: [String]},
    hard: {type: [String]},
},{ timestamps:true})

const Word = mongoose.model('Word', WordSchema)

module.exports = {Word}