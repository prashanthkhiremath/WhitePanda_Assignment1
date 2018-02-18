var express = require('express');
var router = express.Router();

var ctrlEditor = require('../controllers/editor.controllers.js');

router
    .route('/editor')
    .post(ctrlEditor.addInputView)
    .get(ctrlEditor.viewOutputView);

module.exports = router;