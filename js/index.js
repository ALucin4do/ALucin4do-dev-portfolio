
const buttons = [
    buttonHome = document.getElementById('btn-home'),
    buttonAbout = document.getElementById('btn-about'),
    buttonSkills = document.getElementById('btn-skills'),
    buttonProjects = document.getElementById('btn-projects'),
    buttonExperience = document.getElementById('btn-experience'),
]

buttons.forEach(button => {
    button.addEventListener('click', () => {
        main.innerHTML = '';
    });
});

buttonHome.addEventListener('click', showHome);
buttonAbout.addEventListener('click', showAbout);
buttonSkills.addEventListener('click', showSkills);
buttonProjects.addEventListener('click', showProjects);
buttonExperience.addEventListener('click', showExperience);



showHome();







