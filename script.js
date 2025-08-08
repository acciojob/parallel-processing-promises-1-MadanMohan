const output = document.getElementById("output");
const btn = document.getElementById("download-images-button");

const images = [
  { url: "https://picsum.photos/id/237/200/300" },
  { url: "https://picsum.photos/id/238/200/300" },
  { url: "https://picsum.photos/id/239/200/300" },
];

// Helper to download an image
function downloadImage(url) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.src = url;
    img.onload = () => resolve(img);
    img.onerror = () => reject(`Failed to load image: ${url}`);
  });
}

// Main download function
function downloadImages() {
  output.innerHTML = `<p id="loading">⏳ Loading...</p>`; // show loading text

  Promise.all(images.map(imgObj => downloadImage(imgObj.url)))
    .then(loadedImages => {
      output.innerHTML = ""; // clear loading
      loadedImages.forEach(img => output.appendChild(img));
    })
    .catch(err => {
      output.innerHTML = `<p id="error" style="color:red;">${err}</p>`;
    });
}

// Trigger download on button click
btn.addEventListener("click", downloadImages);
