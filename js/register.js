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

const regsiterContent = {
  noSafari: "Sorry we do not yet support your device, please open this page with Chrome on a desktop. We will support other devices in the near future!",
  allowCamera: "Click camera icon below to allow access",
  chooseStyle: "Choose a style for your image. Then press print",
  loadingStyle: "Loading new style...",
  poseText: "Pose for the camera",
  predictText: "Hold still! This could take a minute"
}


function setup() {
  isSafa = isSafari();
  if (isSafa) {
    alert(regsiterContent.noSafari);
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
  outputImgContainer = createImg('images/loading.gif', 'image'); //TODO - remove this stuff
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
    $bodyContainer.addClass('loaded');
    $status.text(regsiterContent.allowCamera);
  }
}

function predictVideo(modelName) {
  isLoading = true;
  if (!modelReady) return;
  outputImgData = nets[modelName].predict(video.elt);
  outputImg = ml5.array3DToImage(outputImgData);
  savedFrame = outputImg;
  outputImgContainer.elt.src = outputImg.src;
  $('.register__print_button').attr('href',outputImg.src); //MH
  isLoading = false;
  $bodyContainer.removeClass('camera processing').addClass('stylized');
  $status.text(regsiterContent.chooseStyle);
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

function updateStyleImg(eleLink) {
  let ele = eleLink.querySelector('.register__style_image');
  $printButton.attr('disabled','disabled');
  $bodyContainer.addClass('processing');
  document.querySelectorAll('.register__image_anchor').forEach((styleLink,i)=>{
    if (styleLink.classList.contains('active')){
      styleLink.classList.remove('active');
    }
  });
  eleLink.classList.add('active');
  $status.text(regsiterContent.loadingStyle);

  setTimeout(()=>{ //timeout necessary because process bogs down any style setting
    if (ele.src) {
      currentModel = ele.id;
    }
    if (currentModel && webcam) {
      //predictImg(currentModel);
      outputImgData = nets[currentModel].predict(savedFrame);
      outputImg = ml5.array3DToImage(outputImgData);
      outputImgContainer.elt.src = outputImg.src;
      
      $('.register__print_button').attr('href',outputImg.src); //MH

      isLoading = false;
      //isDrawn = false;
      $status.text(regsiterContent.chooseStyle);
      $bodyContainer.removeClass('processing');
      $printButton.removeAttr('disabled');
    }
  },510);

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
  if (isStylized){
    $bodyContainer.removeClass('stylized');
  }
  $bodyContainer.addClass('camera');
  $status.text(regsiterContent.poseText);
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

  if (webcam){
    $status.text(regsiterContent.predictText);
    $bodyContainer.addClass('processing');
    video.pause();
    setTimeout(()=>{ //timeout necessaru tp prevent processing from blocking 
      predictVideo(currentModel);
    },1000);
    
  } else {
    console.log('no webcam found');
  }
  
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
  $bodyContainer.addClass('outro');
  setTimeout(()=>{
    window.location = "engage.html"
  },1000);
  
  //window.location.href = outputImg.src.replace('image/png', 'image/octet-stream'); //MH - also works but doesn't add extension or naming options

}
