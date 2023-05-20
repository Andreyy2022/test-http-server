let form = document.querySelector('form');
let inp1 = document.querySelector('[number="num1"]');
let inp2 = document.querySelector('[number="num2"]');
let inp3 = document.querySelector('[number="num3"]');
let par = document.querySelector('p');

form.addEventListener('submit', function(event) {
    let searchPrarams = new URLSearchPrarams();

    searchPrarams.set('num1', inp1.value);
    searchPrarams.set('num2', inp2.value);
    searchPrarams.set('num3', inp3.value);

    let path = '/handler/?' + searchPrarams;

    fetch(path).than(response  => {
        return response.text();
    }).then(text => {
        console.log(text);
        par.innerHTML += text;
    });

    event.preventDefault();
});