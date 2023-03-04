const categoryList = document.getElementById('categories');

//İSTEK ATMAYA YARAR
document.addEventListener('DOMContentLoaded', function () {
  // VERİLERİN ÇEKİLMESİ VE İŞLENMESİ
  fetch('https://api.escuelajs.co/api/v1/categories')
    .then(function (response) {
      return response.json();
    })
    // VERİLERİN EKRANA BASILMASI
    .then(function (data) {
      data.slice(0, 4).forEach(function (category) {
        const categoryBox = document.createElement('div');
        categoryBox.classList.add('category');
        categoryBox.innerHTML = ` 
        <img
        src=${category.image}
        alt=""/>
        <p>${category.name}</p>`;
        categoryList.appendChild(categoryBox);
      });
    });
});

var modal = document.querySelector(".modal")
var toplamBilgi = document.querySelector("#toplamBilgi")
// sepete ekleme
let fiyatlar = []

function sepeteEkle(parametre){
  var urunDiv = document.createElement("div")
  urunDiv.classList.add("urunDiv")
  urunDiv.innerHTML = `
          <h1> ${parametre.name}</h1>
          <h2>${parametre.price} TL</h2>
  `;
  modal.appendChild(urunDiv)

  fiyatlar.push(Number(parametre.price))
  const toplam = fiyatlar.reduce((a,b)=>a + b,0)
  toplamBilgi.innerHTML = toplam
}

//ÜRÜNLERİ ÇEKME VE YAZMA
var productList = document.getElementById("products")

document.addEventListener("DOMContentLoaded",function(){
   fetch('https://api.escuelajs.co/api/v1/products')
   .then(function(response){return response.json()})
   .then(function(data){ data.slice(0,20).forEach(function(product){
    console.log(product)
    //ÜRÜN OLUŞTURMA
    var productItem = document.createElement("div")
    productItem.classList.add("product")
    productItem.innerHTML = `
          <img src="${product.images[0]}" alt="">
          <p>${product.title}</p>
          <label>${product.category.name}</label>
          <div class="card-buy">
            <label> ${product.price} TL</label>
            <button onclick="sepeteEkle({name:'${product.title}', price:'${product.price}' })" >Sepete Ekle</button>
          </div>
    `;
    productList.appendChild(productItem)   }) })
})

// SEPET KISMI
var sepetBtn = document.getElementById("sepet")
var modalBox = document.querySelector(".modal-box")
var closeBtn = document.getElementById('close');

sepetBtn.addEventListener("click",function(){
  modalBox.classList.add('active');
})

closeBtn.addEventListener("click",function(){
  modalBox.classList.remove("active")
})