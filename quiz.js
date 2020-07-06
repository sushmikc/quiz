const correctAnswer = ['B', 'B', 'B', 'B'];

const form = document.querySelector('.my-form');
const result = document.querySelector('.result');
const value = document.querySelector('span');

form.addEventListener('submit', e =>{
    e.preventDefault();

    let score = 0;
    const choices=[form.q1.value, form.q2.value, form.q3.value, form.q4.value];

    choices.forEach((choice, index) =>
    {
        if(choice===correctAnswer[index])
        {
            score+=25;
        }
    });
    scrollTo(0,0);
    result.style.display = 'block';

    let output = 0;
    const timer = setInterval(() =>{
        value.textContent = `${output}%` ;
        if(output===score)
        {
            clearInterval(timer);
        }
        else{
            output++;
        }
    },10);
});