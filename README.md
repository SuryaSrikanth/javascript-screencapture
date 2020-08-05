# javascript-screencapture
Javascript code that captures user's screen or a single browser tab or window.
Site at: https://suryasrikanth.github.io/javascript-screencapture/

The Code only contains two  functions:
1) startCapture(options, Video Element):
   options attribute is a javascript obect of th following format:
//  {
//     video: {
//       cursor: "always"
//     },
//     audio: {
//       echoCancellation: true,
//       noiseSuppression: true,
//       sampleRate: 44100
//     }
// }
    cursor value can be always, motion or never.
    
    Video Element takes a video element.
    Use Javascript to get the video element and pass it here.
    
2. stopCapture(Video Element):
   Only takes in Video element. 
