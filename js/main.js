(function(){
    'use strict'

    let mainTable = document.querySelector('#main-table');

    mainTable.innerHTML = '<th id="id-number">#</th> <th id="coin">Coin</th> <th  id="price">Price</th> <th id="price-ch">Price Change</th> <th id="h24">24h Volume</th>';

    // fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
    //     .then(response => response.json())
    //     .then(data => {
    //         data.map((elem, index) => {

    //             console.log(elem.id);
    //         });
    //     })
})();