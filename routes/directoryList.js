var express = require('express');
var router = express.Router();

var connectionRequestSchema = require('../model/connectionRequest');
var directoryData = require('../model/test.model');
var connectionModel = require('../model/connectionModel');

router.post('/directorylisting', async function(req , res , next){
    try {
        let directoryList = await directoryData.find({ismember : true})
                                               .populate({
                                                   path: "business_category",
                                               })
                                               .populate({
                                                   path: "memberOf"
                                               });
        if(directoryList != null){
            res.status(200).json({ Message: "Data Found...!!!", Count : directoryList.length , Data: directoryList, IsSuccess: true });
        }else{
            res.status(200).json({ Message: "Data Not Found...!!!", IsSuccess: false });
        }
    } catch (error) {
        res.status(500).json({ Message: error.message, IsSuccess: false });
    }
});

router.post('/directorylistingV2', async function(req , res , next){
    try {
        let directoryList = await directoryData.find()
                                               .populate({
                                                   path: "business_category",
                                               })
                                               .populate({
                                                   path: "memberOf"
                                               });
        if(directoryList != null){
            res.status(200).json({ Message: "Data Found...!!!", Count : directoryList.length , Data: directoryList, IsSuccess: true });
        }else{
            res.status(200).json({ Message: "Data Not Found...!!!", IsSuccess: false });
        }
    } catch (error) {
        res.status(500).json({ Message: error.message, IsSuccess: false });
    }
});

router.post("/getuserbycategoryid", async function(req,res,next){
    const cid = req.body.id;
    try{
        let directoryListv2 = await directoryData.find({business_category : cid})
                                               .populate({
                                                   path: "business_category",
                                               })
                                               .populate({
                                                   path: "memberOf"
                                               });
        if(directoryListv2 != null){
            res.status(200).json({ Message: "Data Found...!!!", Count : directoryListv2.length , Data: directoryListv2, IsSuccess: true });
        }else{
            res.status(200).json({ Message: "Data Not Found...!!!", IsSuccess: false });
        }
    }
    catch(err){
        res.status(500).json({ Message: error.message, IsSuccess: false });
    }
});

router.post('/profile', async function(req , res , next){
    const { id } = req.body;
    try {
        let directoryList = await directoryData.find({ _id: id });
        if(directoryList != null){
            res.status(200).json({ Message: "Data Found...!!!", Count : directoryList.length , Data: directoryList, IsSuccess: true });
        }else{
            res.status(200).json({ Message: "Data Not Found...!!!", IsSuccess: false });
        }
    } catch (error) {
        res.status(500).json({ Message: error.message, IsSuccess: false });
    }
});

router.post("/directoryconnection", async function(req,res,next){
    const userid = req.body.userid;
    try{
        var userdata = await directoryData.find({_id : userid});
        var conndata = await connectionModel.find({requestSender : userid})
                                            .select('requestReceiver requestStatus');
        
        var result = userdata + conndata;
        res.status(200).json({ IsSuccess : true, Data : conndata, Message : "Data found"});
    }
    catch(err){
        res.status(500).json({ Message: error.message, IsSuccess: false });
    }
});

module.exports = router;