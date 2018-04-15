import { defaultconfig } from "./helper/defaultBubbleChartConfig.js";
import { createChart } from "./helper/createChart.js";
import { listClickEvent } from "./helper/listClickEvent.js";

var chart;
var childChart;

var charts = {
    chart: null,
    childChart: null
}

$.ajax({
    url: "src/server/app.php",
    method: "GET",
    dataType: "json",
    cache: "false"
}).done(d => {
    // copy config
    let parentChartConfig = defaultconfig;

    // convert object of objects into array of objects
    let data = [];
    for (var tech in d) {
        // add a key with the orignial objects key
        d[tech].key = tech;
        data.push(d[tech]);
    }
    // sort new array
    data.sort((a, b) => {
        return a.count - b.count;
    });

    parentChartConfig.options.onClick = (e, element) => {

        // check if a bubble was clicked
        if (element[0]) {
            // check if there is a child chart
            if (charts.childChart == null || charts.childChart.canvas == null) {
                // no, create it
                let clickedBubble = Object.keys(data)[element[0]._datasetIndex];
                let wantedTechs = data[clickedBubble]["Wanted Technologies"];
                charts.chart.destroy();
                charts.childChart = createChart(wantedTechs, defaultconfig, 50);
                listClickEvent(charts, data);
            }
        }
        else {
            // check if there is a parent chart
            if (charts.chart.canvas === null) {
                // no, destroy child chart and create a new parent
                charts.childChart.destroy();
                charts.chart = createChart(data, parentChartConfig, 300);
                listClickEvent(charts, data);
            }
        }
    };

    charts.chart = createChart(data, parentChartConfig, 300);
    listClickEvent(charts, data);

    $(".bubblechart__back__button").click(function() {
        $(this).hide();
        charts.childChart.destroy();
        charts.chart = createChart(data, parentChartConfig, 300);
        listClickEvent(charts, data);
    });
});
