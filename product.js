fetch('data/products.json').then(r=>r.json()).then(d=>{
 const id=new URLSearchParams(window.location.search).get('id');
 const p=d.find(x=>x.id==id);
 document.getElementById('product').innerHTML=`
 <h1>${p.name}</h1>
 <img src="${p.image}" style="max-width:300px">
 <p>${p.description}</p>
 <h3>${p.price}</h3>
 <a href="${p.affiliate}" target="_blank" class="buy">Buy from Partner</a>`
})
