let div = document.querySelector('div');
let btn = document.querySelector('button');

btn.addEventListener('click', function() {
    fetch('/handler/?num1=3&num2=5').then(response => {
        return  response.text();
    }).then(text => {
        div.innerHTML = text;
    });
});