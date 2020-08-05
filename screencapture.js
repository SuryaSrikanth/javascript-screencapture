// const gdmOptions = {
//     video: {
//       cursor: "always"
//     },
//     audio: {
//       echoCancellation: true,
//       noiseSuppression: true,
//       sampleRate: 44100
//     }
// }

async function startCapture(options, videoele) {
  videoele.srcObject = null;
  try {
    videoele.srcObject = await navigator.mediaDevices.getDisplayMedia(options);
  } catch (err) {
    window.alert(err);
  }
}
function stopCapture(videoElem) {
  let tracks = videoElem.srcObject.getTracks();

  tracks.forEach((track) => track.stop());
  videoElem.srcObject = null;
}

function OptionsInfo() {
  const videoTrack = videoElem.srcObject.getVideoTracks()[0];
  console.info("Track settings:");
  console.info(JSON.stringify(videoTrack.getSettings(), null, 2));
  console.info("Track constraints:");
  console.info(JSON.stringify(videoTrack.getConstraints(), null, 2));
}
