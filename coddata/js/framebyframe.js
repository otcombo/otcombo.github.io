var frameNumber = 0, // start video at frame 0
  // lower numbers = faster playback
  playbackConst = window.outerHeight * 1.2,
  // get page height from video duration
  setHeight = document.getElementById("set-height"),
  // select video element
  vid = document.getElementById('video-os7-kv');
// var vid = $('#video-os7-kv')[0]; // jquery option

// dynamically set the page height according to video length
vid.addEventListener('loadedmetadata', function() {
  setHeight.style.height = Math.floor(vid.duration) * playbackConst + window.outerHeight * 1.2 + "px";
});


// Use requestAnimationFrame for smooth playback
function scrollPlay() {
  var frameNumber = window.pageYOffset / playbackConst;
  vid.currentTime = frameNumber;
  window.requestAnimationFrame(scrollPlay);
}

window.requestAnimationFrame(scrollPlay);