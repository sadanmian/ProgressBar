const progress = document.querySelector(".progress");
const loading = document.querySelector(".loading");

let i = 0;
const fakeUploadPerc = [];
for (let j = 0; j <= 100; j++) {
  fakeUploadPerc.push(j);
}

const interval = setInterval(() => {
  progress.style.width = `${fakeUploadPerc[i]}%`;
  loading.innerHTML = `${fakeUploadPerc[i]}%`;
  i++;
  if (i > fakeUploadPerc.length) {
    clearInterval(interval);
    loading.innerHTML = "Completed";
  }
}, 100);
