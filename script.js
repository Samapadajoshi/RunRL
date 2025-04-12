// Get the canvas from the page
const canvas = document.getElementById('curveCanvas');
const ctx = canvas.getContext('2d');

// Set color and line thickness
ctx.strokeStyle = 'brown';
ctx.lineWidth = 4;

ctx.beginPath();

ctx.moveTo(20, 180);     // Start at bottom-left
ctx.lineTo(70, 140);     // Move up
ctx.lineTo(140, 100);    // Move more up
ctx.lineTo(210, 60);     // And more
ctx.lineTo(280, 20);     // End at top-right

// Draw the line on the canvas
ctx.stroke();


document.getElementById('bookCallBtn').addEventListener('click', function () {
    alert('Redirecting you to book a 15-min call!');
});
