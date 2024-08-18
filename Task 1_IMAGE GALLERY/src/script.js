document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.gallery-image img');
    const sliderImage = document.getElementById('sliderImage');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const modal = new bootstrap.Modal(document.getElementById('imageSliderModal'));
    let currentIndex = 0;

    images.forEach((img, index) => {
        img.addEventListener('click', () => {
            currentIndex = index;
            updateSliderImage();
            modal.show();
        });
    });

    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        updateSliderImage();
    });

    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % images.length;
        updateSliderImage();
    });

    function updateSliderImage() {
        sliderImage.src = images[currentIndex].src;
    }
});
