const NEXT_SCREEN_URL = 'barcode.html' //where to go after begin clicked
var tutorialActive = false; //when true, we are watching tutorial - disallow idle animation

//SOUND
var ambientSound = new Howl({
  src: ['audio/ambient1.mp3'],
  autoplay: true,
  loop: true,
  volume: 0.3,
});

var button1Sound = new Howl({
  src: ['audio/button1.mp3'],
});


var buttonCloseSound = new Howl({
  src: ['audio/button2.mp3'],
});

var soundBegin = new Howl({
  src: ['audio/warning.mp3'],
  volume: 0.5,
  onend: function () {
    window.location = NEXT_SCREEN_URL
  }
});

function init() {
  //initForceAnimation();
  $('#Home').removeClass('out');
  particlesJS.load('particles-js', 'data/particlesjs-config.json', function () {
    console.log('callback - particles.js config loaded');
  });

  canvas = document.getElementById("canvas");
  anim_container = document.getElementById("animation_container");
  dom_overlay_container = document.getElementById("dom_overlay_container");
  comp = AdobeAn.getComposition("D7D5DE1740A04999B0AB56BA8A4B3927");
  lib = comp.getLibrary();
  addListeners();
  handleInitComplete({}, comp);
  initBlob();
}

//Particles

//https://github.com/VincentGarreau/particles.js/issues/88
function stopParticles() {
  pJSDom[0].pJS.particles.move.enable = false;
}

function startParticles() {
  pJSDom[0].pJS.particles.move.enable = true;
  pJSDom[0].pJS.fn.particlesRefresh();
}

//Intro

const $introModal = $('.intro__modal_container');
const $introModalClose = $('.intro__modal_close');
let canvas, stage, exportRoot, anim_container, dom_overlay_container, fnStartAnimation, comp, lib, ss;




function initAnimation() {
  stage.addChild(exportRoot);
  createjs.Ticker.framerate = lib.properties.fps;
  createjs.Ticker.addEventListener("tick", stage);
  comp.getStage().seek(0);
  comp.getStage().stop();
}


function onIntroLinkClick(e) {
  e.preventDefault();
  button1Sound.play();
  $introModal.addClass('active');
  comp.getStage().play();
  tutorialActive = true;
  stopParticles();
  //stopPassiveAnimation();
  isIdle = false;
}

function addListeners() {
  $('.home__btn_intro').on('click', onIntroLinkClick);
  $('.home__btn_begin').on('click', onBeginClick);
  $introModal.on('click', handleCloseModal);
  $introModalClose.on('click', handleCloseModal);
}

function onBeginClick() {
  $('#Home').addClass('out');
  soundBegin.play();
}

function handleInitComplete(evt, comp) {
  //This function is always called, irrespective of the content. You can use the variable "stage" after it is created in token create_stage.
  lib = comp.getLibrary();
  ss = comp.getSpriteSheet();
  exportRoot = new lib.intro2x();
  stage = new lib.Stage(canvas);
  //Registers the "tick" event listener  
  //Code to support hidpi screens and responsive scaling.
  //AdobeAn.makeResponsive(true,'both',true,1,[canvas,anim_container,dom_overlay_container]);
  AdobeAn.makeResponsive(true, 'both', false, 1, [canvas, anim_container, dom_overlay_container]);
  AdobeAn.compositionLoaded(lib.properties.id);
  initAnimation();
}

//Page

function handleCloseModal() {
  comp.getStage().seek(0);
  comp.getStage().stop();
  $introModal.removeClass('active');
  tutorialActive = false;
  startParticles();
  isIdle = true;
  buttonCloseSound.play();
}

let mainTimeline;

function initStageListener(){
  mainTimeline = stage.children[0].timeline;
  mainTimeline.addEventListener("change", onAnimatingMainTimeline);
}

function onAnimatingMainTimeline() {
  if (mainTimeline.position == mainTimeline.duration) {
    handleCloseModal();
  }
}

$(window).load(() => {
  init();
  initStageListener();
});