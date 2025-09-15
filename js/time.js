
function updateTime() { 
  const now = new Date();
  const clock = document.getElementById("clock");
  if (clock) {
    clock.textContent = now.toLocaleTimeString();
  }
}
setInterval(updateTime, 1000);
updateTime();


document.addEventListener("DOMContentLoaded", () => {
  const hospitals = [
    { name: "250 Bedded General Hospital, Pabna", link: "https://hospital.pabna.gov.bd/" },
    { name: "LabAid Diagnostic Pabna", link: "https://www.labaiddiagnostics.com/branch/details/pabna" },
    { name: "Shimla Hospital, Pabna", link: "https://www.doctorspedia.co/hospital/shimla-hospital-pabna" },
    { name: "Pabna Diabetic Hospital", link: "local/pabna-diabetic.html" }
  ];

  const list = document.getElementById("hospitalList");
  const frameDiv = document.getElementById("hospitalFrame");
  const iframe = document.getElementById("frame");

  if (list) {
    list.innerHTML = hospitals.map(h => `
      <div class="card">
        <h3>${h.name}</h3>
        <a class="btn" href="#" onclick="openHospital('${h.link}');return false;">Visit Website</a>
      </div>
    `).join("");
  }

  window.openHospital = function(url) {
    list.style.display = "none";
    frameDiv.style.display = "block";
    iframe.src = url;
  };
}); 


function changeBackground(color) {
  document.body.style.background = color;
}
