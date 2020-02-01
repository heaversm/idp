let outputImgData;
let outputImg;
let modelNum = 0;
let currentModel = 'wave';

let $bodyContainer = $('.register__body_container');
let $status = $('.register__status');
let $printButton = $('.register__print_button');
let hasDownloaded = false;

let frameCount = 0;
let firstFrame = true;

//CONSTANTS
const OUTRO_DELAY = 3000;
//const VIDEO_SIZE = 128;
const FRAME_SKIP = 0;
const SHOW_STYLIZED_DELAY = 5000;

//URL PARAMS
const urlParams = new URLSearchParams(window.location.search);
const style = urlParams.get('style');


let savedFrame; //will contain video image when pic taken


//NEW STUFF

let hiddenCanvas = null;
let hiddenContext = null;
let start = null;
let styleEnabled = false;
let resultImg, $resultImg;
let hasEnabledCam = false;
let modelStyleLoaded = false;
let modelTransformerLoaded = false;

//NEW STUFF I ADDED
const USE_HIRES = true;

//NEW STUFF W/ "this."
let modelSelectStyle;
let styleNet, transformNet, mobileStyleNet, inceptionStyleNet, originalTransformNet, separableTransformNet; //inception or mobilenet

let snapButton, webcamVideoElement, stream;
let contentImg, contentImgSlider, styleImg, styleImgSlider, styleImgSquare, stylized, styleRatioSlider, styleButton;
let styleRatio = 1.0;


const registerContent = {
  allowCamera: "Click camera icon below to allow access",
  poseText: "Pose for the camera",
  predictText: "Hold still! This could take a minute",
  savingText: "Saving image to server",
}

function setup() {
  allowFirefoxGetCamera();
  setDOMReferences();
  loadModelDependencies();
  //TODO: eventually trigger modelLoaded(?)

}

function setDOMReferences() {
  //TODO:
  snapButton = document.getElementById('snap-button');
  webcamVideoElement = document.getElementById('webcam-video');
  hiddenCanvas = document.getElementById('hidden-canvas');
  contentImg = document.getElementById('content-img');
  stylized = document.getElementById('stylized');
  styleImg = document.getElementById('style-img');
  styleButton = document.getElementById('style-button');

}

function stopWebcam() {
  stream.getTracks()[0].stop();
}

function loadModelDependencies() {
  if (USE_HIRES) {
    Promise.all([
      loadInceptionStyleModel(),
      loadOriginalTransformerModel(),
    ]).then(modelDependenciesLoaded);

  } else { //LOW RES
    Promise.all([
      loadMobileNetStyleModel(),
      loadSeparableTransformerModel(),
    ]).then(modelDependenciesLoaded);
  }
}

function modelDependenciesLoaded([styleNetRef, transformNetRef]) {
  console.log(styleNetRef, transformNetRef)
  styleNet = styleNetRef;
  transformNet = transformNetRef;
  console.log('model dependencies loaded');
  startWebcam();
  setupCamImage();
  initializeStyleTransfer();
  handleFinalInit();
}

function startWebcam() {
  navigator.getUserMedia(
    {
      video: true
    },
    (stream) => {
      stream = stream;
      webcamVideoElement.srcObject = stream;
      webcamVideoElement.play();
    },
    (err) => {
      console.error(err);
    }
  );
}

function setupCamImage() {
  hiddenContext = hiddenCanvas.getContext('2d');
  hiddenCanvas.width = webcamVideoElement.width;
  hiddenCanvas.height = webcamVideoElement.height;
}

function initializeStyleTransfer() {

  contentImg.onerror = () => {
    alert("Error loading " + contentImg.src + ".");
  }

  styleImg.onerror = () => {
    alert("Error loading " + styleImg.src + ".");
  }

  // Initialize buttons
  styleButton.onclick = () => { //WHEN YOU CLICK THE CAMERA
    if (!hasEnabledCam) {
      sessionStorage.setItem('allowCam', true);
      //$(styleButton).hide();
      setStyleImage();
      initializeAF();
      handleStylize();
      //TODO: fix this logic and tie with existing experience
    }
  };

}

function setStyleImage() {
  //TODO: pull from URL params...
  // const randomNumber = Math.floor(Math.random() * links.length);
  // styleImg.src = links[randomNumber];
  console.log('set image');
  //TODO: set to params from URL
}

function handleStylize() {
  styleEnabled = true;
  startStyling().finally(() => {
    styleEnabled = true;
  });
}

function handleFinalInit(){
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

function initializeAF() {
  resultImg = new Image(100, 200);
  $resultImg = $(resultImg);
  $resultImg.hide();
  window.requestAnimationFrame((timestamp) => {
    draw(timestamp);
  });
}

async function startStyling() {
  //TODO:
  styleEnabled = false;
  await tf.nextFrame();
  await tf.nextFrame(); //TODO: do we need this twice?
  let bottleneck = await tf.tidy(() => {
    return styleNet.predict(tf.browser.fromPixels(styleImg).toFloat().div(tf.scalar(255)).expandDims());
  });
  if (styleRatio !== 1.0) {
    //this.styleButton.textContent = 'Generating 100D identity style representation';
    await tf.nextFrame();
    const identityBottleneck = await tf.tidy(() => {
      return styleNet.predict(tf.browser.fromPixels(contentImg).toFloat().div(tf.scalar(255)).expandDims());
    })
    const styleBottleneck = bottleneck;
    bottleneck = await tf.tidy(() => {
      const styleBottleneckScaled = styleBottleneck.mul(tf.scalar(styleRatio));
      const identityBottleneckScaled = identityBottleneck.mul(tf.scalar(1.0 - styleRatio));
      return styleBottleneckScaled.addStrict(identityBottleneckScaled)
    })
    styleBottleneck.dispose();
    identityBottleneck.dispose();
  }
  await tf.nextFrame();
  const stylizedRef = await tf.tidy(() => {
    return transformNet.predict([tf.browser.fromPixels(contentImg).toFloat().div(tf.scalar(255)).expandDims(), bottleneck]).squeeze();
  })
  await tf.browser.toPixels(stylizedRef, stylized);
  bottleneck.dispose();  // Might wanna keep this around
  stylizedRef.dispose();
}

function renderCamImage() {
  //TODO:
}

function draw(timestamp) {
  if (!start) {
    start = timestamp;
  }
  let progress = timestamp - start;
  window.requestAnimationFrame((timestamp) => {
    draw(timestamp);
  });
  if (styleEnabled) {
    renderCamImage();
    startStyling().finally(() => {
      styleEnabled = true;
    });
  }
}


async function loadMobileNetStyleModel() {
  if (!mobileStyleNet) {
    mobileStyleNet = await tf.loadGraphModel(
      'models/saved_model_style_js/model.json');
  }

  return mobileStyleNet;
}

async function loadInceptionStyleModel() {
  if (!inceptionStyleNet) {
    inceptionStyleNet = await tf.loadGraphModel(
      'models/saved_model_style_inception_js/model.json');
  }

  return inceptionStyleNet;
}

async function loadOriginalTransformerModel() {
  if (!originalTransformNet) {
    originalTransformNet = await tf.loadGraphModel(
      'models/saved_model_transformer_js/model.json'
    );
  }

  return originalTransformNet;
}

async function loadSeparableTransformerModel() {
  if (!separableTransformNet) {
    separableTransformNet = await tf.loadGraphModel(
      'models/saved_model_transformer_separable_js/model.json'
    );
  }

  return separableTransformNet;
}


function modelLoaded() { //TODO: tie in to this from arbitrary
  $bodyContainer.addClass('loaded');
  const hasAllowedCamera = localStorage.getItem("allowedCamera");
  if (!hasAllowedCamera) {
    $status.text(registerContent.allowCamera);
  } else {
    console.log('use webcam');
    //TODO: start using webcam (draw?)
  }

}

function predictVideo(modelName) {
  if (!modelReady) return;
  if (firstFrame) {
    $bodyContainer.addClass('stylized');
    firstFrame = false;
  }
  //TODO: do prediction
}



function draw() {
  frameCount++;
  if (frameCount % FRAME_SKIP === 0) { //SKIP every nth frame for performance
    //TODO: predictVideo(?)
  }
}

function onWebcamClick() {
  localStorage.setItem("allowedCamera", true);
  useWebcam();
}


function useWebcam() {
  //TODO: if no cam, initialize cam

  webcam = true;
  //$('#input-img').hide();
  //outputImgContainer.addClass('register__reverse_image');
  $status.text(registerContent.poseText);
  start = true;
}

function deactiveWebcam() {
  start = false;
  webcam = false;
  // if (video) {
  //   video.hide();
  //   video = '';
  // }
}

function onPredictClick() { //TODO: use the photo, print it, do outro

  if (webcam) {
    deactiveWebcam();
    //$('.register__print_button').attr('href', outputImg.src); //MH
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

function handleOutro() {
  if (!hasDownloaded) { //prevent multiple downloads
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