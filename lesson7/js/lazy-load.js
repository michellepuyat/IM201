//find all images that has data-src attribute
const images = document.querySelectorAll('[data-src]');

function preloadImage(img) {
    //get the attribute of data-src
    const src = img.getAttribute('data-src');
    if (!src) {
        return;
    } 

    img.src = src;
    img.removeAttribute('data-src');
}

const imgOptions = {
    threshold: 0,
    rootMargin: '0px 0px -300px 0px'
};

//create image observer
const imgObserver = new IntersectionObserver((entries, imgObserver) => {
    //go over each iamge
    entries.forEach(entry =>{
        if (!entry.isIntersecting) {
            return;
        } else {
            preloadImage(entry.target);
            //stop observing after preload
            imgObserver.unobserve(entry.target);
        }
    })
}, imgOptions)

//check all images
images.forEach(image => {
    //run image observe to observe the image
    imgObserver.observe(image);
});
