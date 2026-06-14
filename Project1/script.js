const buttons = document.querySelectorAll('.button');
const body =  document.querySelector('body');

buttons.forEach(button =>{
    button.addEventListener('mouseover' , (ev)=>{
        if(ev.target.id === 'pink'){
            body.style.backgroundColor = 'palevioletred';
        }
        if(ev.target.id === 'red'){
            body.style.backgroundColor = 'coral';
        }
        if(ev.target.id === 'orange'){
            body.style.backgroundColor = 'orange';
        }
        if(ev.target.id === 'blue'){
            body.style.backgroundColor = 'cornflowerblue';
        }
        
    })
})
