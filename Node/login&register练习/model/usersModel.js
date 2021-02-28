const mongoose = require('mongoose')


const Schema = mongoose.Schema

const usersRule = new Schema({
    email: {
        type: String,
        require: true,
        unique: true
    },
    nick_name: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    data: {
        type: Date,
        default: Date.now()
    },
    enable_flag: {
        type: String,
        default: 'Y'
    }
})

const usersModel = mongoose.model('users2', usersRule)

module.exports = usersModel