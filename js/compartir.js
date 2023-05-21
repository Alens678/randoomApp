function captureAndShare() {
    html2canvas(document.body).then(function(canvas) {
      const imageUrl = canvas.toDataURL('image/png');
      showShareDialog(imageUrl);
    });
  }
  
  function showShareDialog(imageUrl) {
    const currentUrl = window.location.href;
  
    const facebookUrl = 'https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(currentUrl);
    const instagramUrl = 'https://www.instagram.com/share?url=' + encodeURIComponent(currentUrl);
    const whatsappUrl = 'whatsapp://send?text=' + encodeURIComponent(currentUrl);
  
    const shareDialog = window.open('', 'Compartir en redes sociales', 'width=600,height=400');
    shareDialog.document.write(`
      <h2>Compartir en redes sociales</h2>
      <button onclick="window.open('${facebookUrl}', '_blank')">Facebook</button>
      <button onclick="window.open('${instagramUrl}', '_blank')">Instagram</button>
      <button onclick="window.open('${whatsappUrl}', '_blank')">WhatsApp</button>
      <img src="${imageUrl}" alt="Captura de pantalla">
    `);
  }
  