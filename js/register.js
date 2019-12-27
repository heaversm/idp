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
let isLoading = true;
let isSafa = false;
let isDrawn = false;
let videoSize = 500;
let $bodyContainer = $('.register__body_container');
let $status = $('.register__status');
let $printButton = $('.register__print_button');

let savedFrame; //will contain video image when pic taken

const urlParams = new URLSearchParams(window.location.search);
const style = urlParams.get('style');

const registerContent = {
  noSafari: "Sorry we do not yet support your device, please open this page with Chrome on a desktop. We will support other devices in the near future!",
  allowCamera: "Click camera icon below to allow access",
  chooseStyle: "Click the button below to proceed",
  loadingStyle: "Loading new style...",
  poseText: "Pose for the camera",
  predictText: "Hold still! This could take a minute"
}



function setup() {
  isSafa = isSafari();
  if (isSafa) {
    alert(registerContent.noSafari);
    return;
  }

  noCanvas();
  inputImg = select('#input-img').elt;

  // load models
  // modelNames.forEach(n => {
  //   nets[n] = new ml5.TransformNet('models/' + n + '/', modelLoaded);
  // });

  //load model from URL param:
  nets[0] = new ml5.TransformNet('models/' + style + '/', modelLoaded);

  // Image uploader

  // output img container
  outputImgContainer = createImg('images/loading.gif', 'image'); //TODO - remove this stuff
  outputImgContainer.parent('output-img-container');

  allowFirefoxGetCamera();
}

// A function to be called when the model has been loaded
function modelLoaded() {
  modelReady = true;
  outputImgContainer.elt.src = 'images/checkmark.png';
  //predictImg(currentModel);
  $bodyContainer.addClass('loaded');
  $status.text(registerContent.allowCamera);
}

function predictVideo(modelName) {
  isLoading = true;
  if (!modelReady) return;
  outputImgData = nets[0].predict(video.elt);
  outputImg = ml5.array3DToImage(outputImgData);
  savedFrame = outputImg;
  outputImgContainer.elt.src = outputImg.src;
  $('.register__print_button').attr('href', outputImg.src); //MH
  isLoading = false;
  $bodyContainer.removeClass('camera processing').addClass('stylized');
  $status.text(registerContent.chooseStyle);
}

function predictImg(modelName) {
  isLoading = true;
  if (!modelReady) return;
  if (webcam && video) {
    outputImgData = nets[modelName].predict(video.elt);
  } else if (inputImg) {
    outputImgData = nets[modelName].predict(inputImg);
  }
  outputImg = ml5.array3DToImage(outputImgData);
  outputImgContainer.elt.src = outputImg.src;
  isLoading = false;
}

function draw() { //TODO: remove?

  if (modelReady && webcam && video && video.elt && start && !isDrawn) {
    isDrawn = true;
    //predictImg(currentModel);
    predictVideo(currentModel);
  }
}

function updateInputImg(ele) {
  deactiveWebcam();
  if (ele.src) inputImg.src = ele.src;
  predictImg(currentModel);
}

function uploadImg() {
  uploader.click();
  deactiveWebcam();
}

function useWebcam() {
  if (!video) {
    // webcam video
    video = createCapture(VIDEO);
    video.size(videoSize, videoSize);
    video.parent('input-source');
  }
  webcam = true;
  select('#input-img').hide();
  outputImgContainer.addClass('register__reverse_image');
  const isStylized = $bodyContainer.hasClass('stylized');
  if (isStylized) {
    $bodyContainer.removeClass('stylized');
  }
  $bodyContainer.addClass('camera');
  $status.text(registerContent.poseText);
}

function deactiveWebcam() {
  start = false;
  select('#input-img').show();
  outputImgContainer.removeClass('register__reverse_image');
  webcam = false;
  if (video) {
    video.hide();
    video = '';
  }
}

function onPredictClick() {

  if (webcam) {
    $status.text(registerContent.predictText);
    $bodyContainer.addClass('processing');
    video.pause();
    setTimeout(() => { //timeout necessaru tp prevent processing from blocking 
      predictVideo(currentModel);
    }, 1000);

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

function onPrintClick() {
  $bodyContainer.addClass('outro');
  setTimeout(() => {
    window.location = "engage.html"
  }, 1000);

  //window.location.href = outputImg.src.replace('image/png', 'image/octet-stream'); //MH - also works but doesn't add extension or naming options

}
