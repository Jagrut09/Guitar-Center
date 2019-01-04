var productimg = document.getElementById("img-product");
var productinfo = document.getElementById("productinfo");
var price = document.getElementById("price");
var shipping = document.getElementById("shippinginfo");
var available = document.getElementById("availability");
var custreviews = document.getElementById("customerreviews");
var previous = document.getElementById("previous");
var next = document.getElementById("next");
var index = 0;
var data;
var number = 1;

var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
    if(xhttp.readyState == 4 && xhttp.status == 200){
        data = JSON.parse(this.responseText);
        localStorage.myData = JSON.stringify(data);
        console.log(localStorage.myData);
        //return data;
    }
};
xhttp.open("GET", "guitardata.json", true);
xhttp.send();

productinfo.addEventListener("click", function(){
    document.getElementById("pinfo").innerHTML = data.allProducts[index].product_description;
    //console.log(allProducts[index])
});

price.addEventListener("click", function(){
    document.getElementById("pprice").innerHTML = data.allProducts[index].price;
});

shipping.addEventListener("click", function(){
    document.getElementById("sinfo").innerHTML = data.allProducts[index].shipping_details;
});

available.addEventListener("click", function(){
    document.getElementById("available").innerHTML = data.allProducts[index].stock_availability;
});

custreviews.addEventListener("click", function(){
    document.getElementById("custreviews").innerHTML = data.allProducts[index].customer_reviews;
});

next.addEventListener("click", function(){
    //index = 0;
    if(index == 3){
        number = 0;
        index = -1;
    }else{
        number = index + 1;
    }
    index++;
    productimg.src = data.allProducts[index].image_path;
    document.getElementById("pinfo").innerHTML = data.allProducts[index].product_description;
    document.getElementById("pprice").innerHTML = data.allProducts[index].price;
    document.getElementById("sinfo").innerHTML = data.allProducts[index].shipping_details;
    document.getElementById("available").innerHTML = data.allProducts[index].stock_availability;
    document.getElementById("custreviews").innerHTML = data.allProducts[index].customer_reviews;
    console.log(index);
});

previous.addEventListener("click", function(){
    if(index == 0){
        number = 4;
        index = 3;
    }else{
        number = index - 1;
    }
    index--;
    productimg.src = data.allProducts[index].image_path;
    // if(previous.toggle == 'active'){
    //     console.log('active');
    document.getElementById("pinfo").innerHTML = data.allProducts[index].product_description;
    document.getElementById("pprice").innerHTML = data.allProducts[index].price;
    document.getElementById("sinfo").innerHTML = data.allProducts[index].shipping_details;
    document.getElementById("available").innerHTML = data.allProducts[index].stock_availability;
    document.getElementById("custreviews").innerHTML = data.allProducts[index].customer_reviews;
    //}
});

var productdetails = document.getElementsByClassName("collapsible");
for(var i=0; i<productdetails.length; i++){
    console.log(productdetails.length);
    productdetails[i].addEventListener("click", function(){
        this.classList.toggle('active');
        var content = this.nextElementSibling;
        console.log(content);
        if(content.style.display == 'none'){
            content.style.display = 'block';
        }else{
            content.style.display = 'none';
        }
      // if(this.classList.toggle == 'active'){
        //     content.style.display = 'none';
        // }
        // else{
        //     content.style.display = 'block';
        // }
    });
}

var buy = document.getElementById('buy');
buy.addEventListener("click", function(){
    // location.curguitar = index;
    window.location.href = "purchaseOrder.html?index="+ index;
    console.log(index);

    //localStorage.curGuitar = index;
    //console.log(localStorage.curGuitar);
    //console.log(index);
    alert('index', index);
//location.href = 'orderPurchase.htm';
});

