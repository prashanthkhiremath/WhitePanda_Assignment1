var mongoose = require('mongoose');
var Editor = mongoose.model('Editor');


module.exports.addInputView = function (req,res) {
    console.log("Post new Text");
    console.log(req.body);
    Editor.remove().exec();

    Editor.create({
        textData: req.body.textData
    }, function(err, data) {
        if(err) {
            console.log(err);
            res.status(400).json(err);
        } else {
            res.status(201).json(data);
        }
    });
}

module.exports.viewOutputView = function (req,res) {
    console.log("Get view Text");

    Editor
        .find()
        .exec(function (err, data) {
            console.log(err);
            console.log(data);
            if (err) {
                console.log("Error finding textData");
                res
                    .status(500)
                    .json(err);
            } else {
                console.log("Found textData", data.length );
                res
                    .json(data);
            }
        });
}

