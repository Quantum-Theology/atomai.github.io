const myImage = new Image();
myImage.src = 'data:image/png;base64,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bFnNE8D7DFxpbX+lAcx+kl5va+EjILANXFy3NXkPuNwBBp50yZBsyUtTyOeB9zP6piwQvAX61pzeWvs4fQDS1NXyDXBwCIwWKHvd5d09nb39e6bV3w+kvXK7+c/DkgAADlVpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+Cjx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IlhNUCBDb3JlIDQuNC4wLUV4aXYyIj4KIDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+CiAgPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIKICAgIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIgogICAgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIKICAgIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIKICAgIHhtbG5zOkdJTVA9Imh0dHA6Ly93d3cuZ2ltcC5vcmcveG1wLyIKICAgIHhtbG5zOnRpZmY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vdGlmZi8xLjAvIgogICAgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIgogICB4bXBNTTpEb2N1bWVudElEPSJnaW1wOmRvY2lkOmdpbXA6ZjIzODhmYzAtZDYwOC00NGNmLTg3MWUtOTI2M2Q2OGYxN2Q4IgogICB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOmE3YmMwZGIwLTNkZjktNDM2MC1hNzFiLTI5NDBkMmE5OWVhOSIKICAgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOjcwOWU5YTNjLTIwOGMtNGVlYy1iOWMzLTFjMGEyNzQzMDc5YyIKICAgZGM6Rm9ybWF0PSJpbWFnZS9wbmciCiAgIEdJTVA6QVBJPSIyLjAiCiAgIEdJTVA6UGxhdGZvcm09IldpbmRvd3MiCiAgIEdJTVA6VGltZVN0YW1wPSIxNjY0MjkyMjA1MzYzOTM4IgogICBHSU1QOlZlcnNpb249IjIuMTAuMzIiCiAgIHRpZmY6T3JpZW50YXRpb249IjEiCiAgIHhtcDpDcmVhdG9yVG9vbD0iR0lNUCAyLjEwIgogICB4bXA6TWV0YWRhdGFEYXRlPSIyMDIyOjA5OjI3VDExOjIzOjI0LTA0OjAwIgogICB4bXA6TW9kaWZ5RGF0ZT0iMjAyMjowOToyN1QxMToyMzoyNC0wNDowMCI+CiAgIDx4bXBNTTpIaXN0b3J5PgogICAgPHJkZjpTZXE+CiAgICAgPHJkZjpsaQogICAgICBzdEV2dDphY3Rpb249InNhdmVkIgogICAgICBzdEV2dDpjaGFuZ2VkPSIvIgogICAgICBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOmFhZDM0OTNmLWFjYTgtNDNiZC1hNmM4LTg0ZmUzNWNkMzI3MCIKICAgICAgc3RFdnQ6c29mdHdhcmVBZ2VudD0iR2ltcCAyLjEwIChXaW5kb3dzKSIKICAgICAgc3RFdnQ6d2hlbj0iMjAyMi0wOS0yNlQyMDoyNTozMCIvPgogICAgIDxyZGY6bGkKICAgICAgc3RFdnQ6YWN0aW9uPSJzYXZlZCIKICAgICAgc3RFdnQ6Y2hhbmdlZD0iLyIKICAgICAgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDphMzIyNjM4YS0zZDBlLTRjMzgtOGE0Ny0yYTY1NmM1NDMxNTkiCiAgICAgIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkdpbXAgMi4xMCAoV2luZG93cykiCiAgICAgIHN0RXZ0OndoZW49IjIwMjItMDktMjdUMTE6MjM6MjUiLz4KICAgIDwvcmRmOlNlcT4KICAgPC94bXBNTTpIaXN0b3J5PgogIDwvcmRmOkRlc2NyaXB0aW9uPgogPC9yZGY6UkRGPgo8L3g6eG1wbWV0YT4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg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';

myImage.addEventListener('load', function () {
    const canvas = document.getElementById('canvas1');
    const ctx = canvas.getContext('2d');
    canvas.width = 800;
    canvas.height = 450;

    ctx.drawImage(myImage, 0, 0, canvas.width, canvas.height);
    const pixels = ctx.getImageData(0, 0, canvas.width, canvas.height);

    let particlesArray = [];
    const numberOfParticles = 5000;
    //brightness mapping
    let mappedImage = [];
    for (let y = 0; y < canvas.height; y++) {
        let row = [];
        for (let x = 0; x < canvas.width; x++) {
            const red = pixels.data[(y * 4 * pixels.width) + (x * 4)];
            const green = pixels.data[(y * 4 * pixels.width) + (x * 4 + 1)];
            const blue = pixels.data[(y * 4 * pixels.width) + (x * 4 + 2)];
            const brightness = calculateRelativeBrightness(red, green, blue);
            const cell = [
                cellBrightness = brightness,
            ];
            row.push(cell);
        }
        mappedImage.push(row);
    }
    console.log(mappedImage)

    function calculateRelativeBrightness(red, green, blue) {
        return Math.sqrt(
            (red * red) * 0.299 +
            (green * green) * 0.587 +
            (blue * blue) * 0.114
        )/100;
    }
    //particles 
    class Particle {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = 0;
            this.speed = 0;
            this.velocity = Math.random() * 1.5;
            this.size = Math.random() * 1 + 1;
            this.position1 = Math.floor(this.y);
            this.position2 = Math.floor(this.x);
        }
        update() {
            this.position1 = Math.floor(this.y);
            this.position2 = Math.floor(this.x);
            this.speed = mappedImage[this.position1][this.position2][0];
            let movement = (2.3 - this.speed) + this.velocity;

            this.y += movement;
            if (this.y >= canvas.height){
                this.y = 0;
                this.x = Math.random() * canvas.width;
            }
        }
        draw() {
            ctx.beginPath();
            ctx.fillStyle = 'red';
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
        }
    }
    function init() {
        for (let i = 0; i < numberOfParticles; i++) {
            particlesArray.push(new Particle);
        }
    }
    init();
    function animate() {
        
        ctx.globalAlpha = 0.005;
        ctx.fillStyle = 'rgb(0, 0, 0)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        for (let i = 0; i < particlesArray.length; i++) {
            particlesArray[i].update();
            particlesArray[i].draw();
        }
        requestAnimationFrame(animate);
    }
    animate();
    // Set the date we're counting down to
    var countDownDate = new Date("Jan 5, 2024 15:37:25").getTime();

    // Update the count down every 1 second
    var countdownfunction = setInterval(function () {

        // Get todays date and time
        var now = new Date().getTime();

        // Find the distance between now an the count down date
        var distance = countDownDate - now;

        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Output the result in an element with id="demo"
        document.getElementById("demo").innerHTML = days + "d " + hours + "h "
            + minutes + "m " + seconds + "s ";

        // If the count down is over, write some text
        if (distance < 0) {
            clearInterval(countdownfunction);
            document.getElementById("demo").innerHTML = "EXPIRED";
        }
    }, 1000);
});
