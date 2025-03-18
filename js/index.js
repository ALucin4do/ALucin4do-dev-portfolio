
const buttons = [
    buttonHome = document.getElementById('btn-home'),
    buttonAbout = document.getElementById('btn-about'),
    buttonSkills = document.getElementById('btn-skills'),
    buttonProjects = document.getElementById('btn-projects'),
    buttonExperience = document.getElementById('btn-experience'),
]

const btnText = document.querySelectorAll('.section-button span');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        main.innerHTML = '';
        const activateSpan = button.querySelector('span');

        btnText.forEach(span => {
            span.classList.remove('active');
        });

        activateSpan.classList.add('active');
    });
});

buttonHome.addEventListener('click', showHome);
buttonAbout.addEventListener('click', showAbout);
buttonSkills.addEventListener('click', showSkills);
buttonProjects.addEventListener('click', showProjects);
buttonExperience.addEventListener('click', showExperience);



showHome();
btnText[0].classList.add('active'); /* sets home to active */



/* hover lights effect */

const syncPointer = ({x: pointerX, y: pointerY}) => {
    const x = pointerX.toFixed(2);
    const y = pointerY.toFixed(2);
    const xp = (pointerX / window.innerWidth).toFixed(2);
    const yp = (pointerY / window.innerHeight).toFixed(2);
    document.documentElement.style.setProperty('--x', x);
    document.documentElement.style.setProperty('--y', y);
    document.documentElement.style.setProperty('--xp', xp);
    document.documentElement.style.setProperty('--yp', yp);
}



document.body.addEventListener('pointermove', syncPointer);
document.body.addEventListener('touchmove', syncPointer);







