// Sample data for cryptocurrency prices
const cryptoPrices = [
    { name: "Bitcoin", price: "$45,000" },
    { name: "Ethereum", price: "$3,000" },
    { name: "Litecoin", price: "$200" }
];

// Function to populate ticker with cryptocurrency prices
function populateTicker() {
    const ticker = document.getElementById('ticker');
    ticker.innerHTML = '';
    cryptoPrices.forEach(crypto => {
        const listItem = document.createElement('li');
        listItem.textContent = `${crypto.name}: ${crypto.price}`;
        ticker.appendChild(listItem);
    });
}

// Populate ticker initially
populateTicker();
