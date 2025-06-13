const products = [
    { id: 1, name: 'Item A', price: 10 },
    { id: 2, name: 'Item B', price: 15 },
    { id: 3, name: 'Item C', price: 20 }
];

const cart = [];

function renderProducts() {
    const container = document.getElementById('products');
    products.forEach(p => {
        const div = document.createElement('div');
        div.className = 'product';
        div.innerHTML = `<h3>${p.name}</h3><p>$${p.price}</p>`;
        const btn = document.createElement('button');
        btn.textContent = 'Add to cart';
        btn.onclick = () => addToCart(p);
        div.appendChild(btn);
        container.appendChild(div);
    });
}

function addToCart(product) {
    cart.push(product);
    renderCart();
}

function renderCart() {
    const items = document.getElementById('cart-items');
    items.innerHTML = '';
    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - $${item.price}`;
        items.appendChild(li);
    });
}

window.onload = () => {
    renderProducts();
};

