window.onload = function () {

    var ambientSound = new Howl({
        src: ['audio/ambient3.mp3'],
        autoplay: true,
        loop: true,
        volume: 0.3,
    });

    var navigateSound1 = new Howl({
        src: ['audio/button4.mp3'],
    });

    var navigateSound2 = new Howl({
        src: ['audio/button5.mp3'],
    });

    var navigateSound3 = new Howl({
        src: ['audio/button6.mp3'],
        volume: 0.25,
    });

    var collectiveChosenSound = new Howl({
        src: ['audio/collectiveChosen.mp3'],
        onend: function(){
            storeSelections(); //go to final step
        }
    });

    var button = document.getElementById('cn-button'),
        wrapper = document.getElementById('cn-wrapper'),
        overlay = document.getElementById('cn-overlay');

    $selectButton = document.querySelector('.select-instance');
    $registerButton = this.document.querySelector('.collectives__register_button');

    $wrapper = $('.cn-wrapper');
    $contentWrapper = $('.content-wrapper');
    $petals = $('.petal');

    var $arrow = $('.arrow');
    var curIndex = 0;
    var totalIndex = 8;
    var rotateAmt = 0;

    //open and close menu when the button is clicked
    var open = false;
    button.addEventListener('click', handler, false);
    wrapper.addEventListener('click', cnhandle, false);

    $arrow.on('click', onArrowClick);
    $petals.on('click', onPetalClick);
    $('.select-instance').on('click', onInstanceClick);


    let currentModel = "style1";
    let chosenCollective = null;


    initializeFirstItem();

    function initializeFirstItem() {
        $(button).trigger('click');
        setTimeout(function () {
            $('.arrow').addClass('active');
        }, 1500);
    }


    function onArrowClick() {
        $thisArrow = $(this);
        var isLeft = $thisArrow.hasClass('left');
        if (isLeft) {
            navigateSound1.play();
            if (curIndex > 0) {
                curIndex--;
            } else {
                curIndex = totalIndex;
            }
            rotateAmt += 40;
        } else {
            navigateSound2.play();
            if (curIndex < totalIndex) {
                curIndex++;
            } else {
                curIndex = 0;
            }
            rotateAmt -= 40;
        }

        $wrapper.css({ 'transform': 'translate(-50%,-50%) rotate(' + rotateAmt + 'deg' });
        displayContent();
    }

    function onPetalClick() {
        console.log('onPetalClick')
        //CLICKME
        navigateSound3.play();
        const eleLink = $(this)[0];
        let ele = eleLink.querySelector('.collectives__petal_image');
        if (ele.src) {
            currentModel = ele.id;
            document.getElementById("cn-button-background").style.backgroundImage = `url("images/${ele.id}.jpg")`;
        }
        var $thisPetal = $(this);
        curIndex = $thisPetal.index();
        var rotateIndex = curIndex; //MH - 0 index is at the left position , so two turns will get it to the top, thus the -2

        


        rotateAmt = -rotateIndex * 40;

        $wrapper.css({ 'transform': 'translate(-50%,-50%) rotate(' + rotateAmt + 'deg' });
        displayContent();

    }

    function onInstanceClick(e) { //MERGE!
        e.stopPropagation();
        $contentWrapper.removeClass('active');
        closeNav();
        collectiveChosenSound.play();
    }

    function cnhandle(e) {
        e.stopPropagation();
    }

    function handler(e) {

        e.stopPropagation();//so that it doesn't trigger click event on document

        if (!open) {
            openNav();
        }
    }
    function openNav() {
        open = true;
        classie.add(overlay, 'on-overlay');
        classie.add(wrapper, 'opened-nav');
        $(button).addClass('active');
        setTimeout(displayContent, 1200);
    }
    function closeNav() {
        open = false;
        classie.remove(overlay, 'on-overlay');
        classie.remove(wrapper, 'opened-nav');
        $arrow.removeClass('active');
    }

    function displayContent() {
        var $curPetal = $('.petal').eq(curIndex);
        $('.petal').removeClass('active');
        $curPetal.addClass('active');
        var $curSpan = $curPetal.find('span');
        var curText = $curSpan.text();
        $contentWrapper.find('.title').text(curText);
        $contentWrapper.addClass('active');
        chosenCollective = curText;
    }

    function storeSelections() {
        //currentModel, chosenCollective
        sessionStorage.setItem('chosenModel', currentModel);
        sessionStorage.setItem('chosenCollective', chosenCollective);
        window.location = `register.html?style=${currentModel}`;
    }
}

