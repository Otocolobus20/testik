let photos = [
    'img/carousel1.webp',
    'img/carousel2.webp',
    'img/carousel3.webp',
    'img/carousel4.webp',
]
let thumbnails = document.querySelectorAll('.gallery__preview-photo')
let fullPhoto = document.querySelector('.full-photo')
let addThumbnailClickHandler = function (thumbnail, photo) {
    thumbnail.addEventListener('click', function() {
        fullPhoto.src = photo
    })
}
for (let i = 0; i < thumbnails.length; i++) {
    addThumbnailClickHandler(thumbnails[i], photos[i])
}

document.addEventListener('DOMContentLoaded', function() {
    let currentSlide = 0
    const slides = document.querySelectorAll('.gallery-carousel .photos img')
    const totalSlides = slides.length
    document.querySelector('.prev').addEventListener('click', function() {
        changeSlides(-1)
    })
    document.querySelector('.next').addEventListener('click', function() {
        changeSlides(1)
    })
    let changeSlides = function(direction) {
        slides[currentSlide].style.display = 'none'
        currentSlide = (currentSlide + direction + totalSlides) % totalSlides
        slides[currentSlide].style.display = 'block'
    }
})