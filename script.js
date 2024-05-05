document.getElementById("kirimBtn").addEventListener("click", function () {
  var pesan = encodeURIComponent(document.getElementById("pesan").value);
  var nomor = document.getElementById("nomor").value;
  var url = "https://api.whatsapp.com/send?phone=" + nomor + "&text=" + pesan;
  window.location.href = url;
});
