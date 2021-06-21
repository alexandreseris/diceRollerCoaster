const express = require('express');
const router = express.Router();
const logger = require('../logger');

const stuffCtrl = require('../controllers/stuff');

router.get('/', stuffCtrl.getAllStuff);
router.get('/:data', stuffCtrl.getOneStuff);

router.post('/', stuffCtrl.createStuff);

router.put('/:data', stuffCtrl.modifyStuff);

router.delete('/:data', stuffCtrl.deleteStuff);

module.exports = router;
