async function fetchCryptoData() {
    try {
        const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,litecoin&vs_currencies=usd');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching cryptocurrency data:', error);
        return {};
    }
}

function populateTicker() {
    const ticker = document.getElementById('ticker');
    ticker.innerHTML = '';

    fetchCryptoData().then(data => {
        Object.keys(data).forEach(crypto => {
            const price = data[crypto].usd.toFixed(2); // Assuming the price is in USD
            const listItem = document.createElement('li');
            listItem.textContent = `${crypto}: $${price}`;
            ticker.appendChild(listItem);
        });
    });
}

// Populate ticker initially
populateTicker();

// Refresh ticker every 30 seconds
setInterval(populateTicker, 30000);