(function($) {

  $('#section-1').on('inview', function(event, isInView) {
    $(event.target).addClass('run-animation');
    if (isInView) {
      anime({
        targets: '.box',
        translateX: function() { return anime.random(-50, 50) + 'vw'; },
        translateY: function() { return anime.random(-50, 50) + 'vh'; },
        scale: function() { return anime.random(10,30) / 10; },
        rotate: function() { return anime.random(-360,360); },
        duration: function() { return anime.random(1000,2000); },
        easing: 'easeOutQuad',
        // direction: 'alternate',
        loop: false,
        elasticity: function(el, i, l) {
          return (200 + i * 200);
        },
        begin: function(anim) {
          $(event.target).find('.log h1').html('Started');
        },
        complete: function(anim) {
          $(event.target).find('.log h1').html('Completed');
        }
      });
    }
    anime({
  targets: '.box',
  translateX: '30rem',
  scale: [.50, .70],
  delay: function(el, index) {
    return index * 40;
  },
  direction: 'alternate',
  loop: true
});
  });

  $('#section-2').one('inview', function(event, isInView) {
    $(event.target).addClass('run-animation');
    if (isInView) {

      var basicTimeline = anime.timeline({
        direction: 'alternate',
        loop: 3,
        elasticity: 350
      });
      basicTimeline.begin = function(anim) {
        $(event.target).find('.log h1').html('Started');
      };
      basicTimeline.complete = function(anim) {
        $(event.target).find('.log h1').html('Completed');
        $(event.target).find('.log h5').html('100%');
      };
      basicTimeline.run = function(anim) {
        $(event.target).find('.log h5').html(Math.round(anim.progress) + '%');
      }
      basicTimeline
        .add({
          targets: '.button',
          duration: 800,
          height: 20,
          width: 500,
          backgroundColor: '#2B2D2F',
          border: '0',
          borderRadius: 100
        })
        .add({
          targets: '.progress-bar',
          height: 20,
          width: 20,
          opacity: 1,
          duration: 1,
        })
        .add({
          targets: '.progress-bar',
          duration: 800,
          width: 500,
          elasticity: 350
        })
        .add({
          targets: '.button',
          duration: 300,
          height: 20,
          width: 500,
          backgroundColor: '#2B2D2F',
          border: '0',
          borderRadius: 100
        })
        .add({
          targets: '.progress-bar',
          height: 80,
          duration: 300,
          width: 500,
          elasticity: 350
        })
    }
  });

  $('#section-3').one('inview', function(event, isInView) {
    $(event.target).addClass('run-animation');


var domAttributes = anime({
  targets: '#domAttributes input',
  value: 100,
  round: 1,
  easing: 'easeInOutExpo'
});


  });

  $('#section-4').one('inview', function(event, isInView) {
    $(event.target).addClass('run-animation');

var headID = document.getElementsByTagName("head")[0];         
var cssNode = document.createElement('link');
var mousewidth = 15;
cssNode.type = 'text/css';
cssNode.rel = 'stylesheet';
cssNode.href = 'http://www.zhereicome.com/experiments/statics/mouser.css';
cssNode.media = 'screen';
headID.appendChild(cssNode);


var image = new Image();

image.onLoad = function() {}

image.src="http://prescottcomputerguy.com/screenflow/ScreenFlowCursors/pcg/finger.png";

image.style.position = "absolute";
image.style.top = "0";
image.style.left = "0";
image.style.zIndex = "999999";


var body = document.getElementsByTagName("body")[0];

body.appendChild(image);

document.onmousemove = function(e) {
  image.style.top = e.clientY + (window.pageYOffset || document.documentElement.scrollTop) + "px";
  image.style.left = (e.clientX  + 2) + "px";
}


setInterval(function() {
  console.log(mousewidth);
  mousewidth += 1;
  image.style.width = Math.random() * 400 + "px"; 
}, 3000);



  });

  $('#section-5').one('inview', function(event, isInView) {
    $(event.target).addClass('run-animation');

var bouncingBall = anime({
    targets: '.ball',
    translateY: '50vh',
    duration: 800,
    loop: true,
    direction: 'alternate',
    easing: 'easeInCubic',
    scaleX: {
        value: 1.05,
        duration: 150,
        delay: 268
    }
});

  });

})(jQuery);
