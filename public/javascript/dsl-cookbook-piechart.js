$.get('dslCookbook_applications.csv', function (data) {
    var options = {
        chart: {
            renderTo: 'container_for_dsl_cookbook',
            type: 'pie'
        },
        title: {
            text: 'DSL Cookbook versions'
        },
        series: []
    };
    options.series.push({data: getSeriesData(data), name: 'Total'});
    var chart = new Highcharts.Chart(options);
});
