var tutorialActive = false; //when true, we are watching tutorial - disallow idle animation

//Particles

//https://github.com/VincentGarreau/particles.js/issues/88
function stopParticles(){
  pJSDom[0].pJS.particles.move.enable = false;
}

function startParticles(){
  pJSDom[0].pJS.particles.move.enable = true;
  pJSDom[0].pJS.fn.particlesRefresh();
}

//Intro

const $introModal = $('.intro__modal_container');
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
  $introModal.addClass('active');
  comp.getStage().play();
  tutorialActive = true;
  stopParticles();
  //stopPassiveAnimation();
  isIdle = false;
}

function init() {
  //initForceAnimation();
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
}

function addListeners(){
  $('.home__btn_intro').on('click', onIntroLinkClick);
  $introModal.on('click', handleCloseModal);
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
}


$(window).load(() => {
  init();
});