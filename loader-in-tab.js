// scripts.js
window.onload = function() {
    // Create a new canvas element
    const canvas = document.createElement('canvas');
    canvas.width = 16;
    canvas.height = 16;
    const ctx = canvas.getContext('2d');

    // Colors for the loader
    const colors = ['black', 'lightpink', 'lightblue', 'yellow', 'orange'];

    // Draw the loader animation
    let start = 0;
    function drawLoader() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (let i = 0; i < colors.length; i++) {
            ctx.beginPath();
            ctx.arc(8, 8, 7, start + (i * (Math.PI / 2.5)), start + ((i + 1) * (Math.PI / 2.5)));
            ctx.strokeStyle = colors[i];
            ctx.lineWidth = 2;
            ctx.stroke();
        }
        start += 0.1;
        updateFavicon(canvas.toDataURL());
        requestAnimationFrame(drawLoader);
    }

    function updateFavicon(dataURL) {
        const link = document.createElement('link');
        const oldLink = document.getElementById('dynamic-favicon');
        link.id = 'dynamic-favicon';
        link.rel = 'icon';
        link.href = dataURL;
        if (oldLink) {
            document.head.removeChild(oldLink);
        }
        document.head.appendChild(link);
    }

    drawLoader();

    // Simulate page load with a timeout
    setTimeout(function() {
        // Replace with your actual favicon once the page is fully loaded
        const link = document.createElement('link');
        link.id = 'dynamic-favicon';
        link.rel = 'icon';
        link.href = 'your-favicon.ico'; // Replace with the path to your actual favicon
        document.head.appendChild(link);
    }, 5000); // 5 seconds delay for demo purposes
};