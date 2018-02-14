var barray = [];
var oldCirclesData = [];

$.ajax({
    url: "server/app.php",
    method: "GET",
    dataType: "json",
    cache: "false"
}).done(function(data) {
    // console.log(data);
    for (var tech in data) {
        generateCoordinates(data[tech].count / 300);
        barray.push({
            label: tech,
            backgroundColor: pastelColors().toString(),
            data: [
                generateCoordinates(data[tech].count / 200)
                // {
                //     x: Math.floor(Math.random() * 100 + 5),
                //     y: Math.floor(Math.random() * 100 + 5),
                //     r: data[tech].count / 200
                // }
            ]
        });
    }

    var bubbleChart = new Chart(document.getElementById("bubblechart"), {
        type: "bubble",
        data: { datasets: barray },
        responsive: true,
        options: {
            responsive: true,
            legend: {
                display: false
            },
            padding: 3,
            scales: {
                xAxes: [
                    {
                        gridLines: {
                            display: false,
                            drawBorder: false
                        },
                        display: false
                    }
                ],
                yAxes: [
                    {
                        display: false,
                        ticks: {
                            beginAtZero: false
                        },
                        gridLines: {
                            display: false,
                            drawBorder: false
                        }
                    }
                ]
            }
        }
    });
});

function pastelColors() {
    var r = (Math.round(Math.random() * 127) + 127).toString(16);
    var g = (Math.round(Math.random() * 127) + 127).toString(16);
    var b = (Math.round(Math.random() * 127) + 127).toString(16);
    return "#" + r + g + b;
}

function generateCoordinates(radius) {
    var newcircle = {
        x: Math.floor(Math.random() * 100 + 5),
        y: Math.floor(Math.random() * 100 + 5),
        r: radius
    };

    // if (oldCirclesData.length > 0) {
    //     for (let oldcircle of oldCirclesData) {
    //         let foo = false;
    //
    //         while (!foo) {
    //             newcircle.x = Math.floor(Math.random() * 100 + 5);
    //             newcircle.y = Math.floor(Math.random() * 100 + 5);
    //
    //             let dx = oldcircle.x - newcircle.x;
    //             let dy = oldcircle.y - newcircle.y;
    //             let dist = Math.sqrt(dx * dx + dy * dy);
    //
    //             console.log(dist < newcircle.r + oldcircle.r);
    //
    //             if (dist > newcircle.r + oldcircle.r) foo = true;
    //         }
    //     }
    // }

    // oldCirclesData.push(newcircle);
    return newcircle;
}
