const express  = require("express");
const router = express.Router();



const controller=require('./controller');
router.post('/api/save_call_id',controller.saveCallId);
router.post('/api/get_call_id',controller.getCallId);
module.exports = router;
