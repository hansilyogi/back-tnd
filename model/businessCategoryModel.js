const mongoose = require("mongoose");

const businessCategorySchema = mongoose.Schema({
    categoryName: {
        type: String,
    },
    categoryImage: {
        type: String,
    },
    categoryIcon :{
        type : String,
        default : "https://res.cloudinary.com/dckj2yfap/image/upload/v1610557322/blog/users/2021-01-13T17:02:02.133Z.jpg",
    },
    dateTime: {
        type: Date,
        default: Date.now()
    },
    Users: {
        type: mongoose.Types.ObjectId, 
        ref: "UsersList",
    },
});

module.exports = mongoose.model("BusinessCategory", businessCategorySchema);