import { defaultconfig } from "./defaultBubbleChartConfig.js";
import { createChart } from "./createChart.js";

export function listClickEvent(charts, data) {

    $(".bubblechart__technologie__list .bubblechart__technologie").click(function () {
        
        if (charts.childChart == null || charts.childChart.canvas == null) {
            // no, create it
            let clickedtech = $(this).data("index");

            let wantedTechs = data[clickedtech]["Wanted Technologies"];
            charts.chart.destroy();
            charts.childChart = createChart(wantedTechs, defaultconfig, 50);
        }
    });
}
