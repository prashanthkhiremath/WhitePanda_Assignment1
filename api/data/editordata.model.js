var mongoose = require('mongoose');

var editorDataSchema =  new mongoose.Schema({
    textData : {
        type : String,
        required : true
    }
})

mongoose.model('Editor', editorDataSchema);