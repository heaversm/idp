//https://github.com/kidh0/jquery.idle

const IDLE_TIME = 30000; //ms
const REDIRECT_TIME = 5000; //ms - time since displaying idle warning before redirecting to start
const USE_IDLE = false;

let redirectTimeout = null;

function handleIdle(){
  console.log('idle');
  $('.idle__modal_container').addClass('active');
  redirectTimeout = setTimeout((w)=>{
    window.location = '/'
  },REDIRECT_TIME);
}

function handleReturn(){
  clearTimeout(redirectTimeout);
  console.log('return');
  $('.idle__modal_container').removeClass('active');
}

function addIdle(){
  $(window).idle({ //note that there is a separate idle functionality placed on the document, not the window. This idle handlesthe animation of the particles if there is no user activity, not the overall page timeout for inactivity
    onIdle: handleIdle,
    onActive: handleReturn,
    idle: IDLE_TIME
  });
}

function addListeners(){
  $('.idle__modal_button').on('click',handleReturn);
}
$(window).load(()=>{
  if (USE_IDLE){
    console.log('activate idle functionality')
    addIdle();
    addListeners();
  }
});