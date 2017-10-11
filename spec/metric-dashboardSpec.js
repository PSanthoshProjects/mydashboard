var request = require("request");
var fs = require("fs");
var https = require("https");
var appServer;
var base_url = "http://localhost:8081/"
var aws_pb_csv_fileURL = "csvdataURL";
var dsl_cookbook_csv_fileURL = "csvdataURL";


describe("App tests", function () {
    beforeEach(function () {
        appServer = require("../metric-dashboard.js");
    });
    afterEach(function () {
        appServer.closeServer();
    });

    it("server returns status code 200", function (done) {
        request.get(base_url, function (error, response, body) {
            expect(response.statusCode).toBe(200);
            done();
        });
    });

    it("check if csv file url is reachable", function (done) {
        https.get(aws_pb_csv_fileURL, function (response) {
            expect(response.statusCode).toBe(200);
            done();
        });
    });

    it("check if cookbook csv file url is reachable", function (done) {
        https.get(dsl_cookbook_csv_fileURL, function (response) {
            expect(response.statusCode).toBe(200);
            done();
        });
    });

    it("check aws pipeline builder CSV file exists", function () {
        expect(fs.existsSync('./public/applications_with_pipeline_builder.csv')).toBe(true);
    });

    it("check aws pipeline builder CSV file is empty", function () {
        var content = fs.readFileSync('./public/applications_with_pipeline_builder.csv', 'utf8');
        expect(content.length == 0).toBe(false);
    });

    it("check DSL cookbook CSV file exists", function () {
        expect(fs.existsSync('./public/dslCookbook_applications.csv')).toBe(true);
    });

    it("check DSL cookbook CSV file is empty", function () {
        var content = fs.readFileSync('./public/dslCookbook_applications.csv', 'utf8');
        expect(content.length == 0).toBe(false);
    });
});