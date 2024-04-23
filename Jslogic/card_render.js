let card = `
<div class="cart_container">
<div class="inner_container">
  <div class="product_img">
    <img src=".\\images\\2.jpg" alt="" />
  </div>
  <div class="product_info">
    <div class="product_name">Chocolate Bucket</div>
    <div class="company_name">Dairy Milk, 5 Start, Kitkat</div>
    <div class="rating_section">
      <span>274 Purchased</span>
      <span>7.5⭐ </span>
    </div>
    <div class="price">
      <span class="current_price">₹283.00 M.R.P. :</span>
      <span class="main_price">₹349.00</span>
      <span class="discount">19% OFF</span>
    </div>
  </div>

  <div class="add_to_cart_button">
    <button>Add To Cart</button>
  </div>

  <div class="review">
    <button>Like</button>
    <button>Comment</button>
    <button>Share</button>
  </div>
</div>
</div>
`
// console.log("heloo");
let card_element = document.createElement("div");
card_element.innerHTML = card;
let products_showcase = document.querySelector(".product_showcase");

for(let i=0;i<10;i++){
let card_element = document.createElement("div");
card_element.innerHTML = card;
products_showcase.prepend(card_element);
}
