const mongoose = require('mongoose')


const productSchema = new mongoose.Schema({
    title:{
        type: String,
        trim: true,
        required: true
    },
    price:{
        type: Number,
        trim: true,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    content:{
        type: String,
        required: true
    },
    images:{
        type: Object,
        required: true
    },
    category:{
        type: String,
        required: true
    },
    /*****/
    location:{
        type:String,
    },
    /****/
    lat:{
        type:Number,
    
    },
    lng:{
        type:Number,
    },
    checked:{
        type: Boolean,
        default: false
    },
    sold:{
        type: Number,
        default: 0
    }
}, {
    timestamps: true //important
})


module.exports = mongoose.model("Products", productSchema)