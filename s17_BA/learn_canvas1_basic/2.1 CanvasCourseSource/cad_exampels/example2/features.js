function addFeatures(svg) {
    // Doors for Living Room
    drawDoor(svg, 180, 390, 40, 'vertical');
    drawDoor(svg, 480, 250, 40, 'horizontal');

    // Doors for Kitchen
    drawDoor(svg, 480, 650, 40, 'horizontal');

    // Doors for Bedrooms
    drawDoor(svg, 800, 250, 40, 'horizontal');
    drawDoor(svg, 1130, 250, 40, 'horizontal');

    // Doors for Bathrooms
    drawDoor(svg, 660, 510, 40, 'horizontal');
    drawDoor(svg, 840, 510, 40, 'horizontal');

    // Doors for Dining Room
    drawDoor(svg, 800, 740, 40, 'horizontal');

    // Doors for Garage
    drawDoor(svg, 1130, 510, 40, 'horizontal');
    drawDoor(svg, 1130, 690, 40, 'horizontal');

    // Windows for Living Room
    drawWindow(svg, 300, 90, 120, 30);
    drawWindow(svg, 300, 380, 120, 30);

    // Windows for Kitchen
    drawWindow(svg, 300, 670, 120, 30);

    // Windows for Bedrooms
    drawWindow(svg, 730, 90, 100, 30);
    drawWindow(svg, 960, 90, 100, 30);

    // Windows for Bathrooms
    drawWindow(svg, 650, 370, 40, 20);
    drawWindow(svg, 830, 370, 40, 20);

    // Windows for Dining Room
    drawWindow(svg, 730, 550, 100, 30);

    // Windows for Garage
    drawWindow(svg, 960, 550, 100, 30);
    drawWindow(svg, 960, 730, 100, 30);

    // Additional Features
    drawFireplace(svg, 400, 200, 40, 60);
    drawKitchenIsland(svg, 200, 500, 100, 60);
    drawWardrobe(svg, 900, 150, 60, 180);
    drawDiningTable(svg, 600, 600, 100, 100);
}

function drawDoor(svg, x, y, length, orientation) {
    const door = document.createElementNS("http://www.w3.org/2000/svg", "rect");

    if(orientation === 'horizontal') {
        door.setAttribute("x", x);
        door.setAttribute("y", y);
        door.setAttribute("width", length);
        door.setAttribute("height", 10);
    } else {
        door.setAttribute("x", x);
        door.setAttribute("y", y);
        door.setAttribute("width", 10);
        door.setAttribute("height", length);
    }
    door.setAttribute("class", "door");
    svg.appendChild(door);
}

function drawWindow(svg, x, y, width, height) {
    const windowElem = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    windowElem.setAttribute("x", x);
    windowElem.setAttribute("y", y);
    windowElem.setAttribute("width", width);
    windowElem.setAttribute("height", height);
    windowElem.setAttribute("class", "window");
    svg.appendChild(windowElem);
}

function drawFireplace(svg, x, y, width, height) {
    const fireplace = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    fireplace.setAttribute("x", x);
    fireplace.setAttribute("y", y);
    fireplace.setAttribute("width", width);
    fireplace.setAttribute("height", height);
    fireplace.setAttribute("fill", "darkred");
    svg.appendChild(fireplace);
}

function drawKitchenIsland(svg, x, y, width, height) {
    const island = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    island.setAttribute("x", x);
    island.setAttribute("y", y);
    island.setAttribute("width", width);
    island.setAttribute("height", height);
    island.setAttribute("fill", "gray");
    svg.appendChild(island);
}

function drawWardrobe(svg, x, y, width, height) {
    const wardrobe = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    wardrobe.setAttribute("x", x);
    wardrobe.setAttribute("y", y);
    wardrobe.setAttribute("width", width);
    wardrobe.setAttribute("height", height);
    wardrobe.setAttribute("fill", "sienna");
    svg.appendChild(wardrobe);
}

function drawDiningTable(svg, x, y, width, height) {
    const table = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    table.setAttribute("x", x);
    table.setAttribute("y", y);
    table.setAttribute("width", width);
    table.setAttribute("height", height);
    table.setAttribute("fill", "saddlebrown");
    svg.appendChild(table);
}
