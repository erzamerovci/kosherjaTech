document.addEventListener("DOMContentLoaded", function () {
  var productData = JSON.parse(localStorage.getItem("productData"));

  if (productData) {
    var productPhotoDiv = document.querySelector(".product_photo");
    var productImage = document.createElement("img");
    productImage.src = productData.image;
    productImage.alt = "Product Image";
    productPhotoDiv.appendChild(productImage);

    var thumbnailsContainer = document.createElement("div");
    thumbnailsContainer.classList.add("thumbnails_container");
    productPhotoDiv.appendChild(thumbnailsContainer);

    for (var i = 1; i <= 3; i++) {
      var thumbnailDiv = document.createElement("div");
      thumbnailDiv.classList.add("thumbnail");
      thumbnailDiv.id = "thumbnail" + i;
      thumbnailDiv.style.backgroundImage = "url(" + productData.image + ")";
      thumbnailDiv.addEventListener("click", function () {
        openModal(productData.image);
      });
      thumbnailsContainer.appendChild(thumbnailDiv);
    }

    var productDescDiv = document.querySelector(".product_desc");
    productDescDiv.innerHTML = `
            <h2 id="productName">${productData.name}</h2>
            <p id="productPrice">${productData.price}</p>
            <div id="productRating">${generateStars(productData.rating)}</div>
            <p id="productDescription">${productData.description}</p>
            <label for="quantity">Quantity:</label>
            <div class="quantity-control">
                <button onclick="decreaseQuantity()">-</button>
                <input type="number" id="quantity" name="quantity" value="1" readonly>
                <button onclick="increaseQuantity()">+</button>
            </div>
            <br>
            <label for="color">Choose a color:</label>
            <div class="color-options">
                <div class="color-option" id="black" onclick="selectColor('black')"></div>
                <div class="color-option" id="green" onclick="selectColor('green')"></div>
                <div class="color-option" id="blue" onclick="selectColor('blue')"></div>
            </div>
            <br>
            <button onclick="addToCart()">Add to Cart</button>
        `;
    function generateStars(rating) {
      var stars = "";
      for (var i = 1; i <= 5; i++) {
        if (i <= rating) {
          stars += '<span class="star">&#9733;</span>';
        } else {
          stars += '<span class="star">&#9734;</span>';
        }
      }
      return stars;
    }

    window.increaseQuantity = function () {
      var quantityInput = document.getElementById("quantity");
      var currentQuantity = parseInt(quantityInput.value);
      quantityInput.value = currentQuantity + 1;
    };

    window.decreaseQuantity = function () {
      var quantityInput = document.getElementById("quantity");
      var currentQuantity = parseInt(quantityInput.value);
      if (currentQuantity > 1) {
        quantityInput.value = currentQuantity - 1;
      }
    };

    window.selectColor = function (color) {
      console.log("Selected color: " + color);
    };

    window.addToCart = function () {
      var selectedQuantity = parseInt(
        document.getElementById("quantity").value
      );
      var selectedColor = "";
      console.log(
        "Added to cart - Quantity: " +
          selectedQuantity +
          ", Color: " +
          selectedColor
      );
    };
  } else {
    console.log("Nuk ka të dhëna për produktin.");
  }
});

function openModal(imageSrc) {
  var modal = document.getElementById("myModal");
  var modalImage = document.getElementById("modalImage");
  modal.style.display = "block";
  modalImage.src = imageSrc;
}

function closeModal() {
  var modal = document.getElementById("myModal");
  modal.style.display = "none";
}

window.addEventListener("click", function (event) {
  var modal = document.getElementById("myModal");
  if (event.target === modal) {
    closeModal();
  }
});
