let form = document.querySelector('form');
let inp1 = document.querySelector('[name="num1"]');
let inp2 = document.querySelector('[name="num2"]');

form.addEventListener('submit', function(event) {
    let searchParams = new searchParams();

    searchParams.set('num1', inp1.value);
    searchParams.set('num2', inp2.value);

    let path = '/handler/?' + searchParams.toString();

    fetch(path).then(response => {
        return response.text();
    }).then(text => {
        console.log(text);
    });

    event.preventDefault();
});