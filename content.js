const targetVideoId = "At8v_Yc044Y"; // Replace with the specific video ID
const checkVideo = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const videoId = urlParams.get("v");

  if (videoId === targetVideoId) {
    chrome.runtime.sendMessage({ action: "muteTab" });
  }
};

// Listen for changes in the video URL
window.addEventListener("yt-navigate-finish", checkVideo);
checkVideo();  // Run on initial load