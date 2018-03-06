import { defaultconfig } from "./helper/defaultBubbleChartConfig.js";
import { createChart } from "./helper/createChart.js";

var chart;
var childChart;

$.ajax({
    url: "server/app.php",
    method: "GET",
    dataType: "json",
    cache: "false"
}).done(data => {
    let parentChartConfig = defaultconfig;
    
    parentChartConfig.options.onClick = (e, element) => {
        
        // check if a bubble was clicked
        if (element[0]) {
            let clickedBubble = Object.keys(data)[element[0]._datasetIndex];
            let wantedTechs = data[clickedBubble]["Wanted Technologies"];
            chart.destroy()
            childChart = createChart(wantedTechs, defaultconfig, 10)
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
