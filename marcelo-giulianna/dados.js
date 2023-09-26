const cidade = document.querySelector('#cidade');

const botao = document.querySelector('#buscar');

botao.addEventListener('click', function (e) {

    let search = cidade.value;

    const options = {
        method: 'GET',
        mode: 'cors',
        cache: 'default'
    }

    fetch(`https://api.hgbrasil.com/weather?format=json-cors&key=be7abc45&city_name=${search}`, options)

        .then(function (response) {
            response.json()

                .then(function (data) {
                    console.log(data);
                })
        })

        .catch(function (e) {
            console.log('Error: ' + e.message);
        })










})