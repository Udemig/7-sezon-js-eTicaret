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
