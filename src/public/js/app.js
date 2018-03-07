import { defaultconfig } from "./helper/defaultBubbleChartConfig.js";
import { createChart } from "./helper/createChart.js";

var chart;
var childChart;

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
            if (childChart == null || childChart.canvas == null) {
                // no, create it
                let clickedBubble = Object.keys(data)[element[0]._datasetIndex];
                let wantedTechs = data[clickedBubble]["Wanted Technologies"];
                chart.destroy();
                childChart = createChart(wantedTechs, defaultconfig, 50);
            }
        }
        else {
            // check if there is a parent chart
            if (chart.canvas === null) {
                // no, destroy child chart and create a new parent
                childChart.destroy();
                chart = createChart(data, parentChartConfig, 300);
            }
        }
    };

    chart = createChart(data, parentChartConfig, 300)
});
