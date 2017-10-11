$.get('applications_with_pipeline_builder.csv', function (data) {
    var options = {
        chart: {
            renderTo: 'container_for_aws_pb',
            type: 'pie'
        },
        title: {
            text: 'AWS pipeline builder versions'
        },
        series: []
    };
    options.series.push({data: getSeriesData(data), name: 'Total'});
    var chart = new Highcharts.Chart(options);
});
