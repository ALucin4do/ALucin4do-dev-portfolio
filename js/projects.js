function showProjects(){
    const content = `
        <section id="projects">
            <h2>My Projects</h2>

            <div id="container-projects">
                <div id="slider-projects">
                        <!-- Digital Web Watch -->
                    <article class="project">
                        <header class="project-header">
                            <h4 class="project-title">Digital Web Watch</h4>

                            <div class="project-tags">
                                <span class="html-tag">html</span>
                                <span class="css-tag">css</span>
                                <span class="javascript-tag">javascript</span>
                            </div>
                        </header>

                        <main class="project-main">
                            <figure class="project-image">
                                <img src="/src/assets/projects/digital-web-watch-screenshot.png" alt="a screenshot of digital web watch website">
                            </figure>
                        </main>

                        <footer class="project-links">
                            <a href="https://digital-web-watch.vercel.app/" target="_blank" rel="noopener noreferrer"> view project</a>
                            <span>|</span>
                            <a href="https://github.com/ALucin4do/Digital-Web-Watch" target="_blank" rel="noopener noreferrer"> view repository</a>
                        </footer>
                    </article>

                    <!-- Number Guesser -->
                    <article class="project">
                        <header class="project-header">
                            <h4 class="project-title">Number Guesser</h4>

                            <div class="project-tags">
                                <span class="html-tag">html</span>
                                <span class="css-tag">css</span>
                                <span class="javascript-tag">javascript</span>
                            </div>
                        </header>

                        <main class="project-main">
                            <figure class="project-image">
                                <img src="/src/assets/projects/number-guesser-screenshot.png" alt=" a screenshot of number guesser website ">
                            </figure>                            
                        </main>

                        <footer class="project-links">
                            <a href="https://number-guesser-pink.vercel.app/" target="_blank" rel="noopener noreferrer"> view project</a>
                            <span>|</span>
                            <a href="https://github.com/ALucin4do/NumberGuesser" target="_blank" rel="noopener noreferrer"> view repository</a>
                        </footer>
                    </article>

                    <!-- ConectaOngs -->
                    <article class="project">
                        <header class="project-header">
                            <h4 class="project-title">ConectaOngs</h4>

                            <div class="project-tags">
                                <span class="html-tag">html</span>
                                <span class="css-tag">css</span>
                                <span class="javascript-tag">javascript</span>
                                
                            </div>
                        </header>

                        <main class="project-main">
                            <figure class="project-image">
                                <img src="/src/assets/projects/conectaongs-screenshot.png" alt=" a screenshot of ConectaOngs website ">
                            </figure>
                        </main>

                        <footer class="project-links">
                            <a href="" target="_blank" rel="noopener noreferrer"> view project</a>
                            <span>|</span>
                            <a href="" target="_blank" rel="noopener noreferrer"> view repository</a>
                        </footer>
                    </article>

                    <!-- Spotify Clone -->
                    <article class="project">
                        <header class="project-header">
                            <h4 class="project-title">Spotify Clone</h4>

                            <div class="project-tags">
                                <span class="html-tag">html</span>
                                <span class="css-tag">css</span>
                                <span class="javascript-tag">javascript</span>
                                <span class="node-tag">node</span>
                            </div>
                        </header>

                        <main class="project-main">
                            <figure class="project-image">
                                <img src="/src/assets/projects/spotify-clone-screenshot.png" alt=" a screenshot of Spotify Clone website ">
                            </figure>
                        </main>

                        <footer class="project-links">
                            <a href="https://spotify-clone-delta-silk.vercel.app/" target="_blank" rel="noopener noreferrer"> view project</a>
                            <span>|</span>
                            <a href="https://github.com/ALucin4do/Spotify-clone" target="_blank" rel="noopener noreferrer"> view repository</a>
                        </footer>
                    </article>

                    <!-- NLW CodeCraft Summit 2025 -->
                    <article class="project">
                        <header class="project-header">
                            <h4 class="project-title">NLW CodeCraft Summit 2025</h4>

                            <div class="project-tags">
                                <span class="html-tag">html</span>
                                <span class="css-tag">css</span>
                                <span class="javascript-tag">javascript</span>
                            </div>
                        </header>

                        <main class="project-main">
                            <figure class="project-image">
                                <img src="/src/assets/projects/nlw-codecraft-summit-2025-screenshot.png" alt=" a screenshot of NLW CodeCraft Summit 2025 website ">
                            </figure>
                        </main>

                        <footer class="project-links">
                            <a href="https://nlw-code-craft-summit-2025.vercel.app/" target="_blank" rel="noopener noreferrer"> view project</a>
                            <span>|</span>
                            <a href="https://github.com/ALucin4do/nlw-CodeCraft-Summit-2025" target="_blank" rel="noopener noreferrer"> view repository</a>
                        </footer>
                    </article>

                        <!-- Coming soon -->
                    <article id="coming-soon" class="project"">
                        <header class="project-header">
                            <h4 class="project-title" id="typed-coming-soon"></h4>
                        </header>

                        <main class="project-main">
                            <figure class="project-image">
                                <img src="src/images/coming soon.png" alt="Coming Soon">
                                <div>
                                    <img src="src/images/under construction.png" alt="under construction sign">
                                </div>
                            </figure>
                            
                            <p class="project-description" >New projects are coming! Grab a coffee and check back soon.</p>
                        </main>
                    </article>
                </div>
            </div>
        </section>    
    `

    main.innerHTML = content;

    /* typing animation for cooming soon */
    comingSoon()
}

function comingSoon(){
    const comingSoon = document.getElementById('typed-coming-soon');

    var typed = new Typed(comingSoon, {
        strings: ['Coming Soon^1000.^1000.^1000.'],
        typeSpeed: 300,
        loop: true,
        backSpeed: 50,
        showCursor: false,
    });
}