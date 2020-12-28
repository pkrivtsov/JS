const cart = {
    'id:1_1': {
        'name': 'GPRS-модем EL-3100',
        'description': 'Прозрачный режим для работы в сторонних АИИС, интерфейсы RS-232, RS-485, 3 дискретных входа',
        'image': './img/1_1.png',
        'price': 5424.00
    },
    'id:1_2': {
        'name': 'GPRS-модем EL-3100R2',
        'description': 'Прозрачный режим для работы в сторонних АИИС, RS-232, RS-485, 3 дискретных входа, встроенный разветвитель RS-232',
        'image': './img/1_2.png',
        'price': 7378.80
    },
    'id:1_3': {
        'name': 'GPRS-модем EL-3100R4',
        'description': 'Прозрачный режим для работы в сторонних АИИС, RS-232, RS-485, 3 дискретных входа, встроенный разветвитель RS-485',
        'image': './img/1_3.png',
        'price': 7378.80
    },
    'id:1_4': {
        'name': 'GPRS-модем EL-3100D',
        'description': 'Двухсимочный модем. Прозрачный режим для работы в сторонних АИИС, интерфейсы RS-232, RS-485, 3 дискретных входа',
        'image': './img/1_4.png',
        'price': 6084.00
    },

}
let out = '<div class="card-box">';
for (let key in cart) {

    out += '<div class="card">';
    out += `<img class="card_img" src="${cart[key]["image"]}" alt="${cart[key]}">`;
    out += `<h4 class="heading-mini">${cart[key]["name"]}</h4>`;
    out += `<p class="text">${cart[key]["description"]}</p>`;
    out += `<p class="text">${cart[key]["price"]} RUR</p>`;
    out += `<a href="#" class="to-cart" data-id="${key}">В корзину</a>`;
    out += `</div>`;

}
out += `</div>`;
document.querySelector('.products').innerHTML = out;

const data = {};
// в этот массив попадают товары, которые В корзину

document.querySelector('.card').addEventListener('click', event => {
    if (event.target.classList.contains('to-cart')) {
        let id = event.target.dataset['id'];
        if (data[id] !== undefined) {
            data[id]['count']++;
        }
        else {
            data[id] = cart[id];
            data[id]['count'] = 1;
        }
        localStorage.setItem('cart', JSON.stringify(data));
    }
})

