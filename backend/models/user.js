var mongoose = require('mongoose')

var ScoreSchema = new mongoose.Schema({
    score:{
        type: Number,
        required:true
    }
},{timestamps:true} )

var UserSchema = new mongoose.Schema({
    deviceId:{
        type:String,
        required:true
    },
    username:{
        type:String,
        required:true,
        maxlength:32
    },
    statistics:[ScoreSchema]

},{ timestamps:true})

const User = mongoose.model('User', UserSchema)

module.exports = {User}