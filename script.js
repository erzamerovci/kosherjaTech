document.addEventListener('DOMContentLoaded', function () {
    var viewProductButtons = document.querySelectorAll('#view-product-button');

    // Për çdo buton, shto një dëgjues ngjarjeje
    viewProductButtons.forEach(function (button, index) {
        button.addEventListener('click', function () {
            // Merr informacionet për produktin nga faqja e fillimit
            var productCards = document.querySelectorAll('.product_card');
            var selectedProduct = productCards[index];

            var productImageSrc = selectedProduct.querySelector('img').getAttribute('src');
            var productName = selectedProduct.querySelector('h4').innerText;

            // Përgatiti të dhënat e produktit
            var productData = {
                image: productImageSrc,
                name: productName,
                // Shtoni më shumë informacione nëse është e nevojshme
            };

            // Ruaj të dhënat e produktit në localStorage
            localStorage.setItem('productData', JSON.stringify(productData));

            // Ridrejtohu në faqen e produktit
            window.location.href = 'products.html';
        });
    });
});
