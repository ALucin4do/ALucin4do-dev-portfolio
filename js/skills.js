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
                    <article class="stack swiper-slide"> 
                        <figure>
                            <img class="html-logo" src="src/images/html logo.png" alt="">
                        </figure>

                        <figcaption>HTML</figcaption>
                    </article>
                        <!-- CSS -->
                    <article class="stack swiper-slide">
                        <figure>
                            <img class="css-logo" src="src/images/css logo.png" alt="">
                        </figure>

                        <figcaption>CSS</figcaption>
                    </article>
                        <!-- JavaScript --> 
                    <article class="stack swiper-slide">
                        <figure>
                            <img class="js-logo" src="src/images/js logo.png" alt="">
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
        spaceBetween: 30,
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
        loop: true,

        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },

        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        }


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