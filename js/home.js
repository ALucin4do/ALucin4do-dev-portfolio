
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
                <a href="mailto:lucinogabriel1510@gmail.com" ><i class="fa-solid fa-envelope"></i></a>
            </div>
        </section>
    `;

    main.innerHTML = homeContent;

    /* make the typing animation to the greetings */
    const greetings = document.getElementById('typed-animation-name');

    var typed = new Typed(greetings, {
        strings: ['Hello, ^1000 I am <mark>Lucino De Campos</mark>'],
        typeSpeed: 100,
    });
}

