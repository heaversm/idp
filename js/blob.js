//Common

function mapRange(value, low1, high1, low2, high2) {
  return low2 + (high2 - low2) * (value - low1) / (high1 - low1);
}

function randomIntFromInterval(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min);
}


var gui;

const BG_COLOR = "black";
const INNER_RAD = 8;
const THICKNESS = .5;
const WAVES = 10.1;
const HUE = 9;
const R = 0.77;
const G = .52;
const B = 1.6;
const USE_GUI = false;

var options = {
  perlin: {
    speed: 0.43,
    size: 1.9,
    perlins: 1.0,
    decay: 1.20,
    displace: 2.0,
    complex: 0.10,
    waves: WAVES,
    eqcolor: HUE,
    rcolor: R,
    gcolor: G,
    bcolor: B,
    fragment: true,
    redhell: true
  }
}


function initBlob() {
  createWorld();
  if (USE_GUI){
    createGUI();
  }
  createPrimitive();
  animation();
  //addBlobListeners();
}

var Theme = {
  primary: 0xFFFFFF,
  secundary: 0xD1D9D3,
  darker: 0x000000,
};

//--------------------------------------------------------------------
var scene, camera, renderer, container;
var _width = window.innerWidth;
var _height = window.innerHeight;
var _primitive;
var shapeGroup = new THREE.Group();
var start = Date.now();

var composer, afterimagePass;
var params = {
  enable: true,
  exposure: 0,
  bloomStrength: 0.05,
  bloomThreshold: 0.05,
  bloomRadius: 200
}

function createWorld() {
  _width = window.innerWidth;
  _height = window.innerHeight;
  //---
  scene = new THREE.Scene();
  scene.background = new THREE.Color(BG_COLOR);
  //---
  camera = new THREE.PerspectiveCamera(35, _width / _height, 1, 1000);
  camera.position.set(0, 0, 16);
  //---
  renderer = new THREE.WebGLRenderer({ antialias: false, alpha: false });
  renderer.setSize(_width, _height);
  renderer.shadowMap.enabled = true;


  composer = new THREE.EffectComposer(renderer);
  composer.addPass(new THREE.RenderPass(scene, camera));
  var bloomPass = new THREE.UnrealBloomPass(new THREE.Vector2(window.innerWidth, window.innerHeight), 1.5, 0.4, 0.85);
  bloomPass.threshold = params.bloomThreshold;
  bloomPass.strength = params.bloomStrength;
  bloomPass.radius = params.bloomRadius;
  composer.addPass(bloomPass);

  afterimagePass = new THREE.AfterimagePass();
  composer.addPass(afterimagePass);



  //---
  document.querySelector('.bg_container').appendChild(renderer.domElement);
  //---
  window.addEventListener('resize', onWindowResize, false);
}
function onWindowResize() {
  _width = window.innerWidth;
  _height = window.innerHeight;
  renderer.setSize(_width, _height);
  composer.setSize(_width, _height);
  camera.aspect = _width / _height;
  camera.updateProjectionMatrix();
  console.log('- resize -');
}
//--------------------------------------------------------------------
var primitiveElement = function () {
  this.mesh = new THREE.Object3D();
  mat = new THREE.ShaderMaterial({
    //transparent: true,
    //opacity: 0.0,
    side: THREE.DoubleSide,
    uniforms: {
      time: {
        type: "f",
        value: 0.1
      },
      pointscale: {
        type: "f",
        value: 0.2
      },
      decay: {
        type: "f",
        value: 0.3
      },
      size: {
        type: "f",
        value: 0.3
      },
      displace: {
        type: "f",
        value: 0.3
      },
      complex: {
        type: "f",
        value: 0.0
      },
      waves: {
        type: "f",
        value: 0.10
      },
      eqcolor: {
        type: "f",
        value: 0.0
      },
      rcolor: {
        type: "f",
        value: 0.0
      },
      gcolor: {
        type: "f",
        value: 0.0
      },
      bcolor: {
        type: "f",
        value: 0.0
      },
      fragment: {
        type: "i",
        value: true
      },
      redhell: {
        type: "i",
        value: true
      }
    },
    //vertexShader: document.getElementById('vertexShader').textContent,
    //fragmentShader: document.getElementById('fragmentShader').textContent
    vertexShader: blobVertex,
    fragmentShader: blobFragment,
  });
  //---

  //var geo = new THREE.IcosahedronBufferGeometry(2, 6);

  var geo = new THREE.TorusBufferGeometry(INNER_RAD, THICKNESS, 16, 100);

  this.shape = new THREE.Mesh(geo, mat);

  shapeGroup.add(this.shape);
  //shapeGroup.scale.set(.25, .25, .25);
  scene.add(shapeGroup);
}
function createPrimitive() {
  _primitive = new primitiveElement();
}



function createGUI() {
  gui = new dat.GUI();

  var perlinGUI = gui.addFolder('Shape Setup');
  perlinGUI.add(options.perlin, 'speed', 0.1, 1.0).name('Speed').listen();
  perlinGUI.add(options.perlin, 'size', 0.0, 7.0).name('Size').listen();
  //perlinGUI.add(options.perlin, 'decay', 0.0, 1.0).name('Decay').listen();
  perlinGUI.add(options.perlin, 'waves', 0.0, 20.0).name('Waves').listen();
  perlinGUI.add(options.perlin, 'complex', 0.1, 1.0).name('Complex').listen();
  perlinGUI.add(options.perlin, 'displace', 0.1, 3).name('Displacement').listen();

  var colorGUI = gui.addFolder('Color');
  colorGUI.add(options.perlin, 'eqcolor', 0.0, 30.0).name('Hue').listen();
  colorGUI.add(options.perlin, 'rcolor', 0.0, 2.5).name('R').listen();
  colorGUI.add(options.perlin, 'gcolor', 0.0, 2.5).name('G').listen();
  colorGUI.add(options.perlin, 'bcolor', 0.0, 2.5).name('B').listen();
  //colorGUI.open();

}


const MathUtils = {
  lineEq: (y2, y1, x2, x1, currentVal) => {
    // y = mx + b 
    var m = (y2 - y1) / (x2 - x1), b = y1 - m * x1;
    return m * currentVal + b;
  },
  lerp: (a, b, n) => (1 - n) * a + n * b,
  distance: (x1, x2, y1, y2) => {
    var a = x1 - x2;
    var b = y1 - y2;
    return Math.hypot(a, b);
  }
};



const getMousePos = (ev) => {
  let posx = 0;
  let posy = 0;
  if (!ev) ev = window.event;
  if (ev.pageX || ev.pageY) {
    posx = ev.pageX;
    posy = ev.pageY;
  }
  else if (ev.clientX || ev.clientY) {
    posx = ev.clientX + body.scrollLeft + docEl.scrollLeft;
    posy = ev.clientY + body.scrollTop + docEl.scrollTop;
  }
  return { x: posx, y: posy };
}

let mousePos = { x: _width / 2, y: _height / 2 };
let lastMousePosition = { x: _width / 2, y: _height / 2 };
const docEl = document.documentElement;
const body = document.body;

const blobBaseSize = options.perlin.size;
const maxMouseVariance = Math.max(_width, _height); //MH - need to figure max user is likely to be able to move their mouse
const maxSize = 2.0;
const minSize = blobBaseSize;
const minSpeed = options.perlin.speed;
const maxSpeed = 1.0;

const minDisplace = 0;
const maxDisplace = 5;

const $bgContainer = document.querySelector('.bg_container');

let mouseIsDown = false;
let canInteract = true; //true when tweens based on mouse interaction have finished.
let moveCoords = {
  startX: 0,
  startY: 0,
  endX: 0,
  endY: 0,
};

function addBlobListeners() {
  $bgContainer.addEventListener('mousedown', onBGMouseDown);
  $bgContainer.addEventListener('mouseup', onBGMouseUp);
  body.addEventListener('mousemove', ev => mousePos = getMousePos(ev));
  $bgContainer.addEventListener('mouseleave',onBGMouseLeave);
}

function onBGMouseLeave(event){
  onBGMouseUp(event);
}

function onBGMouseDown(event) {
  mouseIsDown = true;
  moveCoords.startX = mousePos.x;
  moveCoords.startY = mousePos.y;
}

function onBGMouseUp(event) {

  if (canInteract && mouseIsDown){
    mouseIsDown = false;
    canInteract = false;
    TweenMax.to(options.perlin, 1, {
      size: blobBaseSize,
      speed: minSpeed,
      displace: minDisplace,
      ease: Quart.easeOut,
      //delay: 1,
      onComplete: function () {
        canInteract = true;
      }
    });
  }

}




//--------------------------------------------------------------------
function animation() {
  var performance = Date.now() * 0.003;

  //MH - 
  const docScrolls = { left: docEl.scrollLeft + docEl.scrollLeft, top: body.scrollTop + docEl.scrollTop };
  const relmousepos = { x: mousePos.x - docScrolls.left, y: mousePos.y - docScrolls.top };

  if (mouseIsDown && canInteract) {
    moveCoords.endX = mousePos.x;
    moveCoords.endY = mousePos.y;
    
    const mouseDistance = MathUtils.distance(moveCoords.endX, moveCoords.startX, moveCoords.endY, moveCoords.startY);
    const newSize = mapRange(mouseDistance, 0, maxMouseVariance, minSize, maxSize);
    //console.log(mouseDistance, newSize);
    options.perlin.size = newSize;

    const newSpeed = mapRange(mouseDistance,0,maxMouseVariance,minSpeed,maxSpeed);
    options.perlin.speed = newSpeed;

    const newDisplace = mapRange(mouseDistance,0,maxMouseVariance,minDisplace,maxDisplace);
    options.perlin.displace = newDisplace;
    const mouseDirection = moveCoords.endX > moveCoords.startX ? 'right' : 'left';
  }

  lastMousePosition = { x: relmousepos.x, y: relmousepos.y };

  shapeGroup.rotation.z += 0.005;
  //---
  //_primitive.shape.visible = !options.perlin.points;
  //---
  mat.uniforms['time'].value = (options.perlin.speed / 1000) * (Date.now() - start);

  mat.uniforms['pointscale'].value = options.perlin.perlins;
  mat.uniforms['decay'].value = options.perlin.decay;
  mat.uniforms['size'].value = options.perlin.size;
  mat.uniforms['displace'].value = options.perlin.displace;
  mat.uniforms['complex'].value = options.perlin.complex;
  mat.uniforms['waves'].value = options.perlin.waves;
  mat.uniforms['fragment'].value = options.perlin.fragment;

  mat.uniforms['redhell'].value = options.perlin.redhell;
  mat.uniforms['eqcolor'].value = options.perlin.eqcolor;
  mat.uniforms['rcolor'].value = options.perlin.rcolor;
  mat.uniforms['gcolor'].value = options.perlin.gcolor;
  mat.uniforms['bcolor'].value = options.perlin.bcolor;



  //---
  requestAnimationFrame(animation);
  if (params.enable) {
    composer.render();
  } else {
    renderer.render(scene, camera);
  }
  //renderer.render(scene, camera);
}

