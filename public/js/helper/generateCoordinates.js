export function generateCoordinates(radius, divider) {

    var newcircle = {
        x: Math.floor(Math.random() * 100 + 5),
        y: Math.floor(Math.random() * 100 + 5),
        r: radius/divider < 5 ? 5 : radius/divider,
        c: radius
    };

    // oldCirclesData.push(newcircle);
    return newcircle;
}
