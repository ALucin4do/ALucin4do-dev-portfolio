

/*  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Home ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
const greetings = document.getElementById('typed-animation-name');

var typed = new Typed(greetings, {
    strings: ['Hello, ^1000 I am <mark>Lucino De Campos</mark>'],
    typeSpeed: 100,
});


/*  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Projects ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

const comingSoon = document.getElementById('typed-coming-soon');

var typed = new Typed(comingSoon, {
    strings: ['Coming Soon^1000.^1000.^1000.'],
    typeSpeed: 300,
    loop: true,
    backSpeed: 50,
    showCursor: false,
});