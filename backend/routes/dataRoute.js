const express = require('express')
const router = express.Router();
const {allData} = require('../controller/dataController')

router.get('/',allData);

module.exports = router