let productsData=[];
fetch('data/products.json').then(r=>r.json()).then(d=>{productsData=d;displayProducts(d)});
function displayProducts(list){
 const c=document.getElementById('product-list');c.innerHTML='';
 list.forEach(p=>{c.innerHTML+=`
 <div class="card">
 <img src="${p.image}">
 <h3>${p.name}</h3>
 <p>${p.price}</p>
 <a href="product.html?id=${p.id}" class="buy">View Product</a>
 </div>`})
}
function searchProducts(){
 const q=document.getElementById('search').value.toLowerCase();
 displayProducts(productsData.filter(p=>p.name.toLowerCase().includes(q)))
}
