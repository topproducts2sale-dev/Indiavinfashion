
const params=new URLSearchParams(window.location.search);
const id=params.get('id');
document.getElementById('product').innerHTML=`<h1>Product ${id}</h1><p>Affiliate link here</p>`;
