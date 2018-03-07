import { generatePastelColors } from "./generatePastelColors.js";
import { generateCoordinates } from "./generateCoordinates.js";

export function createChart(data, config, divider) {
    let chartData = [];
    
    if (!Array.isArray(data)) {
        // convert object into array of objects
        let d = [];
        for (var tech in data) {
            data[tech] = {
                key: tech,
                count: data[tech] 
            };
            d.push(data[tech]);
        }
        // sort new array
        d.sort((a, b) => {
            return a.count - b.count;
        });
        
        data = d;
    }
    
    // generate data array
    for (let tech of data) {
        let radius = tech.count || tech;
        chartData.push({
            label: tech.key,
            backgroundColor: generatePastelColors().toString(),
            data: [generateCoordinates(tech.count, divider)]
        });
    }
    
    return new Chart(
        document.getElementById("bubblechart"),
        Object.assign(config, {
            data: { datasets: chartData }
        })
    );
}
