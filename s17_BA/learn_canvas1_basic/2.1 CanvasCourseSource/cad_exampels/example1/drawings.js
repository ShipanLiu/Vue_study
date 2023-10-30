class Drawing {
    constructor(svgElement) {
        this.svg = svgElement;
    }

    // Draw a rectangle
    drawRect(x, y, width, height, className) {
        const rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
        rect.setAttribute("x", x);
        rect.setAttribute("y", y);
        rect.setAttribute("width", width);
        rect.setAttribute("height", height);
        rect.setAttribute("class", className);
        this.svg.appendChild(rect);
        return rect;
    }

    // Draw a circle
    drawCircle(cx, cy, r, className) {
        const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        circle.setAttribute("cx", cx);
        circle.setAttribute("cy", cy);
        circle.setAttribute("r", r);
        circle.setAttribute("class", className);
        this.svg.appendChild(circle);
        return circle;
    }

    // Add dimension annotations
    addDimension(x1, y1, x2, y2, textContent) {
        const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
        line.setAttribute("x1", x1);
        line.setAttribute("y1", y1);
        line.setAttribute("x2", x2);
        line.setAttribute("y2", y2);
        line.setAttribute("class", "dimension");
        this.svg.appendChild(line);

        const text = document.createElementNS("http://www.w3.org/2000/svg", "text");
        text.setAttribute("x", (x1 + x2) / 2);
        text.setAttribute("y", (y1 + y2) / 2 - 5);
        text.textContent = textContent;
        this.svg.appendChild(text);
    }
}
