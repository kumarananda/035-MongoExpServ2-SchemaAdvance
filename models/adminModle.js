const mongoose = require('mongoose')

const adminModle = mongoose.Schema({
    name : String,
    age : Number,
    location : String,
    skill : String,
},
{
    timestamps: true
})

module.exports = mongoose.model('admins', adminModle)

