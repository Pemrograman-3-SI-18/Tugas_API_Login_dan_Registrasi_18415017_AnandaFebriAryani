const mongoosee = require('mongoose');

const userSchema = mongoosee.Schema ({

    userName:{
        type: String
    },
    namaLengkap:{
        type: String
    },
    email: {
        type: String
    },
    noTelp: {
        type: String
    },
    role: {
        type: Number
    },
    password: {
        type: String
    }
})

module.exports = mongoosee.model('user' , userSchema)