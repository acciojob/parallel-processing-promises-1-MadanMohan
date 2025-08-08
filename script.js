const output = document.getElementById("output");
const btn = document.getElementById("download-images-button");

const images = [
  { url: "https://picsum.photos/id/237/200/300" },
  { url: "https://picsum.photos/id/238/200/300" },
  { url: "https://picsum.photos/id/239/200/300" }
];

btn.addEventListener("click", () => {
  // Clear output first (optional)
  output.innerHTML = "";

  // Append all images
  images.forEach(imgData => {
    const img = document.createElement("img");
    img.src = imgData.url;
    output.appendChild(img);
  });
});
