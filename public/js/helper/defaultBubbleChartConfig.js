export var defaultconfig = {
    type: "bubble",
    responsive: true,
    options: {
        tooltips: {
            callbacks: {
                title: (tooltipItem, data) => {
                    return data.datasets[tooltipItem[0].datasetIndex].label
                },
                label: () => {
                    return null
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
