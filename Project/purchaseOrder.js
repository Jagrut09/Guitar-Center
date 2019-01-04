var data = JSON.parse(localStorage.myData);
var pimage = document.getElementById('productimage');
var productinfo = document.getElementById('purchase-product-info');
var price = document.getElementById('purchase-price');
var shippinginfo = document.getElementById('purchase-shipping-info');
var available = document.getElementById('purchase-availability');
var custreview = document.getElementById('purchae-customer-review');
var displayfn = document.getElementById('dfn');
/*var url = window.location.href;
//localStorage.myData = JSON.stringify(data);

var buy = document.getElementById('buy');
var pimage = document.getElementById('productimage');
var productinfo = document.getElementById('purchase-product-info');
console.log(pimage.src);
//buy.addEventListener("click", function(){
    //window.location.href = "purchaseOrder.html";
    //localStorage = index;

    pimage.src = data.allProducts[index].image_path;
    console.log(pimage.src);
    //productinfo.innerHTML = data.allProducts[index].product_description;
    productinfo.innerHTML = "hello";
    console.log(productinfo);
*/

var url = window.location.href;
console.log(url);
var str = url.split("=");
console.log("str", str);
var index = str[1];
console.log(index);
pimage.src = data.allProducts[index].image_path;
productinfo.innerHTML = data.allProducts[index].product_description;
price.innerHTML = data.allProducts[index].price;
//console.log(price);
shippinginfo.innerHTML = data.allProducts[index].shipping_details;
//var si = shippinginfo.innerHTML;
var shippingCharge = parseFloat(shippinginfo.innerHTML.substr(22));
var priceCost = parseFloat(price.innerHTML.substr(1, 7));
console.log(shippingCharge);
var totalPrice = priceCost + shippingCharge;
console.log(priceCost);
console.log(totalPrice);
available.innerHTML = data.allProducts[index].stock_availability;
custreview.innerHTML = data.allProducts[index].customer_reviews;

function validateForm(){
    var firstname = document.forms["customer-form"]["fn"].value;
    var ln = document.forms["customer-form"]["ln"].value;
    var pnumber = document.forms["customer-form"]["pn"].value;
    var email = document.forms["customer-form"]["email"].value;
    var add1 = document.forms["customer-form"]["add1"].value;
    var add2 = document.forms["customer-form"]["add2"].value;
    var city = document.forms["customer-form"]["city"].value;
    var pc = document.forms["customer-form"]["pc"].value;
    var st = document.forms["customer-form"]["state"].value;

    document.getElementById('dfn').innerHTML = firstname;
    document.getElementById('dln').innerHTML = ln;
    document.getElementById('dphone-no').innerHTML = pnumber;
    document.getElementById('demail').innerHTML = email;
    document.getElementById('dadd1').innerHTML = add1;
    document.getElementById('dadd2').innerHTML = add2;
    document.getElementById('dcity').innerHTML = city;
    document.getElementById('dpin').innerHTML = pc;
    document.getElementById('dstate').innerHTML = st;
}

var buy = document.getElementById('btnbuy');
buy.addEventListener("click", function(){
    window.location.href = "confirm.html?index="+ index;
    console.log(index);
});

