const mapDiv = document.getElementById("map");

if (mapDiv) {
  const lat = parseFloat(mapDiv.dataset.lat);
  const lng = parseFloat(mapDiv.dataset.lng);

  if (isNaN(lat) || isNaN(lng)) {
    console.error("Invalid coordinates");
  }

  var map = L.map('map').setView([lat, lng], 10);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap'
  }).addTo(map);

  L.marker([lat, lng])
    .addTo(map)
    .bindPopup(`
      <div style="text-align:center;">
        <h3 style="margin:5px 0;">Jaipur, Rajasthan</h3>
        <p style="margin:0; font-size:12px; color:gray;">
          Exact location will be provided after booking
        </p>
      </div>
    `)
    marker.on('mouseover', function () {
        this.openPopup();
      });
      
      marker.on('mouseout', function () {
        this.closePopup();
      });
}




