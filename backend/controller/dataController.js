const NewsData = require('../models/dataModel');

const allData = async (req,res)=>{
    const mydata = await NewsData.find({});
    if(mydata){
        let data = mydata.reverse();
        res.status(200).json({
            success:true,
            data,
        })
    }else{
        res.status(400).json({success:false, message:"Something went wrong! Please try after some time."})
    }
}
module.exports = {allData}