document.addEventListener('DOMContentLoaded', function(){

    const txt1 = document.getElementById('txt1')
    const txt2 = document.getElementById('txt2')
    const txt3 = document.getElementById('txt3')

    const txts = [txt1, txt2, txt3]

    function RemoveAndAddHidden(element){
        element.classList.add('no-opacity')
        element.classList.remove('hidden-2')
        element.classList.add('hidden')
    }

    function RemoveHiddenAndOpacity(element){
        element.classList.remove('no-opacity')
        element.classList.remove('hidden')
    }

    function ChangeTo2(){
        txt1.classList.add('hidden-2')
        setTimeout(() => RemoveAndAddHidden(txt1), 500)
        setTimeout(() => RemoveHiddenAndOpacity(txt2), 150)
    }
    function ChangeTo3(){
        txt2.classList.add('hidden-2')
        setTimeout(() => RemoveAndAddHidden(txt2), 500)
        setTimeout(() => RemoveHiddenAndOpacity(txt3), 150)
    }
    function ChangeTo1(){
        txt3.classList.add('hidden-2')
        setTimeout(() => RemoveAndAddHidden(txt3), 500)
        setTimeout(() => RemoveHiddenAndOpacity(txt1), 150)
    }
    const n = 2 // duration of text animation in seconds
    function ChangeLoop(){
        setTimeout(() => ChangeTo2(), (n+1)*1000) // n*1000 + 1000
        setTimeout(() => ChangeTo3(), (n+1)*2000) // n*2000 + 2000
        setTimeout(() => ChangeTo1(), (n+1)*3000) // n*3000 + 3000
    }
    ChangeLoop()
    setInterval(() => ChangeLoop(), (n+1)*3000)

    const specElements = document.querySelectorAll('.spec-title')
    function clearSpecElements(element){
        if(!element.classList.contains('hide')){
            element.classList.add('hide')
        }
    }
    specElements.forEach(e => {

        function clearPosFromBarHandle(){
            const pos = ['pos1', 'pos2', 'pos3', 'pos4', 'pos5']
            pos.forEach(e => {
                if (barHandle.classList.contains(e)){
                    barHandle.classList.remove(e)
                }
            })
        }
        e.addEventListener('click', function(){
            clearPosFromBarHandle()
            specElements.forEach(element => {
                clearSpecElements(element.parentElement)
            })
            e.parentElement.classList.remove('hide')
            if(e.id == 't1'){
                barHandle.classList.add('pos1')
            }else if(e.id == 't2'){
                barHandle.classList.add('pos2')
            }else if(e.id == 't3'){
                barHandle.classList.add('pos3')
            }else if(e.id == 't4'){
                barHandle.classList.add('pos4')
            }else if(e.id == 't5'){
                barHandle.classList.add('pos5')
            }else{
                barHandle.classList.add('pos1')
            }
            console.log('xd')
        })
    })
    const barHandle = document.querySelector('.bar-handle')


})