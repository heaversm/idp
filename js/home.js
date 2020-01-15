
var isIdle = true; //when true, trigger passive animation
var idleAF; //the request animation frame for the idle animation
var idleTimeout; //the timeout that stops the idle animation from playing after the specified configObj.idlePlayTime amount
var idleTime; //the idle timestamp received in the request animation frame - this helps us know how long the animation has been playing and run our oscillator / raf throttling
var lastProgress, progress; //keeps track of time between animation calls in the request animation frame
var diff; //keeps track of the difference between last progress and current progress in idle animation
var iterationTimeout; //holds the timer to restart the idle animation - while this is running, we don't do any idle
var tutorialActive = false; //when true, we are watching tutorial - disallow idle animation

var ww,wh,wcx,wcy //window width,height,center of screen x, center of screen y

configObj = {
  idlePlayTime: 10000,
  idleIterationDelayTime: 30000,
  idleThrottleTime: 250,
  idleAmplitude: 150,
  idleAmpVariance: 50,
  idlePeriod: 2000,
  forceCenter: .5,
}

var randomNumber = function(min,max){ //create random integer
  return Math.floor(Math.random()*(max-min+1)+min);
}

var startPassiveAnimation = function () {
  clearTimeout(iterationTimeout);
  clearTimeout(idleTimeout);
  cancelAnimationFrame(idleAF);
  idleAF = requestAnimationFrame(setRandomPosition);
  idleTimeout = setTimeout(function () {
    stopPassiveAnimation(true);
  }, configObj.idlePlayTime);
}

var stopPassiveAnimation = function (restart) {
  root.px = wcx;
  root.py = wcy;
  clearTimeout(idleTimeout);
  cancelAnimationFrame(idleAF);
  clearTimeout(iterationTimeout);
  if (isIdle) {
    iterationTimeout = setTimeout(startPassiveAnimation, configObj.idleIterationDelayTime);
  }
}

var setRandomPosition = function (timestamp) { //we are manually moving the center of the force to scatter the circles based on an oscillator
  if (isIdle) {
    if (!idleTime) {
      idleTime = timestamp;
    }
    if (!lastProgress) {
      lastProgress = 0;
    }

    var progress = timestamp - idleTime;
    diff = progress - lastProgress;

    if (diff > configObj.idleThrottleTime) {
      lastProgress = progress;

      var nextAmp = randomNumber(configObj.idleAmplitude - configObj.idleAmpVariance, configObj.idleAmplitude + configObj.idleAmpVariance);
      var nextX = nextAmp * Math.sin(progress * 2 * Math.PI / configObj.idlePeriod) + wcx;
      var nextY = nextAmp * Math.cos(progress * 2 * Math.PI / configObj.idlePeriod) + (wh * configObj.forceCenter);
      root.px = nextX
      root.py = nextY
      force.resume();
    }

    idleAF = requestAnimationFrame(setRandomPosition);

  }
}

var width = window.innerWidth,
  height = window.innerHeight,
  numCircles = 100,
  minCircleSize = 4,
  maxCircleSize = 12,
  circleDark = d3.rgb(22, 220, 171),
  circleLight = d3.rgb(10, 112, 88),
  circleCollideRadius = 16,
  circleCharge = -2000; //repulsion or attraction of circles from center

var nodes = d3.range(100).map(function () {
  return {
    radius: Math.random() * maxCircleSize
      + minCircleSize
  };
}),
  root = nodes[0];
root.radius = 0;
root.fixed = true;
root.px = Math.floor(width / 2);
root.py = Math.floor(height / 2);

particlesJS.load('particles-js', 'data/particlesjs-config.json', function () {
  console.log('callback - particles.js config loaded');
});

var force = d3.layout.force()
  .gravity(0.03)
  .charge(function (d, i) { return i ? 0 : circleCharge; })
  .nodes(nodes)
  .size([width, height]);

force.start();

var svg = d3.select(".home__circles_container").append("svg")
  .attr("width", width)
  .attr("height", height);

svg.selectAll("circle")
  .data(nodes.slice(1))
  .enter().append("circle")
  .attr("r", function (d) { return d.radius; })
  .style({
    //"fill" :  function(d, i) { return color; },
    "fill": function (d, i) { return d3.interpolate(circleDark, circleLight)(Math.random()) },
    //"opacity" : function(d,i){ return Math.random(); } //TODO: do this with color only, not opacity
    //"opacity": 1,
  });

force.on("tick", function (e) {
  var q = d3.geom.quadtree(nodes),
    i = 0,
    n = nodes.length;

  while (++i < n) q.visit(collide(nodes[i]));

  svg.selectAll("circle")
    .attr("cx", function (d) { return d.x; })
    .attr("cy", function (d) { return d.y; });
});

svg.on("mousemove", cursorMove);
svg.on("touchmove", cursorMove);

svg.on("mouseleave", cursorEnd);
svg.on("touchend", cursorEnd);

function cursorMove() {
  var p1 = d3.mouse(this);
  root.px = p1[0];
  root.py = p1[1];
  force.resume();
}

function cursorEnd() {
  root.px = Math.floor(width / 2);
  root.py = Math.floor(height / 2);
  force.resume();
}

function collide(node) {
  var r = node.radius + circleCollideRadius,
    nx1 = node.x - r,
    nx2 = node.x + r,
    ny1 = node.y - r,
    ny2 = node.y + r;
  return function (quad, x1, y1, x2, y2) {
    if (quad.point && (quad.point !== node)) {
      var x = node.x - quad.point.x,
        y = node.y - quad.point.y,
        l = Math.sqrt(x * x + y * y),
        r = node.radius + quad.point.radius;
      if (l < r) {
        l = (l - r) / l * .5;
        node.x -= x *= l;
        node.y -= y *= l;
        quad.point.x += x;
        quad.point.y += y;
      }
    }
    return x1 > nx2 || x2 < nx1 || y1 > ny2 || y2 < ny1;
  };
}

initForceAnimation = function(){
  ww = $(window).width();
  wh = $(window).height();
  wcx = Math.floor(ww/2);
  wcy = Math.floor(wh/2);
  setTimeout(startPassiveAnimation,10000);
}

//Intro

const $introModal = $('.intro__modal_container');
let canvas, stage, exportRoot, anim_container, dom_overlay_container, fnStartAnimation, comp, lib, ss;


$('.home__btn_intro').on('click', onIntroLinkClick);
$introModal.on('click', handleCloseModal);

$(window).load(() => {
  init();
});

function initAnimation() {
  stage.addChild(exportRoot);
  createjs.Ticker.framerate = lib.properties.fps;
  createjs.Ticker.addEventListener("tick", stage);
  comp.getStage().seek(0);
  comp.getStage().stop();
}

//https://github.com/VincentGarreau/particles.js/issues/88
function stopParticles(){
  pJSDom[0].pJS.particles.move.enable = false;
}

function startParticles(){
  pJSDom[0].pJS.particles.move.enable = true;
  pJSDom[0].pJS.fn.particlesRefresh();
}

function onIntroLinkClick(e) {
  e.preventDefault();
  $introModal.addClass('active');
  comp.getStage().play();
  tutorialActive = true;
  stopParticles();
  stopPassiveAnimation();
  isIdle = false;
}

function init() {
  initForceAnimation();

  canvas = document.getElementById("canvas");
  anim_container = document.getElementById("animation_container");
  dom_overlay_container = document.getElementById("dom_overlay_container");
  comp = AdobeAn.getComposition("D7D5DE1740A04999B0AB56BA8A4B3927");
  lib = comp.getLibrary();
  handleInitComplete({}, comp);
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

function handleCloseModal() {
  comp.getStage().seek(0);
  comp.getStage().stop();
  $introModal.removeClass('active');
  tutorialActive = false;
  startParticles();
  isIdle = true;
}