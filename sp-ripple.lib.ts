type RippleType = 'circle' | 'rect';

document.addEventListener('DOMContentLoaded', () => {
  const ripples = document.querySelectorAll('[sp-ripple]') || [];
  if(ripples &&  ripples.length > 0) {
    ripples.forEach((el, index) => {
      const elAsType = el as HTMLElement;
      elAsType.style.userSelect = 'none';
      /* replace event */
      elAsType.addEventListener('click', () => {
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
      })
    })
  }
});

function rippleAddEventListenere(elemet: HTMLElement, eventName: MouseEvent, typeOfAttributes: RippleType) {
  elemet.addEventListener(event, () => {

  })
}