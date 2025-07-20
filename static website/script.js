document.getElementById("contactButton").addEventListener("click", function() {
  alert("Thank you for your interest! I will get back to you soon.");
});

document.getElementById("downloadButton").addEventListener("click", function() {
  html2canvas(document.querySelector("#businessCard")).then(canvas => {
      const link = document.createElement('a');
      link.download = 'virtual_business_card.png';
      link.href = canvas.toDataURL('image/png');
      link.click();
  });
});
