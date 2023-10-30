function addInteractivity(svg) {
    // Handle clicking on rooms
    const rooms = svg.querySelectorAll('.room');
    rooms.forEach(room => {
        room.addEventListener('click', handleRoomClick);
    });

    // Handle hovering over windows and doors
    const windowsAndDoors = svg.querySelectorAll('.window, .door');
    windowsAndDoors.forEach(element => {
        element.addEventListener('mouseover', handleMouseOver);
        element.addEventListener('mouseout', handleMouseOut);
    });
}

function handleRoomClick(event) {
    const roomName = event.target.nextElementSibling.textContent;
    alert(`You clicked on: ${roomName}`);

    // Here, you could expand the interactivity:
    // - Display a modal with more details about the room
    // - Highlight the room
    // - Show a 3D view or more details about the room
    // ... and so forth
}

function handleMouseOver(event) {
    const elementType = event.target.getAttribute('class');

    if (elementType === 'window') {
        event.target.setAttribute('fill', 'lightblue');
    } else if (elementType === 'door') {
        event.target.setAttribute('fill', 'lightgray');
    }

    // You could also show tooltips or more details when hovering
    // For instance, showing the type and dimensions of a window or door
}

function handleMouseOut(event) {
    const elementType = event.target.getAttribute('class');

    if (elementType === 'window') {
        event.target.setAttribute('fill', '#aaf');
    } else if (elementType === 'door') {
        event.target.setAttribute('fill', '#ddd');
    }

    // Remove any tooltips or extra information shown during hovering
}
