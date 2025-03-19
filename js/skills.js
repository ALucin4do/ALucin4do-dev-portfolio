function showSkills(){
    const content = `
        <section id="skills">
            <div id="button-toggle-skills">
                <input type="checkbox" name="my-stacks" id="">
                <input type="checkbox" name="my-tools" id="">
            </div>

            <div id="my-stacks" class="swiper">
                <div id="carousel-container-stacks" class="swiper-wrapper">
                        <!-- HTML -->
                    <article class="stack html-logo swiper-slide"> 
                        <figure>
                            <img  src="src/images/html logo.png" alt="">
                        </figure>

                        <figcaption>HTML</figcaption>
                    </article>
                        <!-- CSS -->
                    <article class="stack css-logo swiper-slide">
                        <figure>
                            <img  src="src/images/css logo.png" alt="">
                        </figure>

                        <figcaption>CSS</figcaption>
                    </article>
                        <!-- JavaScript --> 
                    <article class="stack js-logo swiper-slide">
                        <figure>
                            <img  src="src/images/js logo.png" alt="">
                        </figure>
                        
                        <figcaption>JavaScript</figcaption>
                    </article>

                    <!-- Repeating for better swiper animation -->
                    

                    <!-- HTML -->
                    <article class="stack html-logo swiper-slide"> 
                        <figure>
                            <img  src="src/images/html logo.png" alt="">
                        </figure>

                        <figcaption>HTML</figcaption>
                    </article>
                        <!-- CSS -->
                    <article class="stack css-logo swiper-slide">
                        <figure>
                            <img  src="src/images/css logo.png" alt="">
                        </figure>

                        <figcaption>CSS</figcaption>
                    </article>
                        <!-- JavaScript --> 
                    <article class="stack js-logo swiper-slide">
                        <figure>
                            <img  src="src/images/js logo.png" alt="">
                        </figure>
                        
                        <figcaption>JavaScript</figcaption>
                    </article>


                                            <!-- HTML -->
                    <article class="stack html-logo swiper-slide"> 
                        <figure>
                            <img  src="src/images/html logo.png" alt="">
                        </figure>

                        <figcaption>HTML</figcaption>
                    </article>
                        <!-- CSS -->
                    <article class="stack css-logo swiper-slide">
                        <figure>
                            <img  src="src/images/css logo.png" alt="">
                        </figure>

                        <figcaption>CSS</figcaption>
                    </article>
                        <!-- JavaScript --> 
                    <article class="stack js-logo swiper-slide">
                        <figure>
                            <img  src="src/images/js logo.png" alt="">
                        </figure>
                        
                        <figcaption>JavaScript</figcaption>
                    </article>

                                            <!-- HTML -->
                    <article class="stack html-logo swiper-slide"> 
                        <figure>
                            <img  src="src/images/html logo.png" alt="">
                        </figure>

                        <figcaption>HTML</figcaption>
                    </article>
                        <!-- CSS -->
                    <article class="stack css-logo swiper-slide">
                        <figure>
                            <img  src="src/images/css logo.png" alt="">
                        </figure>

                        <figcaption>CSS</figcaption>
                    </article>
                        <!-- JavaScript --> 
                    <article class="stack js-logo swiper-slide">
                        <figure>
                            <img  src="src/images/js logo.png" alt="">
                        </figure>
                        
                        <figcaption>JavaScript</figcaption>
                    </article>

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

    /* Swiper */
    const swiper = new Swiper('.swiper', {
        slidesPerView: 1,
        spaceBetween: 1,
        
        effect: 'cards',
        allowTouchMove: false,
        keyboard: {
            enabled: true,
        },
        
        autoplay: {
            delay: 1000,
        },

    });

    /* Toggle */
    const toggleStacks = document.querySelector('#button-toggle-skills input[name="my-stacks"]');
    const toggleTools = document.querySelector('#button-toggle-skills input[name="my-tools"]');
    const myStacks = document.getElementById('my-stacks');
    const myTools = document.getElementById('my-tools');

    toggleStacks.addEventListener('change', () => {
        if (toggleStacks.checked) {
            myStacks.style.display = 'flex';
            myTools.style.display = 'none';
            toggleTools.checked = false;
        } else {
            myStacks.style.display = 'none';
        }
    });

    toggleTools.addEventListener('change', () => {
        if (toggleTools.checked) {
            myTools.style.display = 'flex';
            myStacks.style.display = 'none';
            toggleStacks.checked = false;
        } else {
            myTools.style.display = 'none';
        }
    });

        
    











}