let div = document.querySelector('div');
let btn = document.querySelector('button');

btn.addEventListener('click', function() {
    fetch('/handler/?num=9').then(response => {
        return response.text();
    }).then(text => {
        div.innerHTML = text;
    });
});