/*
===
Fast Style Transfer Simple Demo
===
*/

let nets = {};
let modelNames = ['la_muse', 'rain_princess', 'udnie', 'wreck', 'scream', 'wave', 'mathura', 'fuchun', 'zhangdaqian'];
let inputImg;
let outputImgData;
let outputImg;
let modelNum = 0;
let currentModel = 'wave';
let webcam = false;
let modelReady = false;
let video;
let start = false;
let isSafa = false;

let $bodyContainer = $('.register__body_container');
let $status = $('.register__status');
let $printButton = $('.register__print_button');
let hasDownloaded = false;

let frameCount = 0;
let firstFrame = true;

const OUTRO_DELAY = 3000;
const USE_REALTIME = true;
const VIDEO_SIZE = 128;
const FRAME_SKIP = 10;
const SHOW_STYLIZED_DELAY = 5000;


let savedFrame; //will contain video image when pic taken

const urlParams = new URLSearchParams(window.location.search);
const style = urlParams.get('style');

const registerContent = {
  noSafari: "Sorry we do not yet support your device, please open this page with Chrome on a desktop. We will support other devices in the near future!",
  allowCamera: "Click camera icon below to allow access",
  poseText: "Pose for the camera",
  predictText: "Hold still! This could take a minute",
  savingText: "Saving image to server",
}



function setup() {
  isSafa = isSafari();
  if (isSafa) {
    alert(registerContent.noSafari);
    return;
  }

  noCanvas();
  inputImg = select('#input-img').elt;
  nets[0] = new ml5.TransformNet('models/' + style + '/', modelLoaded);
  outputImgContainer = createImg('images/loading.gif', 'image'); //has to do this for some reason for p5 to initialize
  outputImgContainer.parent('output-img-container');

  allowFirefoxGetCamera();
}

function modelLoaded() {
  modelReady = true;
  $bodyContainer.addClass('loaded');
  const hasAllowedCamera = localStorage.getItem("allowedCamera");
  console.log('allowCamera', hasAllowedCamera);
  if (!hasAllowedCamera) {
    $status.text(registerContent.allowCamera);
  } else {
    console.log('use webcam');
    useWebcam();
  }

}

function predictVideo(modelName) {
  if (!modelReady) return;
  outputImgData = nets[0].predict(video.elt);
  outputImg = ml5.array3DToImage(outputImgData);
  savedFrame = outputImg;
  if (firstFrame){
    $bodyContainer.addClass('stylized');
    firstFrame = false;
  }
  outputImgContainer.elt.src = outputImg.src;

}



function draw() {
  //console.log(modelReady,webcam,video,start,isDrawn);
  
  if (modelReady && webcam && video && video.elt && start) {
    frameCount++;
    if (frameCount % FRAME_SKIP === 0){ //SKIP every nth frame for performance
      predictVideo(currentModel);
    }
    
  }
}

function onWebcamClick() {
  localStorage.setItem("allowedCamera", true);
  useWebcam();
}


function useWebcam() {
  if (!video) {
    // webcam video
    video = createCapture(VIDEO);
    video.size(VIDEO_SIZE, VIDEO_SIZE);
    video.parent('input-source');
  }
  webcam = true;
  select('#input-img').hide();
  outputImgContainer.addClass('register__reverse_image');
  $status.text(registerContent.poseText);
  start = true;
}

function deactiveWebcam() {
  start = false;
  webcam = false;
  if (video) {
    video.hide();
    video = '';
  }
}

function onPredictClick() { //use the photo

  if (webcam) {
    deactiveWebcam();
    $('.register__print_button').attr('href', outputImg.src); //MH
    //isLoading = false;
    $bodyContainer.removeClass('camera processing').addClass('stylized');
    $status.text(registerContent.savingText);
    setTimeout(() => {
      handleOutro();
    }, OUTRO_DELAY);

  } else {
    console.log('no webcam found');
  }

}

function allowFirefoxGetCamera() {
  navigator.getUserMedia = (navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia);
}

function isSafari() {
  var ua = navigator.userAgent.toLowerCase();
  if (ua.indexOf('safari') != -1) {
    if (ua.indexOf('chrome') > -1) {
      return false;
    } else {
      return true;
    }
  }
}

function handleOutro() {
  if (!hasDownloaded){ //prevent multiple downloads
    hasDownloaded = true;
    $('.register__print_button')[0].click();
    uploadToCloudStorage();
  }
  
}

function generateFilename() {
  var d = new Date().getTime();
  if (typeof performance !== 'undefined' && typeof performance.now === 'function') {
    d += performance.now(); //use high-precision timer if available
  }
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    var r = (d + Math.random() * 16) % 16 | 0;
    d = Math.floor(d / 16);
    return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
  });
}

function dataURLtoBlob(dataurl) {
  var arr = dataurl.split(','), mime = arr[0].match(/:(.*?);/)[1],
    bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }
  return new Blob([u8arr], { type: mime });
}


function uploadToCloudStorage() {
  //FIREBASE 

  const chosenModel = sessionStorage.getItem('chosenModel');
  const chosenCollective = sessionStorage.getItem('chosenCollective');
  const barcode = sessionStorage.getItem('barcode');

  let userMetadata = {
    "chosenModel": chosenModel ? chosenModel : '',
    "chosenCollective": chosenCollective ? chosenCollective : '',
    "barcode": barcode ? barcode : ''
  }

  const metadata = {
    contentType: 'image/jpeg',
    customMetadata: userMetadata,
  };

  outputImg.crossOrigin = 'anonymous';
  filename = generateFilename();

  let uploadImage = dataURLtoBlob(outputImg.src);

  const uploadTask = storageRef.child(`images/${filename}`).put(uploadImage, metadata); //create a child directory called images, and place the file inside this directory
  uploadTask.on('state_changed', (snapshot) => {
    console.log(snapshot);
    // Observe state change events such as progress, pause, and resume
  }, (error) => {
    // Handle unsuccessful uploads
    console.log(error);
  }, () => {
    // Do something once upload is complete
    console.log('upload complete');
    goToNextScreen();
  });

}

function goToNextScreen() {
  $bodyContainer.addClass('outro');
  setTimeout(() => {
    //window.location = "engage.html"
  }, 1000);
}