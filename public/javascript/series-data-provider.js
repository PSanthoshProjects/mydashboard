getSeriesData = function (csvData) {
    var seriesData = [];
    var lines = csvData.split('\n').slice(0, -1);

    for (var line_number = 1; line_number < lines.length; line_number++) {
        var items = lines[line_number].split(',');
        var majorVersion = items[1].split('.')[0] + ".x.x";
        var found = false;
        for (var i = 0; i < seriesData.length; i++) {
            if (seriesData[i].name == majorVersion) {
                seriesData[i]['y'] += 1;
                found = true;
                break
            }
        }
        if (!found) {
            seriesData.push({'name': majorVersion, 'y': 1});
        }
    }
    return seriesData;
};