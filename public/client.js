let div = document.querySelector('div');
let btn = document.querySelector('button');

btn.addEventListener('click', function() {
    fetch('/ajax.html').then(response => {
        return response.text();
    }).then(text => {
        div.innerHTML = text;
    });

    btn.addEventListener('click', function() {
        fetch('/ajax2.html').then(response => {
            return response.text();
        }).then(text => {
            div.innerHTML = text;
        });
    
        btn.addEventListener('click', function() {
            fetch('/ajax3.html').then(response => {
                return response.text();
            }).then(text => {
                div.innerHTML = text;
            });
        
            btn.addEventListener('click', function() {
                fetch('/ajax4.html').then(response => {
                    return response.text();
                }).then(text => {
                    div.innerHTML = text;
                });
            
                btn.addEventListener('click', function() {
                    fetch('/ajax5.html').then(response => {
                        return response.text();
                    }).then(text => {
                        div.innerHTML = text;
                    });
                }, {once: true});
            }, {once: true});
        }, {once: true});
    }, {once: true});
}, {once: true});