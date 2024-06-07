const {saveCallId,getCallId} =require("./model")

exports.saveCallId= async (req,res) => {
  try{
    const {id,signaldata}=req.body;
    await saveCallId(id,signaldata);
    res.status(200).send({message: "Call ID Saved"});
  }
    catch(err){
        console.log(err);
        res.status(500).send({message: "Internal Server Error"});
    }
}
exports.getCallId= async (req,res) => {
  try{
    const {id}=req.params;
    const code=await getCallId(id);
    res.status(200).send({code});

  }
    catch(err){
        console.log(err);
        res.status(500).send({message: "Internal Server Error"});
    }
}
