function showSkills(){
    const content = `
        <section id="skills">
            <div id="button-toggle-skills">
                <input type="checkbox" name="my-stacks" id="">
                <input type="checkbox" name="my-tools" id="">
            </div>

            <div id="my-stacks">
                <div id="carousel-container-stacks">
                        <!-- HTML -->
                    <article class="stack"> 
                        <figure>
                            <img src="src/images/html logo.png" alt="">
                        </figure>

                        <figcaption>HTML</figcaption>
                    </article>
                        <!-- CSS -->
                    <article class="stack">
                        <figure>
                            <img src="src/images/css logo.png" alt="">
                        </figure>

                        <figcaption>CSS</figcaption>
                    </article>
                        <!-- JavaScript --> 
                    <article class="stack">
                        <figure>
                            <img src="src/images/js logo.png" alt="">
                        </figure>
                        
                        <figcaption>JavaScript</figcaption>
                    </article>
                </div>
            </div>

            <div id="my-tools">
                <div id="scroll-container-tools">
                        <!-- Git -->
                    <article class="tool">
                        <figure>
                            <img src="src/images/git logo.png" alt="git logo">
                        </figure>
                        <figcaption>Git</figcaption>
                    </article>
                        <!-- GitHub -->
                    <article class="tool">
                        <figure>
                            <img src="src/images/github logo.png" alt="github logo">
                        </figure>
                        <figcaption>GitHub</figcaption>
                    </article>
                        <!-- Vscode -->
                    <article class="tool">
                        <figure>
                            <img src="src/images/vscode logo.png" alt="vscode logo">
                        </figure>
                        <figcaption>vscode</figcaption>
                    </article>
                        <!-- Figma -->
                    <article class="tool">
                        <figure>
                            <img src="src/images/figma logo.png" alt="figma logo">
                        </figure>
                        <figcaption>figma</figcaption>
                    </article>

                </div>
            </div>
        </section>    
    `

    main.innerHTML = content;
}