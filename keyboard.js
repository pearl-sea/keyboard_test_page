const keycaps = [...document.querySelectorAll('.keycap')]

window.addEventListener('keydown', keyCheck)      
window.addEventListener('keyup', keyCheck)      

function keyCheck(event){
    console.log(event)
    if(
        event.key === 'Tab' || 
        event.key === 'Escape' || 
        event.key === 'Enter' || 
        event.key === 'F1' ||
        event.key === 'F2' ||
        event.key === 'F3' ||
        event.key === 'F4' ||
        event.key === 'F5' ||
        event.key === 'F6' ||
        event.key === 'F7' ||
        event.key === 'F8' ||
        event.key === 'F9' ||
        event.key === 'F10' ||
        event.key === 'F11' ||
        event.key === 'F12' ||
        event.key === 'ScrLk' || 
        event.code === 'AltLeft' || 
        event.code === 'AltRight' || 
        event.code === 'ContextMenu' || 
        event.code === 'ControlLeft' ||
        event.code === 'ControlRight'
    
    ){
        event.preventDefault();
    }

    keycaps.map(keycap=>{

        if(keycap.dataset.key === event.key || keycap.dataset.key === event.code){
            keycap.style.background = "#ccc"
        }

        let currentKey = document.querySelector('.current-key');
        currentKey.textContent = event.code;

        const resetBtn =  document.querySelector('.reset');
        resetBtn.addEventListener('click', function(){
            if (!keycap.classList.contains('disabled')){
                keycap.style.background = "";
                currentKey.textContent = '아직 없음';
            }
        })
   
    })
}
