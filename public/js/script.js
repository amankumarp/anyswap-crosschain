/*------------------- 
File Name : "script.js"
Author: SpadeMark
Author URI: http://spademark.com
Description:  Interface scripting and custom jquery
Date Created : 26th March 2012
Time : 09:58:00
Developer : Rajni
--------------------*/
/*-------------------------------------- Developed and Designed by Neeraj Bhalla, Web Designer ------------------------------------------*/
/*------------------------------------------------ on 00th month year at time ------------------------------------------------------*/
//==================== Browser code ====================	
// (function(){
// 	var val = navigator.userAgent.toLowerCase();
// 	if(val.indexOf("firefox") > -1){
// 		$('body').addClass('firefox');
// 	}
// 	else if(val.indexOf("opera") > -1){
// 		$('body').addClass('opera');
// 	}
// 	else if(val.indexOf("msie") > -1){
// 		$('body').addClass('ie');		
// 		// get ie version
// 		version = parseFloat(navigator.appVersion.split("MSIE")[1]);
// 		$('body').addClass('ie'+version);
// 	}	
// 	else if(val.match('chrome') != null){
// 		$('body').addClass('chrome');
// 	}
// 	else if(val.indexOf("safari") > -1){
// 		$('body').addClass('safari');
// 	}
// })();



document.addEventListener("DOMContentLoaded", () => {
  function counter(id, start, end, duration) {
   let obj = document.getElementById(id),
    current = start,
    range = end - start,
    increment = end > start ? 1 : -1,
    step = Math.abs(Math.floor(duration / range)),
    timer = setInterval(() => {
     current += increment;
     obj.textContent = current;
     if (current == end) {
      clearInterval(timer);
     }
    }, step);
 }
 counter("count1", 0, 1000, 100);
});


//==================== Browser code ====================
	


// Animation scroll
// $(function() {
  
//   var html = $('html');
//   // Detections
//   if (!("ontouchstart" in window)) {
//     html.addClass("noTouch");
//   }
//   if ("ontouchstart" in window) {
//     html.addClass("isTouch");
//   }
//   if ("ontouchstart" in window) {
//     html.addClass("isTouch");
//   }
//   if (document.documentMode || /Edge/.test(navigator.userAgent)) {
//     if (navigator.appVersion.indexOf("Trident") === -1) {
//       html.addClass("isEDGE");
//     } else {
//       html.addClass("isIE isIE11");
//     }
//   }
//   if (navigator.appVersion.indexOf("MSIE") !== -1) {
//     html.addClass("isIE");
//   }
//   if (
//     navigator.userAgent.indexOf("Safari") != -1 &&
//     navigator.userAgent.indexOf("Chrome") == -1
//   ) {
//     html.addClass("isSafari");
//   }

//   // On Screen

//   $.fn.isOnScreen = function() {
//     var elementTop = $(this).offset().top,
//       elementBottom = elementTop + $(this).outerHeight(),
//       viewportTop = $(window).scrollTop(),
//       viewportBottom = viewportTop + $(window).height();
//     return elementBottom > viewportTop && elementTop < viewportBottom;
//   };

//   function detection() {
//     for (var i = 0; i < items.length; i++) {
//       var el = $(items[i]);

//       if (el.isOnScreen()) {
//         el.addClass("in-view");
//       } else {
//         el.removeClass("in-view");
//       }
//     }
//   }

//   var items = document.querySelectorAll(
//     "*[data-animate-in], *[data-detect-viewport]"
//   ),
//     waiting = false,
//     w = $(window);

//   w.on("resize scroll", function() {
//     if (waiting) {
//       return;
//     }
//     waiting = true;
//     detection();

//     setTimeout(function() {
//       waiting = false;
//     }, 100);
//   });

//   $(document).ready(function() {
//     setTimeout(function() {
//       detection();
//     }, 500);

//     for (var i = 0; i < items.length; i++) {
//       var d = 0,
//         el = $(items[i]);
//       if (items[i].getAttribute("data-animate-in-delay")) {
//         d = items[i].getAttribute("data-animate-in-delay") / 1000 + "s";
//       } else {
//         d = 0;
//       }
//       el.css("transition-delay", d);
//     }
//   });
// });
// Animation scroll
// Animation scroll