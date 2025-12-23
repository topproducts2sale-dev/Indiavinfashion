
const products = [
 {id:1,name:'Product One'},
 {id:2,name:'Product Two'}
];

const container = document.getElementById('products');
function display(list){
 container.innerHTML='';
 list.forEach(p=>{
  container.innerHTML+=`<div class="card">
   <a href="product.html?id=${p.id}">${p.name}</a>
  </div>`;
 });
}
display(products);

function searchProducts(){
 const q=document.getElementById('search').value.toLowerCase();
 display(products.filter(p=>p.name.toLowerCase().includes(q)));
}
