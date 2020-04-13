function billify() {
  const images = document.querySelectorAll("img");

  images.forEach((image) => {
    const width = image.naturalWidth;
    const height = image.naturalHeight;
    image.setAttribute(
      "src",
      `https://www.fillmurray.com/${width || 500}/${height || 500}`
    );
  });
}

chrome.runtime.onMessage.addListener((request) => {
  switch (request) {
    case "on":
      return billify();
    case "off":
      return window.location.reload();
    default:
      break;
  }
});
