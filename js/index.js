
const buttonHome = document.getElementById('btn-home');
const buttonAbout = document.getElementById('btn-about');
const buttonSkills = document.getElementById('btn-skills');
const buttonProjects = document.getElementById('btn-projects');
const buttonExperience = document.getElementById('btn-experience');

const home = document.getElementById('home');
const about = document.getElementById('about');
const skills = document.getElementById('skills');
const projects = document.getElementById('projects');
const experience = document.getElementById('experience');

const buttons = [buttonHome, buttonAbout, buttonSkills, buttonProjects, buttonExperience];
const sections = [home, about, skills, projects, experience];

buttons.forEach((button) => {
    /* everytime one of the buttons is clicked then... */
    button.addEventListener('click', () => {
        /* set all sections to display none */
        sections.forEach((section) => {
            section.style.display = 'none';
        });

        /* chose a section of the same index to display flex */
        const index = buttons.indexOf(button);
        sections[index].style.display = 'flex';
    });
});











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