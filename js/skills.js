function showSkills(){
    const content = `
        <section id="skills">
            <div id="button-toggle-skills">
                <input type="checkbox" name="my-stacks" id="" checked>
                <input type="checkbox" name="my-tools" id="">
            </div>

            <div id="my-stacks" >
                <div id="carousel-container-stacks" >
                        <!-- HTML -->
                    <article class="stack" id="html"> 
                        <div class="card-front">
                            <figure>
                                <img  src="src/images/html logo.png" alt="">
                            </figure>
                            
                            <figcaption>HTML</figcaption>
                        </div>
                    </article>
                        <!-- CSS -->
                    <article class="stack" id="css">
                        <div class="card-front">
                            <figure>
                                <img  src="src/images/css logo.png" alt="">
                            </figure>
                            
                            <figcaption>CSS</figcaption>
                        </div>
                    </article>
                        <!-- JavaScript --> 
                    <article class="stack" id="js">
                        <div class="card-front">
                            <figure>
                                <img  src="src/images/js logo.png" alt="">
                            </figure>
                        
                            <figcaption>JavaScript</figcaption>
                        </div>
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
        }
    });

    toggleTools.addEventListener('change', () => {
        if (toggleTools.checked) {
            myTools.style.display = 'flex';
            myStacks.style.display = 'none';
            toggleStacks.checked = false;
        }
    });
    
    


    /* making the cards draggable and collidable */
    const cards = document.querySelectorAll('.stack');
    const container = document.querySelector('.carousel-container-stacks');

        /* draggable library settings */
    Draggable.create(cards, {
        type: 'x,y',
        bounds: container,
        edgeResistance: 0.65,
        inertia: true,
        

        onDragEnd: function(){
            /* 3d effects come back when the user drops the card */
            gsap.to(this.target, {
                rotationX: 0,
                rotationY: 0,
                z: 0,
                duration: 0.3
            });
        },

        onPress: function(){
            /* grab card effect */
            gsap.to(this.target, {
                rotationX: 10,
                rotationY: 5,
                z: 20,
                duration: 0.2
            });
        }
        
    });

}