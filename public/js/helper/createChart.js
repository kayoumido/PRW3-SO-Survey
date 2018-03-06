import { generatePastelColors } from "./generatePastelColors.js";
import { generateCoordinates } from "./generateCoordinates.js";

export function createChart(data, config, divider) {
    let chartData = [];
    // generate data array
    for (let tech in data) {
        let radius = data[tech].count || data[tech];

        chartData.push({
            label: tech,
            backgroundColor: generatePastelColors().toString(),
            data: [generateCoordinates(radius / divider)]
        });
    }

    return new Chart(
        document.getElementById("bubblechart"),
        Object.assign(config, {
            data: { datasets: chartData }
        })
    );
}
