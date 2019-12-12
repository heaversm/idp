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

let savedFrame; //will contain video image when pic taken

function handleImageLoaded(el){
  console.log(el);
}

function setup() {
  isSafa = isSafari();
  if (isSafa) {
    alert('Sorry we do not yet support your device, please open this page with Chrome on a desktop. We will support other devices in the near future!');
    return;
  }

  noCanvas();
  inputImg = select('#input-img').elt;

  // load models
  modelNames.forEach(n => {
    nets[n] = new ml5.TransformNet('models/' + n + '/', modelLoaded);
  });

  // Image uploader

  // output img container
  outputImgContainer = createImg('images/loading.gif', 'image');
  outputImgContainer.parent('output-img-container');

  allowFirefoxGetCamera();
}

// A function to be called when the model has been loaded
function modelLoaded() {
  modelNum++;
  if (modelNum >= modelNames.length) {
    modelReady = true;
    outputImgContainer.elt.src = 'images/checkmark.png';  
    //predictImg(currentModel);
    document.querySelector('.body-container').classList.add('loaded');
    $('.register__status').text('Click camera icon below to allow access');
  }
}

function predictVideo(modelName) {
  isLoading = true;
  if (!modelReady) return;
  outputImgData = nets[modelName].predict(video.elt);
  outputImg = ml5.array3DToImage(outputImgData);
  savedFrame = outputImg;
  outputImgContainer.elt.src = outputImg.src;
  isLoading = false;
  document.querySelector('.body-container').classList.remove('camera');
  document.querySelector('.body-container').classList.add('stylized');
  $('.register__status').text('Choose a style for your image. Then press print');
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

function draw() {
  if (modelReady && webcam && video && video.elt && start && !isDrawn) {
    isDrawn = true;
    //predictImg(currentModel);
    predictVideo(currentModel);
  }
}

function updateStyleImg(eleLink) {
  let ele = eleLink.querySelector('.image');
  document.querySelectorAll('.imageAnchor').forEach((styleLink,i)=>{
    if (styleLink.classList.contains('active')){
      styleLink.classList.remove('active');
    }
  });
  eleLink.classList.add('active');
  if (ele.src) {
    currentModel = ele.id;
  }
  if (currentModel && webcam) {
    //predictImg(currentModel);
    outputImgData = nets[currentModel].predict(savedFrame);
    outputImg = ml5.array3DToImage(outputImgData);
    outputImgContainer.elt.src = outputImg.src;
    isLoading = false;
    //isDrawn = false;
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
  outputImgContainer.addClass('reverse-img register__reverse_image');
  //onPredictClick();
  const isStylized = document.querySelector('.body-container').classList.contains('stylized');
  if (isStylized){
    document.querySelector('.body-container').classList.remove('stylized');
  }
  document.querySelector('.body-container').classList.add('camera');
  $('.register__status').text('Pose for the camera');
}

function deactiveWebcam() {
  start = false;
  select('#input-img').show();
  outputImgContainer.removeClass('reverse-img');
  webcam = false;
  if (video) {
    video.hide();
    video = '';
  }
}

function onPredictClick() {
  if (webcam) start = true;
  predictVideo(currentModel);
  //predictImg(currentModel);
}

function allowFirefoxGetCamera() {
  navigator.getUserMedia = ( navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia);
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

function onPrintClick(){
  window.location = "engage.html"
}

/**
* @param imgData Array3D containing pixels of a img
* @return p5 Image
*/
// function array3DToP5Image(imgData) {  
//   const imgWidth = imgData.shape[0];
//   const imgHeight = imgData.shape[1];
//   const data = imgData.dataSync();
//   const outputImg = createImage(imgWidth, imgHeight);
//   outputImg.loadPixels();
//   let k = 0;
//   for (let i = 0; i < outputImg.width; i++) {
//     for (let j = 0; j < outputImg.height; j++) {
//       k = (i + j * height) * 3;
//       let r = floor(256 * data[k + 0]);
//       let g = floor(256 * data[k + 1]);
//       let b = floor(256 * data[k + 2]);
//       let c = color(r, g, b);
//       outputImg.set(i, j, c);
//     }
//   }
//   outputImg.updatePixels();
//   return outputImg;
// }
