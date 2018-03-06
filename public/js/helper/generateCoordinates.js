export function generateCoordinates(radius) {
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
