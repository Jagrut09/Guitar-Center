var data = JSON.parse(localStorage.myData);
var url = window.location.href;
var pimage = document.getElementById('image-confirm');
var orderno = document.getElementById('order-number');
var pdesc = document.getElementById('prod-desc');
var custreview = document.getElementById('cust-review');
var pavailable = document.getElementById('product-available');
var total = document.getElementById('total-price');
console.log(url);
var str = url.split("=");
var index = str[1];
console.log(index);
pimage.src = data.allProducts[index].image_path;
orderno.innerHTML = "Order Number " + index;
pdesc.innerHTML = data.allProducts[index].product_description;
custreview.innerHTML = data.allProducts[index].customer_reviews;
pavailable.innerHTML = data.allProducts[index].no_of_items;
total.innerHTML = data.allProducts[index].price;

var returnhome = document.getElementById('returnhome');
returnhome.addEventListener("click", function(){
    alert('Thank You for Shoppinh with Us! Your Order has been placed');
    window.location.href = 'index.html';
})