//https://crfdkrynbwvauyrnuvmc.supabase.co/rest/v1/TSL

//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNyZmRrcnluYnd2YXV5cm51dm1jIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjU5NTIyNjAsImV4cCI6MjA0MTUyODI2MH0.O22J8QS22BKJY5zhPqmOcHsy7j0qCNJTZpwOh-dKXfc

const urlParams = new URLSearchParams(window.location.search);

const selectedCategory = param.get(`category`);

if(selectedCategory)
fetch(
    `https://crfdkrynbwvauyrnuvmc.supabase.co/rest/v1/TSL?Taksonomi1=eg.${encodeURIComponent(selectedCategory)}`,
    {
        method: "GET",
        headers: {
            apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNyZmRrcnluYnd2YXV5cm51dm1jIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjU5NTIyNjAsImV4cCI6MjA0MTUyODI2MH0.O22J8QS22BKJY5zhPqmOcHsy7j0qCNJTZpwOh-dKXfc"
        },
    }
)
.then((res)=> res.json())
.then(showProducts);

function showProducts(products){
    console.log(products);
    products.forEach(showProduct);
}

function showProduct(product){
    console.log(product);
    const copy = template.content.cloneNode(true);
    copy.querySelector
    copy.querySelector
}

