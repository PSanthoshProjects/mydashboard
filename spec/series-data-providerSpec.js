describe("series data provider test", function () {
    require("../public/javascript/series-data-provider.js");
    var expectedSeriesData = [{'name': '9.x.x', 'y': 2}, {'name': '10.x.x', 'y': 1}];
    var csvData = "Repository_name,Pipeline_builder_version\n" +
        "CustomerFacing/jdlink-utility,9.3.6\n" +
        "CustomerFacing/jdlink-web,9.3.6\n" +
        "DeviceManagement/AssetManager-New,10.5.1\n";
    it("test getSeriesData for empty csv data", function () {
        expect(getSeriesData('')).toEqual([]);
    });
    it("test getSeriesData", function () {
        expect(getSeriesData(csvData)).toEqual(expectedSeriesData);
    });

});