

//show Cart

(function(){
  const cartInfo = document.getElementById("cart-info");
  const cart = document.getElementById("cart");

  cartInfo.addEvertListener("click", function() {
    cart.classList.toggle("show-cart");
  });
})();

(function(){
  const cartBtn = document.querySelectorAll(".story-item-icon");

  cartBtn.forEach(function(btn){
    btn.addEvertListener("click", function(event) {

      if (event.target.parentElement.classList(".story-item-icon")){
        let fullpath = event.targt.parentElement.previousElementSibling.src;
        let partPath = fullPath.slice(pos);

        let name = event.target.parentElement.parentElement.nextElementSibling
                    .children[0].children[0].textContent;
        let price = event.target.parentElement.parentElement.nextElementSibling
                    .children[0].children[1].textContent;
        let finalPrice = price.slice(1).trim();

        item.price = finalPrice;

        const cartItem = document.createElement('div');
        cartItem.classList.add(
          "cart-item",
          "d-flex",
          "justify-content-between",
          "text-capitalize",
          "my-3"
        );
        cartItem.innerHTML = '
              <p id="cart-item-title" class="font-weight-bold mb-0">${item.name}</p>
              <span>$</span>
              <span id="cart-item-price" class="cart-item-price" class="mb-0">${item.price}</span>

            <a href="#" id='cart-item-remove' class="cart-item-remove">
              <i class="fas fa-trash"></i>
            </a>
          ';
          const cart = document.getElementById("cart");
          const total = document.querySelector(".cart-total-container");

          cart.insertBefore(cartItem, total);
          alert("item added to the cart");
          showTotals();
        }
    });
  });
        function showTotals() {
          const total = [];
          const items = document.querySelectorAll(".cart-item-price");

          items.forEach(function(item){
            total.push(parseFloat(item.textContent));
          });

          const totalMoney = total.reduce(function(total, item){
            total += item;
            return total;
          }, 0);
          const finalMoney = totalMoney.toFixed(2);

          document.getElementById("cart-total").textContent = finalMoney;
          document.getSelector(".item-total").textContent = finalMoney;
          document.getElementById("item-count").textContent = total.length;
        }
})();












;
