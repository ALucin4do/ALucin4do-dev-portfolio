
const main = document.getElementById('main');



function showHome() {
    const homeContent = `
        <section id="home">
            <hgroup>
                <h2 id="typed-animation-name"></h2>
                <h3 id="role"> <span>Your</span>Front-end Developer</h3>
            </hgroup>

            <div class="social-networks-container">
                <a href="https://www.linkedin.com/in/lucino-de-campos/" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-linkedin"></i></a>
                <a href="https://github.com/ALucin4do" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-github"></i></a>
                <a href="mailto:lucinogabriel1510@gmail.com" id="email" ><i class="fa-solid fa-envelope"></i></a>
            </div>
        </section>
    `;

    main.innerHTML = homeContent;

    /* typing animation to the greetings */
    const greetings = document.getElementById('typed-animation-name');

    var typed = new Typed(greetings, {
        strings: ['Hello, ^500 I am <mark>Lucino De Campos</mark>'],
        typeSpeed: 100,
    });

    /* fade-in animation to the role */
    const role = document.getElementById('role');
    role.style.opacity = 0;
    setTimeout(() => {
        role.style.opacity = 1;
        role.style.transform = 'translateY(0px)'
    }, 5000);

    /* fade-in animation to the social networks container */
    const socialNetworksContainer = document.querySelector('.social-networks-container');
    socialNetworksContainer.style.opacity = 0;
    setTimeout(() => {
        socialNetworksContainer.style.opacity = 1;
        socialNetworksContainer.style.transform = 'translateY(0px)'
    }, 6000);




    /* copy email  */
    const email = document.getElementById('email');
    email.addEventListener('click', () => {
        navigator.clipboard.writeText('lucinogabriel1510@gmail.com');
        alert('Email copied to clipboard!');
    });


}

