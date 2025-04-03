function showSkills(){
    const content = `
        <section id="skills">
            <div id="skills-titles">
                <h2 id="stacks-title"> My Stacks </h2>
                <h2 id="tools-title"> My Tools </h2>
                
                <label for="toggle" id="button-toggle-skills">
                    <input type="checkbox" id="toggle">
                    <span id="ball"></span>
                    <i class="fa-solid fa-gear" id="gear"></i>
                    <i class="fa-solid fa-toolbox" id="toolbox"></i>
                </label>
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


    let isButtonToggleChecked = toggleStacksAndTools();

    if(isButtonToggleChecked === false){
        cardsDraggable(document.querySelectorAll('.stack'), document.querySelector('.carousel-container-stacks'));
    }

    
}



function toggleStacksAndTools(){
    const stacksTitle = document.getElementById('stacks-title');
    const toolsTitle = document.getElementById('tools-title');
    const myStacks = document.getElementById('my-stacks');
    const myTools = document.getElementById('my-tools');
    const buttonToggle = document.getElementById('toggle');
    
    const labelToggle = document.getElementById('button-toggle-skills');
    
    buttonToggle.addEventListener('change', () => {
        if(buttonToggle.checked === true){
            stacksTitle.style.display = 'none';
            toolsTitle.style.display = 'block';
            myStacks.style.display = 'none';
            myTools.style.display = 'block';

            labelToggle.style.borderColor = 'var(--logo1)';
            labelToggle.style.boxShadow = '0 0 10px var(--logo1)'
        }
        else{
            stacksTitle.style.display = 'block';
            toolsTitle.style.display = 'none';
            myStacks.style.display = 'block';
            myTools.style.display = 'none';

            labelToggle.style.borderColor = 'var(--subtitle)';
            labelToggle.style.boxShadow = '0 0 10px var(--subtitle)';
        }
        
    });
    return buttonToggle.checked;

}

function cardsDraggable(cards, container){



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