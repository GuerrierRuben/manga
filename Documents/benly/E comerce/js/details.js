document.addEventListener('DOMContentLoaded', () => {
    // Get product ID from URL
    const urlParams = new URLSearchParams(window.location.search);
    const productId = parseInt(urlParams.get('id'));

    // Find the product in the products array (loaded from products.js)
    const product = products.find(p => p.id === productId);

    const detailsContainer = document.getElementById('product-details');

    if (product) {
        // Generate rating stars
        let stars = '';
        for (let i = 1; i <= 5; i++) {
            stars += `<span class="fa fa-star ${i <= product.rating ? 'checked' : ''}"></span>`;
        }

        // Populate the details container
        detailsContainer.innerHTML = `
            <div class="product-image-container">
                <img src="${product.image}" alt="${product.name}">
            </div>
            <div class="product-info">
                <h1>${product.name}</h1>
                <div class="details-rating">
                    ${stars}
                </div>
                <div class="product-price-details">$${product.price.toFixed(2)}</div>
                <p class="product-description">${product.description}</p>
                <div class="btn-group">
                    <a href="#" class="btn-details btn-add">ADD TO CART</a>
                    <a href="index.html" class="btn-details btn-back">BACK TO SHOP</a>
                </div>
            </div>
        `;
    } else {
        // Product not found
        detailsContainer.innerHTML = `
            <div style="text-align: center; grid-column: 1 / -1; padding: 50px;">
                <h1>Produit non trouvé</h1>
                <p>Désolé, nous n'avons pas pu trouver le produit que vous recherchez.</p>
                <a href="index.html" class="btn-details btn-back" style="display: inline-block; margin-top: 20px;">RETOUR À LA BOUTIQUE</a>
            </div>
        `;
    }
});
