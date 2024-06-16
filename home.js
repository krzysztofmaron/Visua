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
            <img src="${language}" alt="">
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

})