document.addEventListener('DOMContentLoaded', () => {
  const ripples = document.querySelectorAll('[sp-ripple]') || [];
  const btnsIconType = document.querySelectorAll('[button-icon]') || [];
  btnsIconType.forEach((el) => {
    el.style.borderRadius = '50%';
  });
  if(ripples &&  ripples.length > 0) {
    let timeOut;
    ripples.forEach((el, index) => {
      let textContent = el.textContent;
      el.style.userSelect = 'none';
      el.addEventListener('click', () => {
        const currentEffect = el.getAttribute('sp-ripple');
        if(currentEffect === '' || !currentEffect) {
          console.error('Required value of "sp-ripple" attribute, includes 2 values:  circle | rect. \n  Ex: sp-ripple="circle"');
          return;
        }
        if(currentEffect === 'rect') {
          
        }
        if(currentEffect === 'circle') {

        }
        // console.log('an roi day', currentEffect);
      });
      el.addEventListener('mousedown', () => {
        clearTimeout(timeOut);
        const bgEffectElement = document.createElement('div');
        bgEffectElement.className = 'effect-position bg-ripple-effect effect-down';
        el.appendChild(bgEffectElement);
      });
      el.addEventListener('mouseup', (e) => {
        clearTimeout(timeOut);
        const bdEffectElement = document.createElement('div');
        bdEffectElement.className = 'effect-position bd-ripple-effect effect-up';
        el.removeChild(el.lastChild);
        el.appendChild(bdEffectElement);
        console.log(el.children);
        setTimeout(() =>{
          el.innerHTML = textContent;
        }, 300);
         /*  timeOut = setTimeout(() => {
            for(let i = 1; i < el.children.length; i++) {
              el.removeChild(el.children[i]);
            }
          }, 80); */
        
      })
    })
  }
});

function rippleAddEventListeners(event, typeOfAttributes) {

}