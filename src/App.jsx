import { useState, useEffect, useRef } from 'react'

import './App.css'

const App = () => {
    const canvasRef = useRef(null);
    const [doAnimate, setDoAnimate] = useState(false);
    const [radius, setRadius] = useState(50); //circle radius

    // to rerender page
    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas.getContext("2d");

        //create gradient
        const gradient = context.createLinearGradient(210, 50, 150, 150);
        gradient.addColorStop(0, 'red');
        gradient.addColorStop(.25, 'orange');
        gradient.addColorStop(.5, 'yellow');
        gradient.addColorStop(.75, 'green');
        gradient.addColorStop(1, 'blue');

        let yPosition = 100;  // Starting Y position of the circle
        let direction = 1;    // direction of movement at star
        const speed = 2;      // speed to move
        const minY = 50;      // min y position
        const maxY = 150;     // max y position

        // Animation function
        const animate = () => {
            // Clear the canvas
            context.clearRect(0, 0, canvas.width, canvas.height);

            // Update Y position
            yPosition += direction * speed;

            // Reverse direction when reaching limits
            if (yPosition >= maxY || yPosition <= minY) {
                direction *= -1;
            }

            // Draw circle
            context.beginPath();
            context.arc(210, yPosition, radius, 0, Math.PI * 2);
            context.fillStyle = gradient; //fill with the gradient
            context.strokeStyle = "red";
            context.lineWidth = 4;
            context.globalAlpha = 0.8; // Set opacity
            context.fill();
            context.stroke();

            // Draw triangle
            context.beginPath();
            context.moveTo(350, 150 - yPosition);
            context.lineTo(300, 250 - yPosition);
            context.lineTo(400, 250 - yPosition);
            context.closePath();
            context.fillStyle = "purple";
            context.strokeStyle = "pink";
            context.lineWidth = 4;
            context.fill();
            context.stroke();

            // Draw star
            context.beginPath();
            context.moveTo(500, -50 + yPosition);
            context.lineTo(470, 50 + yPosition);
            context.lineTo(550, -10 + yPosition);
            context.lineTo(450, -10 + yPosition);
            context.lineTo(530, 50 + yPosition);
            context.closePath();
            context.fillStyle = "yellow";
            context.strokeStyle = "teal";
            context.lineWidth = 4;
            context.fill();
            context.stroke();

            // Draw a rectangle
            context.beginPath();
            context.moveTo(25, 150 - yPosition);
            context.lineTo(125, 150 - yPosition);
            context.lineTo(125, 250 - yPosition);
            context.lineTo(25, 250 - yPosition);
            context.closePath();
            context.lineWidth = 4;
            context.strokeStyle = "blue";
            context.fillStyle = "lime";
            context.fill();
            context.stroke();
            context.lineJoin = "round";


            // request next animation frame
            if(doAnimate) {
                requestAnimationFrame(animate);

            }
        };

        // start animation
        animate();


    }, [doAnimate,radius]);

    //start or pause the animation
    const swapBool = () => {

        setDoAnimate(!doAnimate);
    }

    //increases radius of the circle
    const circR = () => {
        setRadius(radius*1.25);
    }

    //returned html to display on the page
    return (
        <div>
            <h1>My First SVG on Canvas</h1>
            <canvas ref={canvasRef} width={600} height={600}></canvas>
            <button onClick={swapBool} style={{ position: 'relative', top: '-600px' }} >Animate</button>
            <button onClick = {circR} style={{ position: 'relative', top: '-600px' }}>Expand Circle</button>
        </div>
    );
};

export default App
