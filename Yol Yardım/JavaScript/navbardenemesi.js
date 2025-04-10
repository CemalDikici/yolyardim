// Menü tuşunu ve menüyü seçiyoruz
const menuToggle = document.getElementById('menuToggle');
const menu = document.getElementById('menu');

// Menüye tıklanınca açılıp kapanma animasyonu ekliyoruz
menuToggle.addEventListener('click', () => {
    menu.classList.toggle('open'); // "open" sınıfını ekle veya kaldır
});
