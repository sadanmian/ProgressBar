const progress = document.querySelector(".progress");
const loading = document.querySelector(".loading");

let i = 0;
const fakeUploadPerc = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

const interval = setInterval(() => {
  progress.style.width = `${fakeUploadPerc[i]}%`;
  loading.innerHTML = `${fakeUploadPerc[i]}%`;
  i++;
  if (i > fakeUploadPerc.length) {
    clearInterval(interval);
    loading.innerHTML = "Completed";
  }
}, 1000);
