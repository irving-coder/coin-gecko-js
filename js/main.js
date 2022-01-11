(function(){
    'use strict'

    // let mainTable = document.querySelector('#main-table');
    let tbody = document.querySelector('tbody');

    fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
        .then(response => response.json())
        .then(data => {
            data.map((elem, index) => {
                var tr = document.createElement('tr');
                var td = '';

                td = '<td>' +(index +  1)+ '</td><td>' +elem.id+ '</td> <td>' +elem.current_price.toLocaleString()+ '</td> <td>' +elem.price_change_percentage_24h+ '</td> <td>' +elem.total_volume.toLocaleString()+ '</td>';

                tr.innerHTML = td;
                tbody.appendChild(tr);
            });
        })
})();