const form = document.querySelector('form')

form.addEventListener('submit' , (e) => {
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const  result = document.querySelector('.result')
    console.log(result);
    

    if(height === '' || height < 0 || isNaN(height)){
        result.innerHTML = 'Enter a valid Height in numbers only ';
    }
    else if(weight === '' || weight <=0 || isNaN(weight)){
        result.innerHTML = 'Enter  a valid weight in number only '
    }
    else{
        const bmi = (weight /((height*height)/10000)).toFixed(3);
        result.innerHTML = `<span>${bmi}</span>`;
    }
})