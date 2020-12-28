let cart = {
    'ПО92779': {
        'name': 'GPRS-модем EL-3100',
        'description': 'Прозрачный режим для работы в сторонних АИИС, интерфейсы RS-232, RS-485, 3 дискретных входа',
        'image': './image/1_1.png'
        'price': 5424.00
    },
    'ПО93780': {
        'name': 'GPRS-модем EL-3100R2',
        'description': 'Прозрачный режим для работы в сторонних АИИС, RS-232, RS-485, 3 дискретных входа, встроенный разветвитель RS-232',
        'image': './image/1_2.png'
        'price': 7378.80
    },
    'ПО94780': {
        'name': 'GPRS-модем EL-3100D',
        'description': 'Двухсимочный модем. Прозрачный режим для работы в сторонних АИИС, интерфейсы RS-232, RS-485, 3 дискретных входа',
        'image': './image/1_4.png'
        'price': 6084.00
    },
}
let out = '<div class="pricing-table row">';
for (let key in cart) {

    out += '<div class="col col-md-6 col-lg-4">';
    out += '<div class="package featured text-center">';
    out += '<h2>${cart[key]['name']}</h2>';
    out += '<p class="description">${cart[key]['description']}</p>';
    out += '<img src="${cart[key]['image']}">';
    out += '<p class="price">${cart[key]['price']} RUR</p>';
    out += '<button class ="to-cart button-primary" data-articul="${key}">В корзину</button>';
    out += '</div>';
    out += '</div>';

}
out += '</div>';
document.querySelector('.products').innerHTML = out;

let data = {};
// в этот массив попадают товары, которые В корзину

document.querySelector('.products').addEventListener('click', event =>){
    if (event.target.classList.contains('to-cart')) {
        let articul = event.target.dataset['articul'];
        if (data[articul] !== undefined) {
            data[aricul]['count']++;
        }
        else {
            data[articul] = cart[articul];
            data[articul]['count'] = 1;
        }
        localStorage.setItem('cart', JSON.stringify(data));
    }
})
