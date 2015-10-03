/* Lazy Load XT 1.0.6 | MIT License */
!function(a,b,c,d){function e(a,b){return a[b]===d?t[b]:a[b]}function f(){var a=b.pageYOffset;return a===d?r.scrollTop:a}function g(a,b){var c=t["on"+a];c&&(w(c)?c.call(b[0]):(c.addClass&&b.addClass(c.addClass),c.removeClass&&b.removeClass(c.removeClass))),b.trigger("lazy"+a,[b]),k()}function h(b){g(b.type,a(this).off(p,h))}function i(c){if(A.length){c=c||t.forceLoad,B=1/0;var d,e,i=f(),j=b.innerHeight||r.clientHeight,k=b.innerWidth||r.clientWidth;for(d=0,e=A.length;e>d;d++){var l,m=A[d],o=m[0],q=m[n],s=!1,u=c;if(z(r,o)){if(c||!q.visibleOnly||o.offsetWidth||o.offsetHeight){if(!u){var v=o.getBoundingClientRect(),x=q.edgeX,y=q.edgeY;l=v.top+i-y-j,u=i>=l&&v.bottom>-y&&v.left<=k+x&&v.right>-x}if(u){g("show",m);var C=q.srcAttr,D=w(C)?C(m):o.getAttribute(C);D&&(m.on(p,h),o.src=D),s=!0}else B>l&&(B=l)}}else s=!0;s&&(A.splice(d--,1),e--)}e||g("complete",a(r))}}function j(){C>1?(C=1,i(),setTimeout(j,t.throttle)):C=0}function k(a){A.length&&(a&&"scroll"===a.type&&a.currentTarget===b&&B>=f()||(C||setTimeout(j,0),C=2))}function l(){v.lazyLoadXT()}function m(){i(!0)}var n="lazyLoadXT",o="lazied",p="load error",q="lazy-hidden",r=c.documentElement||c.body,s=b.onscroll===d||!!b.operamini||!r.getBoundingClientRect,t={autoInit:!0,selector:"img[data-src]",blankImage:"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",throttle:99,forceLoad:s,loadEvent:"pageshow",updateEvent:"load orientationchange resize scroll touchmove focus",forceEvent:"",oninit:{removeClass:"lazy"},onshow:{addClass:q},onload:{removeClass:q,addClass:"lazy-loaded"},onerror:{removeClass:q},checkDuplicates:!0},u={srcAttr:"data-src",edgeX:0,edgeY:0,visibleOnly:!0},v=a(b),w=a.isFunction,x=a.extend,y=a.data||function(b,c){return a(b).data(c)},z=a.contains||function(a,b){for(;b=b.parentNode;)if(b===a)return!0;return!1},A=[],B=0,C=0;a[n]=x(t,u,a[n]),a.fn[n]=function(c){c=c||{};var d,f=e(c,"blankImage"),h=e(c,"checkDuplicates"),i=e(c,"scrollContainer"),j={};a(i).on("scroll",k);for(d in u)j[d]=e(c,d);return this.each(function(d,e){if(e===b)a(t.selector).lazyLoadXT(c);else{if(h&&y(e,o))return;var i=a(e).data(o,1);f&&"IMG"===e.tagName&&!e.src&&(e.src=f),i[n]=x({},j),g("init",i),A.push(i)}})},a(c).ready(function(){g("start",v),v.on(t.loadEvent,l).on(t.updateEvent,k).on(t.forceEvent,m),a(c).on(t.updateEvent,k),t.autoInit&&l()})}(window.jQuery||window.Zepto||window.$,window,document);

(function ($) {
var options = $.lazyLoadXT,
    bgAttr = options.bgAttr || 'data-bg';

options.selector += ',[' + bgAttr + ']';

$(document).on('lazyshow', function (e) {
    var $this = $(e.target);

    if($this.context.outerHTML.indexOf('data-src') === -1) {
        $this
            .css('background-image', "url('" + $this.attr(bgAttr) + "')")
            .removeAttr(bgAttr);
    }
});

$.extend($.lazyLoadXT, {
  edgeY:  350
});
})(window.jQuery || window.Zepto || window.$);


// WEATHER API
// var loadweather = function() {
//       // Montreal Location URL
//       var forecastURL = "https://api.forecast.io/forecast/26dae662918aed65b1fe416e45c69348/45.5000,-73.5667";
//       // AJAX Request
//       $.ajax ({
//         url: forecastURL,
//         jsonpCallback: 'jsonCallBack',
//         contentType: 'application/json',
//         dataType: 'jsonp',
//         success: function(json){
//           var intTemp = parseInt(json.currently.temperature )
//           var celcius = Math.round((intTemp - 32)*(5/9));
//           var conditions = json.currently.summary;
//           $('.mtlTemp').html(celcius + "&deg, " + conditions);
//         },


//         error: function(e){
//           console.log(e.message);
//         }
//     });
//   }


    var dropDown = function() {

      var userScrolled = false;
      var fixedNav = $('nav');

      $(window).scroll(function() {
        userScrolled = true;
      });

      setInterval(function() {
      if (userScrolled) {
        if (!($(this).scrollTop() < 500) && $(window).width() >= 769) {
          if (!fixedNav.hasClass('show')) {
            fixedNav.addClass('show');
            }
          } else {
            if ($(this).scrollTop() < 500  && $(window).width() >= 769) {
              fixedNav.removeClass('show');
            }
          }
        userScrolled = false;
      }
    }, 400);
    // 500ms delay on scroll event
  }
// MOVE SCREEN WITH KEYBOARD
function moveScreen(e) {
    e = e || window.event;
    if (e.keyCode == '38') {

    }
    else if (e.keyCode == '40') {
        // down arrow
    }
    else if (e.keyCode == '37') {
       // left arrow
    }
    else if (e.keyCode == '39') {
       // right arrow
    }
}

// ACTIVE TOGGLE FOR BUTTON SELECTION
var buttonActive = function(){
  $('.render-control, .rotate-control').click(function() {
    $(this).toggleClass('button-active');
    });
}

// TOGGLE ROTATION OF ROBOT
var rotateRobot = function(){
  var sliderValue = $('.slider-control').val() + 's';
  var cube = $('.cube');
  var playState = '-webkit-animation-play-state';
  var playStateMoz = '-moz-animation-play-state';
  var playStateMs = '-ms-animation-play-state';
  var playStateO = '-o-animation-play-state';
  var rotateControl = $('.rotate-control');

  cube.css('-webkit-animation-play-state', 'paused');
  cube.css('-moz-animation-play-state', 'paused');
  cube.css('-ms-animation-play-state', 'paused');
  cube.css('-o-animation-play-state', 'paused');

  rotateControl.click(function() {
    cube.css(playState, function(i, v) {
      return v === 'paused' ? 'running' : 'paused';
    });
      $('body').toggleClass('paused', $(this).css(playState) === 'paused');
      $('body').toggleClass('paused', $(this).css(playStateWebkit) === 'paused');
      $('body').toggleClass('paused', $(this).css(playStateMoz) === 'paused');
      $('body').toggleClass('paused', $(this).css(playStateMs) === 'paused');
      $('body').toggleClass('paused', $(this).css(playStateO) === 'paused');
  });
}

// RENDER 3D OPTION FOR ROBOT
var renderRobot = function (){
  var heartHolder = $('.heartholder');
  var cube = $('.cube');
  var renderControl = $('.render-control');
  var onOffHolder = $('.onoffholder');

  heartHolder.removeClass('heart');
  onOffHolder.remove('.on-off');

  renderControl.click(function() {
    cube.toggleClass('preserve3D');
    heartHolder.toggleClass('heart');
    var onOffHolder = $('.onoffholder');

    // If cube doesn't have figure class="on-off" append one
    // else, do nothing.
    if (cube.find('figure.on-off').length === 0){
      cube.append(
        '<figure class="on-off onoffholder">'+
        '<img class="on-off-image" src="img/on-off.png"/>'+
        '<figure class="green-button"></figure>'+
        '</figure>' );
      heartReveal();
    } else {
        onOffHolder.remove('.on-off');
    }
  });
}

// HEART REVEAL ON HOVER OF ROBOT
var heartReveal = function(){
  var bodyBack = $('.body-back');
  var onOff = $('.on-off');
  var bodyFront = $('.body-front');
  var frontPanel = $('.front-panel');
    // Body-Back translate
  $('.stage').mouseenter(function()  {
    // Use textIndent as dummy property
    bodyBack.animate({  textIndent: -200 }, {
      step: function(now,fx) {
        $(this).css('-webkit-transform','translateZ('+now+'px)');
      },
        duration:'slow'
      },'linear');
  })
    .mouseleave(function() {
      var bodyBack = $('.body-back');
      bodyBack.animate({  textIndent: -66 }, {
      step: function(now,fx) {
        $(this).css('-webkit-transform','translateZ('+now+'px)');
        },
      duration:'slow'
    },'linear');
  });
 // On Off Button on Back Translate
  $('.stage').mouseenter(function()  {
  onOff.animate({  overFlow: -203 }, {
            step: function(now,fx) {
            $(this).css('-webkit-transform','translateZ('+now+'px)','-webkit-transform','rotateY('+180+'deg)');
            $(this).css('-moz-transform','translateZ('+now+'px)','-moz-transform','rotateY('+180+'deg)');
            $(this).css('-ms-transform','translateZ('+now+'px)','-ms-transform','rotateY('+180+'deg)');
          },
          duration:'slow'
        },'linear');
      })
        .mouseleave(function() {
        onOff.animate({  overFlow: -70 }, {
          step: function(now,fx) {
            $(this).css('-webkit-transform','translateZ('+now+'px)');
          },
          duration:'slow'
        },'linear');
      });

    // Body Front Translate
    $('.stage').mouseenter(function()  {
      bodyFront.animate({  textIndent: 200 }, {
          step: function(now,fx) {
            $(this).css('-webkit-transform','translateZ('+now+'px)');
          },
          duration:'slow'
        },'linear');
      })
        .mouseleave(function() {
        bodyFront.animate({  textIndent: 66 }, {
          step: function(now,fx) {
            $(this).css('-webkit-transform','translateZ('+now+'px)');
          },
          duration:'slow'
        },'linear');
      });

      // Body Front  PANEL Translate
      $('.stage').mouseenter(function()  {
      frontPanel.animate({  textIndent: 203 }, {
          step: function(now,fx) {
            $(this).css('-webkit-transform','translateZ('+now+'px)');
          },
          duration:'slow'
        },'linear');
      })
        .mouseleave(function() {
        frontPanel.animate({  textIndent: 68 }, {
          step: function(now,fx) {
            $(this).css('-webkit-transform','translateZ('+now+'px)');
          },
          duration:'slow'
        },'linear');
      });
    }
// VIDEO PLAY PAUSE FUNCTION DEPENDING ON PAGE POSITION;
var playVideo = function() {
  var userScrolled = false;

  $(window).scroll(function() {
    userScrolled = true;
  });

  setInterval(function() {
    if (userScrolled) {
      var video = document.getElementById("myVideo");
       if (pageYOffset > 1100 && pageYOffset < 2000) {
          // play video in pageYOffset region
          video.play();
        } else {
          // pause video if not in region
          video.pause();
        }
      userScrolled = false;
    }
  }, 500);
  // 500ms delay on scroll event
}

// FORM SUMBITTION
var formSubmission = function() {
  $('#myForm').submit(function(event) {
    event.preventDefault();

    var button = $('.button');
    var response = $('.response-message');
    var name = $("#name").val();
    var email = $("#email").val();
    var message = $("#message").val();
    var dataString = 'name='+ name + '&email=' + email + '&message=' + message;


    if((name != "") && (email != "") && (message != "")) {
      $.ajax({
        type:'POST',
        url: 'php/contact.php',
        data: dataString,
        success: function(msg) {
            button.css( "background-image", "none");
            button.animate({
              backgroundColor: "#43A047",
              color: "#fff",
            }, 300 );
            window.setTimeout(function () {
              button.delay( 1000 ).html('success');
            }, 400);
            response.animate({opacity: 0.8});
            response.fadeIn('slow').html('Thank you, ' + name + ', I will respond shortly.');
        },
        error:  function(xhr, status, error) {
          button.css( "background-image", "none");
          button.animate({
              backgroundColor: "#CD4435",
              color: "#fff",
            }, 300 );
            window.setTimeout(function () {
              button.delay( 1000 ).html('error');
            }, 400);
          response.animate({opacity: 0.8});
          response.fadeIn('slow').html('Sorry, ' + name + ', there was an error. Please email <a class="header-mailto" href="mailto:brotzky@gmail.com?Subject=Form%20error" target="_top">brotzky@gmail.com</a>.');
        }
      });

    } else {
      $('input, textarea').addClass('color');
    }


  });
}
// RUN FUNCTIONS WHEN DOCUMENT LOADED
$(document).ready(function(){
  // loadweather();
  dropDown();
  moveScreen();
  buttonActive();
  renderRobot();
  rotateRobot();
  heartReveal();
  playVideo();
  formSubmission();
});