document.addEventListener("DOMContentLoaded", function () {
  var viewProductButtons = document.querySelectorAll("#view-product-button");

  viewProductButtons.forEach(function (button, index) {
    button.addEventListener("click", function () {
      var productCards = document.querySelectorAll(".product_card");
      var selectedProduct = productCards[index];

      var productImageSrc = selectedProduct
        .querySelector("img")
        .getAttribute("src");
      var productName = selectedProduct.querySelector("h4").innerText;

      var productData = {
        image: productImageSrc,
        name: productName,
      };

      localStorage.setItem("productData", JSON.stringify(productData));

      window.location.href = "products.html";
    });
  });
});
