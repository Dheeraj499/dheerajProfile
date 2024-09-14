document.addEventListener("DOMContentLoaded", function () {
    const imagePaths = [
        'assets/img/HTML.jpg',
        'assets/img/CSS.jpg',
        'assets/img/JavaScript.jpg',
        'assets/img/jQuery.jpg',
        'assets/img/JAVA_BASICS.jpg',
        'assets/img/Java.jpg',
        'assets/img/C.jpg',
        'assets/img/Python.jpg',
        'assets/img/Swift.jpg',
        'assets/img/Flutter.jpg',
        'assets/img/CHATBOT.jpg',
        'assets/img/Dell ElevatED.jpg',
        'assets/img/Uniquest2k20.jpg',
        'assets/img/JNTU-N MATLAB.jpg',
        'assets/img/MIC-IICS.jpg',
        'assets/img/Google.jpg',
        // Add more image paths as needed
    ];


    const certificateGrid = document.getElementById('certificate-grid');
    const modal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    const captionText = document.getElementById('caption');
    const closeBtn = document.getElementsByClassName('close')[0];

    if (certificateGrid) {
        imagePaths.forEach((path) => {
            const responsiveDiv = document.createElement('div');
            responsiveDiv.className = 'responsive';

            const galleryDiv = document.createElement('div');
            galleryDiv.className = 'gallery';

            const img = document.createElement('img');
            img.src = path;
            img.alt = 'Certificate';
            img.loading = 'lazy';

            img.onclick = function() {
                modal.style.display = 'block';
                modalImage.src = path;
                captionText.innerHTML = this.alt;
            };

            galleryDiv.appendChild(img);
            responsiveDiv.appendChild(galleryDiv);
            certificateGrid.appendChild(responsiveDiv);
        });

        closeBtn.onclick = function() {
            modal.style.display = 'none';
        };

        window.onclick = function(event) {
            if (event.target === modal) {
                modal.style.display = 'none';
            }
        };
    } else {
        console.error('Certificate grid element not found!');
    }
});