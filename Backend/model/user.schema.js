const mongoose = require("mongoose")
const user_schema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        match: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,

    },
    password: {
        type: String,
        required: true,
        minlength: 8,

    }
}, {
    timestamps: true,

})
const user = mongoose.model('User', user_schema)
module.exports=user;