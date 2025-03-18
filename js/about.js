function showAbout(){
    const content = `
    <section id="about">
    <h2> Who am I ?</h2>
    
    <div id="aboutme-text">
    <p>
            <i>"Coding is my craft, and every project is a new challenge to conquer."</i>
        <br>
        <br>
            Hey there! I’m <mark>Lucino</mark>, a self-taught <span id="dev" >Front-End Developer</span>  passionate about crafting engaging and functional web experiences. My toolkit includes <span id="html">HTML</span>, <span id="css">CSS</span>, <span id="js">JavaScript</span>, and a never-ending curiosity to explore new technologies.
        <br>
        <br>
            I thrive on learning by doing, constantly building projects and refining my skills. My experience as a volunteer project manager at Zaffiro Junior Enterprise gave me a strong foundation in <span class="soft-skills">collaboration</span>, <span class="soft-skills">organization</span>, and <span class="soft-skills">agile methodologies</span>. I also had the chance to sharpen my <span class="soft-skills">teaching</span> and <span class="soft-skills">communication</span>
            skills as a biomedical instrumentation monitor.
        <br>
        <br>
            Beyond coding, I love learning languages! I’m fluent in <span id="english" >English</span> (TOEFL B2-certified) and currently diving into <span id="mandarin">Mandarin</span>, because why not take on a new challenge?
        <br>
        <br>
            Excited to kickstart my career in tech! If you're looking for a passionate developer, let's talk!
    </p>
    </div>
    </section>
    `

    main.innerHTML = content;

    /* fade-in animation to the title */
    const title = document.querySelector('#about h2');
    setTimeout(() => {
        title.style.opacity = 1;
        title.style.transform = 'translateY(0)';
    }, 1000);

    /* fade-in animation to the text */
    const text = document.querySelector('#aboutme-text');
    setTimeout(() => {
        text.style.opacity = 1;
        text.style.transform = 'translateY(0)';
    }, 2000);


}