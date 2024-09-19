const urlParams = new URLSearchParams(window.location.search);

const id = urlParams.get(`id`);

fetch("https://crfdkrynbwvauyrnuvmc.supabase.co/rest/v1/TSL?Asset_ID=eq." + id, {
    method: "GET",
    headers: {
        apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNyZmRrcnluYnd2YXV5cm51dm1jIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjU5NTIyNjAsImV4cCI6MjA0MTUyODI2MH0.O22J8QS22BKJY5zhPqmOcHsy7j0qCNJTZpwOh-dKXfc"
    }
})
.then(res=>res.json())
.then(showData)

function showData(item){
  console.log(item);
  document.querySelector(".sektion1 h1").textContent=item[0].Mærke;
  document.querySelector(".sektion1 h2").textContent=item[0].Produktnavn_og_model;
}

/*
fetch("https://kea-alt-del.dk/t7/api/products/" + id)
.then(response => response.json())
.then((data) => showProduct(data));

function showProduct(product) {
  console.log(product )
  document.querySelector(".purchaseBox h3").textContent=product.productdisplayname;
  document.querySelector(".purchaseBox p").textContent=product.brandname;
  document.querySelector("img").src=`https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`
}
*/