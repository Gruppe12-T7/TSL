//https://crfdkrynbwvauyrnuvmc.supabase.co/rest/v1/TSL

//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNyZmRrcnluYnd2YXV5cm51dm1jIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjU5NTIyNjAsImV4cCI6MjA0MTUyODI2MH0.O22J8QS22BKJY5zhPqmOcHsy7j0qCNJTZpwOh-dKXfc

const urlParams = new URLSearchParams(window.location.search);

//fanger den valgte kategori på index.html
const selectedCategory = urlParams.get("category");
console.log("cat", selectedCategory);

//fetcher data
fetch(
    `https://crfdkrynbwvauyrnuvmc.supabase.co/rest/v1/TSL?Taksonomi1=eq.${selectedCategory}&limit=15`,
    {
        method: "GET",
        headers: {
            apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNyZmRrcnluYnd2YXV5cm51dm1jIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjU5NTIyNjAsImV4cCI6MjA0MTUyODI2MH0.O22J8QS22BKJY5zhPqmOcHsy7j0qCNJTZpwOh-dKXfc"
        },
    }
)
.then((res)=> res.json())
.then(showProducts);

//laver et array af de produkter fra den valgte kategori
function showProducts(products){
    console.log(products);
    products.forEach(showProduct);
}

//kopierer dem og viser i templaten
function showProduct(product){
    console.log(product);

    document.querySelector("h2").textContent=product.Taksonomi1;
    const template = document.querySelector("#produktTemplate");
    const copy = template.content.cloneNode(true);

    copy.querySelector(".produktlsitenavn").textContent = product.Produktnavn_og_model;
    copy.querySelector("a").href = "produkt.html?id="+product.Asset_ID;
    document.querySelector(".grid_produktliste").appendChild(copy);
}

