document.addEventListener('DOMContentLoaded', function(){


    



    const langBtn = document.getElementById('lang-btn')
    const langList = document.getElementById('lang-list')

    const langOptionPl = document.getElementById('lang-option-pl')
    const langOptionEn = document.getElementById('lang-option-en')

    const langContent = document.getElementById('lang-content')

    function HideLanguageList() {

        const langArr = document.getElementById('lang-arr')

        if (!langList.classList.contains('hidden')){
            langList.classList.add('hidden')
        }
        if (!langArr.classList.contains('rotated')){
            langArr.classList.add('rotated')
        }
    }
    function ShowLanguageList() {

        const langArr = document.getElementById('lang-arr')

        if (langList.classList.contains('hidden')){
            langList.classList.remove('hidden')
        }
        if (langArr.classList.contains('rotated')){
            langArr.classList.remove('rotated')
        }
    }
    function ChangeLanguageButtonContent(lang) {
        let language = ''
        let label = ''
        if (lang == 'us') {
            language = 'us.png'
            label = 'English'
        }else if (lang == 'pl'){
            language = 'pl.png'
            label = 'Polski'
        }

        langContent.innerHTML = `
            <div class="img-label" id="lang-label">
            <img src="src/${language}" alt="">
            <p>${label}</p>
            </div>
            <div class="arr rotated" id="lang-arr"></div>
        `
    }

    langBtn.addEventListener('click', function(){
        if (langList.classList.contains('hidden')){
            ShowLanguageList()
        }else{
            HideLanguageList()
        }
    })
    
    langOptionPl.addEventListener('click', function(){
        ChangeLanguageButtonContent('pl')
        HideLanguageList()
    })
    langOptionEn.addEventListener('click', function(){
        ChangeLanguageButtonContent('us')
        HideLanguageList()
    })


    document.addEventListener('scroll', () => {
        const scrollPosition = window.scrollY;
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;

        if (scrollPosition > (documentHeight - windowHeight) * 0.08) {
            document.querySelector('.scroll-arrow').classList.remove('hide');
        } else {
            document.querySelector('.scroll-arrow').classList.add('hide');
        }
    })
    const scrollArrow = document.querySelector('.scroll-arrow')
    function scrollToTop() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    scrollArrow.addEventListener('click', function(){ scrollToTop() })



    function toggleBackground(){
        const gallery2 = document.querySelectorAll('.gallery2')
        const slogans = [
            'Pomożemy Ci zdobyć rozpoznawalność.',
            'Dobrze stworzone social media to klucz do sukcesu.',
            'Stworzymy stronę internetową dla Twojej firmy.',
            'Gwarancja jakości sfotografowanych wspomnień.',
            'Lorem ipsum sorry dolores.'
        ]
        const dots = document.querySelectorAll('.dot')
        function toggleActiveDot(element){
            element.classList.toggle('active')
        }
        function toggleOpaqueClass(element){
            if(element.classList.contains('opaque')){
                element.classList.remove('opaque')
            }else{
                element.classList.add('opaque')
            }
        }
        function toggleSlogan(index){
            const slogan = document.querySelector('.slogan')
            slogan.innerHTML = slogans[index]
        }

        for(let i = 0; i < gallery2.length; i++){
            toggleSlogan(i)
            setTimeout(() => toggleOpaqueClass(gallery2[i]), (i+1) * 5000)
            setTimeout(() => toggleActiveDot(dots[i]), (i+1) * 5000)
            setTimeout(() => toggleSlogan(i), (i+1) * 5000)
            if(i != 0){
                setTimeout(() => toggleOpaqueClass(gallery2[i-1]), (i+1) * 5000)
                setTimeout(() => toggleActiveDot(dots[i-1]), (i+1) * 5000)
                console.log(dots[i-1])
            }else{
                setTimeout(() => toggleOpaqueClass(gallery2[gallery2.length - 1]), (i+1)*5000)
                setTimeout(() => toggleActiveDot(dots[dots.length - 1]), (i+1)*5000)
                console.log(dots[dots.length - 1])
            }
        }
    }
    toggleBackground()
    const galleryLenght = document.querySelectorAll('.gallery2').length
    setInterval(() => toggleBackground(), galleryLenght*5000)


    // LIGHT MODE SWITCH
    const darkModeSwitch = document.querySelector('.dark-mode-switch')
    darkModeSwitch.addEventListener('click', function(){

        const body = document.querySelector('body')
        const footer = document.querySelector('footer')
        
        const vids = document.querySelectorAll('.vid')
        const navLogo = document.querySelector('.nav-logo-container')

        const fb = document.getElementById('fb')
        const yt = document.getElementById('yt')
        const ig = document.getElementById('ig')
        const tt = document.getElementById('tt')
        const lin = document.getElementById('lin')

        const darkModeButton = document.querySelector('.dark-mode-button')

        let currentState = 0 // 0 - dark, 1 - light

        if (body.classList.contains('light-mode')){
            currentState = 1
        }else{
            currentState = 0
        }
        if (currentState == 0) {
            vids.forEach(e => {
                e.innerHTML = `<img src="src/video_blank_light.png" alt=""></img>`
            })
            navLogo.innerHTML = `<img src="src/logobig_light.png" alt="">`
            fb.innerHTML = `<img src="src/facebook_light.png" alt="">`
            yt.innerHTML = `<img src="src/youtube_light.png" alt="">`
            ig.innerHTML = `<img src="src/instagram_light.png" alt="">`
            tt.innerHTML = `<img src="src/tiktok_light.png" alt="">`
            lin.innerHTML = `<img src="src/linkedin_light.png" alt="">`            
            darkModeButton.innerHTML = `<i class="fa-solid fa-sun"></i>`
        }else{
            vids.forEach(e => {
                e.innerHTML = `<img src="src/video_blank.png" alt=""></img>`
            })
            navLogo.innerHTML = `<img src="src/logobig_dark.png" alt="">`
            fb.innerHTML = `<img src="src/facebook.png" alt="">`
            yt.innerHTML = `<img src="src/youtube.png" alt="">`
            ig.innerHTML = `<img src="src/instagram.png" alt="">`
            tt.innerHTML = `<img src="src/tiktok.png" alt="">`
            lin.innerHTML = `<img src="src/linkedin.png" alt="">`
            darkModeButton.innerHTML = `<i class="fa-solid fa-moon"></i>`
        }

        body.classList.toggle('light-mode')
        footer.classList.toggle('light-mode')
        

    })
})