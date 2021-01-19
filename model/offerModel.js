const mongoose = require("mongoose");

const offerSchema = mongoose.Schema({
    title: {
        type: String,
    },
    bannerImage: {
        type: String,
    },
    userId : {
        type: mongoose.Types.ObjectId, ref: "UsersList",
    },
    dateTime: {
        type: String,
    },
    type:{
        type: String,
    },
    details: {
        type: String,
    },
    redeemBy: {
        type: String
    },
    isActive: {
        type: Boolean,
        default: true,
    },
    businessCategory: {
        type: mongoose.Types.ObjectId, ref: "BusinessCategory",
    },
    offerExpire: {
        type: String
    },
    daysRemain: {
        type: String
    },
    faceBook : {
        type: String,
        default : "https://www.facebook.com/"
    },
    instagram : {
        type: String,
        default : "https://www.instagram.com/"
    },
    linkedIn : {
        type: String,
        default: "https://www.linkedin.com/"
    },
    twitter : {
        type: String,
        default: "https://twitter.com/"
    },
    whatsApp : {
        type: String,
        default: ""
    },
    youTube : {
        type: String,
        default: "https://www.youtube.com/"
    },
    mail : {
        type : String,
        default : "xyz@gmail.com",
    }
});

module.exports = mongoose.model("offer", offerSchema);