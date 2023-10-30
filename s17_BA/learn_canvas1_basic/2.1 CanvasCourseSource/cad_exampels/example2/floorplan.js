function drawFloorPlan(svg) {
    // Main boundary
    drawRectangle(svg, 10, 10, 1180, 780, 'wall');

    // Living Room
    drawRoom(svg, 100, 100, 400, 300, 'Living Room');

    // Kitchen
    drawRoom(svg, 100, 420, 400, 250, 'Kitchen');

    // Bedrooms
    drawRoom(svg, 530, 100, 300, 250, 'Bedroom 1');
    drawRoom(svg, 860, 100, 300, 250, 'Bedroom 2');
    drawRoom(svg, 530, 370, 300, 250, 'Bedroom 3');
    drawRoom(svg, 860, 370, 300, 250, 'Bedroom 4');

    // Bathrooms
    drawRoom(svg, 530, 640, 150, 150, 'Bathroom 1');
    drawRoom(svg, 710, 640, 150, 150, 'Bathroom 2');
    drawRoom(svg, 890, 640, 150, 150, 'Bathroom 3');

    // Dining Room
    drawRoom(svg, 530, 560, 300, 200, 'Dining Room');

    // Garage
    drawRoom(svg, 100, 680, 400, 100, 'Garage');

    // Study Room
    drawRoom(svg, 860, 560, 300, 70, 'Study');

    // Laundry Room
    drawRoom(svg, 1170, 100, 20, 250, 'Laundry');

    // Hallways
    drawRectangle(svg, 500, 250, 30, 300, 'wall');  // Vertical hallway
    drawRectangle(svg, 100, 350, 400, 30, 'wall');  // Horizontal hallway

    // Dimensions for Living Room
    drawDimension(svg, 80, 100, 80, 400, '300 cm');
    drawDimension(svg, 100, 80, 500, 80, '400 cm');

    // Dimensions for Kitchen
    drawDimension(svg, 80, 420, 80, 670, '250 cm');
    drawDimension(svg, 100, 670, 500, 670, '400 cm');

    // ... Other rooms and dimensions ...

    // Doors
    drawDoor(svg, 480, 250, 40, 30, 'horizontal');  // Door for Living Room
    drawDoor(svg, 480, 550, 40, 30, 'horizontal');  // Door for Kitchen
    drawDoor(svg, 800, 250, 40, 30, 'horizontal');  // Door for Bedroom 1
    drawDoor(svg, 1130, 250, 40, 30, 'horizontal');  // Door for Bedroom 2
    drawDoor(svg, 800, 500, 40, 30, 'horizontal');  // Door for Bedroom 3
    drawDoor(svg, 1130, 500, 40, 30, 'horizontal');  // Door for Bedroom 4
    drawDoor(svg, 660, 640, 40, 30, 'horizontal');  // Door for Bathroom 1
    drawDoor(svg, 840, 640, 40, 30, 'horizontal');  // Door for Bathroom 2
    drawDoor(svg, 1020, 640, 40, 30, 'horizontal');  // Door for Bathroom 3

    // ... More doors ...
}

// ... The previously provided utility functions ...

function drawRoom(svg, x, y, width, height, roomName) {
    drawRectangle(svg, x, y, width, height, 'room');
    drawText(svg, x + width / 2, y + height / 2, roomName, 'annotation');
}

function drawDoor(svg, x, y, width, height, orientation) {
    // Depending on orientation, adjust the drawing
    if(orientation === 'horizontal') {
        drawRectangle(svg, x, y, width, height, 'door');
    } else {
        drawRectangle(svg, x, y, height, width, 'door');
    }
}

function drawRectangle(svg, x, y, width, height, className) {
    const rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    rect.setAttribute("x", x);
    rect.setAttribute("y", y);
    rect.setAttribute("width", width);
    rect.setAttribute("height", height);
    rect.setAttribute("class", className);
    svg.appendChild(rect);
}

// ... Rest of the utility functions ...
function drawText(svg, x, y, content, className) {
    const text = document.createElementNS("http://www.w3.org/2000/svg", "text");
    text.setAttribute("x", x);
    text.setAttribute("y", y);
    text.setAttribute("class", className);
    text.textContent = content;
    svg.appendChild(text);
}

function drawDimension(svg, x1, y1, x2, y2, label) {
    const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
    line.setAttribute("x1", x1);
    line.setAttribute("y1", y1);
    line.setAttribute("x2", x2);
    line.setAttribute("y2", y2);
    line.setAttribute("stroke", "black");
    svg.appendChild(line);

    const text = document.createElementNS("http://www.w3.org/2000/svg", "text");
    text.setAttribute("x", (x1 + x2) / 2);
    text.setAttribute("y", (y1 + y2) / 2);
    text.setAttribute("fill", "black");
    text.textContent = label;
    svg.appendChild(text);
}
