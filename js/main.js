(function(){
    'use strict'

    let mainTable = document.querySelector('#main-table');

    

    fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
        .then(response => response.json())
        .then(data => {
            data.map((elem, index) => {
                var tr = document.createElement('tr');
                var td = document.createElement('td');

                td.innerHTML = elem.id;
                tr.append(td);

                mainTable.appendChild(tr);
            });
        })
})();