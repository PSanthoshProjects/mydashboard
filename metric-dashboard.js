var express = require('express');
var app = express();
var exports = module.exports = {};
var fs = require('fs');
var https = require('https');
var AWSPB_URL = "csvdataURL";
var DSLCB_URL = "csvdataURL";

app.use(express.static(__dirname + '/public'));
app.get('/', function (req, res) {
    res.sendFile(__dirname + "/" + "/views/index.html");
});

var server = app.listen(8081, function () {
    var applications_with_pipeline_builder = fs.createWriteStream("public/applications_with_pipeline_builder.csv");
    request = https.get(AWSPB_URL, function (response) {
        response.pipe(applications_with_pipeline_builder);
    });
    request = https.get(DSLCB_URL, function (response) {
        var dslCookbook_applications = fs.createWriteStream("public/dslCookbook_applications.csv");
        response.pipe(dslCookbook_applications);
    });
});
exports.closeServer = function () {
    server.close();
};