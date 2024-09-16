const urlParams = new URLSearchParams(window.location.search);

const selectedCategory = param.get(`category`);

fetch("https://crfdkrynbwvauyrnuvmc.supabase.co/rest/v1/TSL", {
    method: "GET",
    headers: {
        apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNyZmRrcnluYnd2YXV5cm51dm1jIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjU5NTIyNjAsImV4cCI6MjA0MTUyODI2MH0.O22J8QS22BKJY5zhPqmOcHsy7j0qCNJTZpwOh-dKXfc"
    }
})
.then(res=>res.json())
.then(showData)

function showData(items){
  console.log(items);
  items.forEach(showItem)
}

function showItem(item){
    console.log(item);
    const template = document.querySelector("").textContent;
    const copy = template.cloneNode(true);
    //copy.querySelector("")
    //copy.querySelector("")
    document.querySelector("main").appendChild(copy)
}


/*window.addEventListener("DOMContentLoaded", hentData); */

/* const urlParams = new URLSearchParams(window.location.search);
const category = urlParams.get("category");

fetch("https://kea-alt-del.dk/t7/api/products?category="+category)
.then(res=>res.json())
 .then(showProducts)


 function showProducts(products){
    //looper og kalder showProduct
    products.forEach(showProduct)
 }

 function showProduct(product ){
    //console.log(product)
    //fang template
    const template = document.querySelector("#smallProductTemplate").content;
    //lav en kopi
    const copy = template.cloneNode(true);
    //ændre indhold
    copy.querySelector("img").src=`https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;
    copy.querySelector("h3").textContent=product.productdisplayname;
    
    if(product.soldout){
        copy.querySelector("article").classList.add("soldOut");
    }
    if (product.discount) {
        copy.querySelector("article").classList.add("onSale");
        copy.querySelector(".discounted p span").textContent = Math.round(product.price - (product.price * product.discount) / 100);
        copy.querySelector(".discounted p+p span").textContent =product.discount
    }

    copy.querySelector(".read-more").setAttribute("href", `produkt.html?id=${product.id}`)
    //appende
    document.querySelector("main").appendChild(copy)
 } */
