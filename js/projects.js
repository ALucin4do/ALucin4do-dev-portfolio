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
                                <img src="" alt="">
                            </figure>

                            <p class="project-description"></p>
                        </main>

                        <footer class="project-links">
                            <a href="" target="_blank" rel="noopener noreferrer"> view project</a>
                            <span>|</span>
                            <a href="" target="_blank" rel="noopener noreferrer"> view repository</a>
                        </footer>
                    </article>

                    <!-- Calculator -->
                    <article class="project">
                        <header class="project-header">
                            <h4 class="project-title">Calculator</h4>

                            <div class="project-tags">
                                <span class="html-tag">html</span>
                                <span class="css-tag">css</span>
                                <span class="javascript-tag">javascript</span>
                            </div>
                        </header>

                        <main class="project-main">
                            <figure class="project-image">
                                <img src="" alt="">
                            </figure>

                            <p class="project-description"></p>
                        </main>

                        <footer class="project-links">
                            <a href="" target="_blank" rel="noopener noreferrer"> view project</a>
                            <a href="" target="_blank" rel="noopener noreferrer"> view repository</a>
                        </footer>
                    </article>

                    <!-- To Do List -->
                    <article class="project">
                        <header class="project-header">
                            <h4 class="project-title">To Do List</h4>

                            <div class="project-tags">
                                <span class="html-tag">html</span>
                                <span class="css-tag">css</span>
                                <span class="javascript-tag">javascript</span>
                            </div>
                        </header>

                        <main class="project-main">
                            <figure class="project-image">
                                <img src="" alt="">
                            </figure>

                            <p class="project-description"></p>
                        </main>

                        <footer class="project-links">
                            <a href="" target="_blank" rel="noopener noreferrer"> view project</a>
                            <a href="" target="_blank" rel="noopener noreferrer"> view repository</a>
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
    const comingSoon = document.getElementById('typed-coming-soon');

    var typed = new Typed(comingSoon, {
        strings: ['Coming Soon^1000.^1000.^1000.'],
        typeSpeed: 300,
        loop: true,
        backSpeed: 50,
        showCursor: false,
    });
}