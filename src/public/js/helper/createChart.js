import { generatePastelColors } from "./generatePastelColors.js";
import { generateCoordinates } from "./generateCoordinates.js";

export function createChart(data, config, divider) {
    let chartData = [];
    const isChild = !Array.isArray(data);


    if (isChild) {
        // convert object into array of objects
        let d = [];
        for (var tech in data) {
            let tmp = {
                key: tech,
                count: data[tech]
            };
            d.push(tmp);
        }
        // sort new array
        d.sort((a, b) => {
            return a.count - b.count;
        });

        data = d;
    }

    // toogle class for technologie list
    if (isChild) {
        $(".bubblechart__technologie__list").addClass("bubblechart__technologie__list--children");
        $(".bubblechart__back__button").show();
    }
    else {
        $(".bubblechart__technologie__list").removeClass("bubblechart__technologie__list--children");
    }

    // empty technologie list container
    $(".bubblechart__technologie__list").empty();

    // generate data array
    for (const [index, tech] of data.entries()) {
        let radius = tech.count || tech;
        let color = generatePastelColors().toString();
        chartData.push({
            label: tech.key,
            backgroundColor: color,
            data: [generateCoordinates(tech.count, divider)]
        });

        let row = $(`<div data-index="${index}" class="row bubblechart__technologie" ></div>`);
        let pastel = $(`<div class="bubblechart__technologie__pastel col l1" style="background-color: ${color};"></div>`)
        let name = $(`<div class="bubblechart__technologie__name col l6">${tech.key}</div>`);
        let count = $(`<div class="bubblechart__technologie__count col l5">${tech.count}</div>`);

        $(".bubblechart__technologie__list").prepend(row.append(pastel).append(name).append(count));
    }

    return new Chart(
        document.getElementById("bubblechart"),
        Object.assign(config, {
            data: { datasets: chartData }
        })
    );
}
