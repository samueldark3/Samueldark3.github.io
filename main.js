document.addEventListener('DOMContentLoaded', () => {
  fetch('../data/products.json')
    .then(response => response.json())
    .then(data => {
      const productGrid = document.getElementById('product-grid');
      data.products.forEach(product => {
        if (product.featured) {
          const card = document.createElement('div');
          card.className = 'product-card';
          card.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.price}</p>
            <a href="${product.affiliateLink}" target="_blank" class="btn">Comprar</a>
          `;
          productGrid.appendChild(card);
        }
      });
    });
});