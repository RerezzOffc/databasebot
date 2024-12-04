document.getElementById("configForm").addEventListener("submit", function (e) {
  e.preventDefault();

  // Mengambil data dari form
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const konek = document.getElementById("konek").value;
  const salurann = document.getElementById("salurann").value;
  const gcbottt = document.getElementById("gcbottt").value;

  // Membuat objek konfigurasi
  const config = {
    username,
    password,
    konek,
    salurann,
    gcbottt,
  };

  // Mengirim konfigurasi ke API (menggunakan fetch)
  fetch("https://example.com/api/config", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(config),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.success) {
        document.getElementById("responseMessage").textContent =
          "Configuration updated successfully!";
        document.getElementById("responseMessage").style.color = "green";
      } else {
        document.getElementById("responseMessage").textContent =
          "Failed to update configuration!";
        document.getElementById("responseMessage").style.color = "red";
      }
    })
    .catch((error) => {
      console.error("Error:", error);
      document.getElementById("responseMessage").textContent =
        "Error: Unable to reach the server.";
      document.getElementById("responseMessage").style.color = "red";
    });
});
