let div = document.querySelector('div');
let first = document.querySelector('#first');
let second = document.querySelector('#second');
let third = document.querySelector('#third');

first.addEventListener('click', function() {
    fetch('/ajax.html').then(response => {
        return response.text();
    }).then(text => {
        div.innerHTML = text;
    });
});

second.addEventListener('click', function() {
    fetch('/ajax2.html').then(response => {
        return response.text();
    }).then(text => {
        div.innerHTML = text;
    });
});

third.addEventListener('click', function() {
    fetch('/ajax3.html').then(response => {
        return response.text();
    }).then(text => {
        div.innerHTML = text;
    });
})