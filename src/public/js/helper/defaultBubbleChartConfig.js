export var defaultconfig = {
    type: "bubble",
    responsive: true,
    options: {
        tooltips: {
            callbacks: {
                label: (item, data) => {
                    // reformat tooltip to show technologie name and count
                    return `${data.datasets[item.datasetIndex].label} : ${data.datasets[item.datasetIndex].data[0].c}`;
                },
            },
        },
        responsive: true,
        legend: {
            display: false
        },
        padding: 3,
        scales: {
            xAxes: [
                {
                    display: false
                }
            ],
            yAxes: [
                {
                    display: false
                }
            ]
        }
    }
};
