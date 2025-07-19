const message = `Halo Nita, aku seneng bisa kenal kamu dan mabar sama kamu siang ini.\n\nAku mau kasih tau kamu duniaku...\n\nDunia aku terlalu sempit dan jarang orang bisa kenal aku lebih jauh.\n\n Aku harap datangnya kamu bukan cuma sementara karena aku juga butuh someone to talk. \n\nAku juga seneng kalo bisa dapet temen mabar dan selalu contact-an.\n\nJadi, kamu bisa hubungin aku kapanpun kamu butuh, aku mau jadi apapun yg kamu butuhin nantinya.`;

function showLetter() {
   const music = document.getElementById("bgMusic");
        music.play();
  document.getElementById("introText").style.opacity = 0;
  document.querySelector(".btn").style.display = "none";

  setTimeout(() => {
    const letterBox = document.getElementById("letterBox");
    const typedText = document.getElementById("typedText");
    letterBox.style.display = "block";
    let i = 0;

    function typeWriter() {
      if (i < message.length) {
        typedText.innerHTML += message.charAt(i) === '\n' ? '<br>' : message.charAt(i);
        i++;
        setTimeout(typeWriter, 50);
      } else {
        // Setelah selesai ketik, tampilkan tombol WhatsApp
        showWhatsAppButton();
      }
    }

    typeWriter();
  }, 100);
}

 showInstagramButton();
}
