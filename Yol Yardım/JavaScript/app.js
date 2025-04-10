const icerikler = document.querySelectorAll(".icerik");
const solIcon = document.getElementById("solIcon");
const sagIcon = document.getElementById("sagIcon");

let aktifIndex = 0; // İlk içerik görünür

// Sağ ikona tıklama (İleri)
sagIcon.addEventListener("click", function () {
  // Mevcut içeriği gizle
  icerikler[aktifIndex].classList.remove("active");

  // Bir sonraki içeriğe geç
  aktifIndex++;
  if (aktifIndex >= icerikler.length) {
    aktifIndex = 0; // Başa dön
  }

  // Yeni içeriği göster
  icerikler[aktifIndex].classList.add("active");
});

// Sol ikona tıklama (Geri)
solIcon.addEventListener("click", function () {
  // Mevcut içeriği gizle
  icerikler[aktifIndex].classList.remove("active");

  // Bir önceki içeriğe geç
  aktifIndex--;
  if (aktifIndex < 0) {
    aktifIndex = icerikler.length - 1; // Sona dön
  }

  // Yeni içeriği göster
  icerikler[aktifIndex].classList.add("active");
});
