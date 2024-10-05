//open & close Cart

var cart = document.querySelector('.cart')

function open_cart() {
    cart.classList.add("active")
}
function close_cart() {
    cart.classList.remove("active")
}

/* add items in cart */

var all_products_json;

var items_in_cart = document.querySelector(".items_in_cart");
let product_cart = [];

function addToCart(id , btn) {
    product_cart.push(all_products_json[id])
    btn.classList.add("active")
}