//Main Site:

nav.addEventListener('mousedown', function(e){
    nav.style.backgroundColor = '#fcc100';
    logo.style.fontSize = '5em';
    navAnchors.forEach(navAnchor => navAnchor.style.fontSize = '2em');;
});

const navLink = document.querySelector('.nav-link'); 

navLink.addEventListener('mouseover', () => {
    console.log('hovered')
    // navLink.classList.toggle('hover-effect');
})

window.addEventListener('keydown', function(e) {
    let keyName = e.key;
    if (e.key != 'Control' || e.key != 'Meta'){
        alert('You pressed this key: ' + keyName);
    }
});

const textSelect = document.querySelector('.text-content p');

textSelect.addEventListener('wheel', () => {
    console.log("You selected the text using wheel listener");
})

all.addEventListener('keyup', function(e){
    let press = e.keyCode;
    if (press == 17){
        TweenMax.to(wizvan, 0, {
            x:0,
            rotation: 0
        });

    }
})

window.addEventListener("resize", () => {
    alert("viewport resized")
})

window.addEventListener('scroll', function(e) {
    nav.style.backgroundColor = '#fcc100';

    setTimeout(function(e) {
        nav.style.backgroundColor = '';
    }, 1000);
});

button3.addEventListener('click', function(event) {
    event.stopPropagation();
    console.log("Button clicked!");
    TweenMax.to(".animationBtn3", 1, {
        rotation:360,
    })
})

const destinationContent = document.querySelector('.content-destination p')

destinationContent.addEventListener('select', () => {
    alert("You selected the text")
}, false)

window.addEventListener("load", () => {
    console.log("All resources finished loading!");
})

