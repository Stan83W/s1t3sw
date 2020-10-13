/* List */

var $cursor = $(".cursor"),
        $overlay = $(".project-title");

      function moveCircle(e) {
        TweenLite.to($cursor, 0.5, {
          css: {
            left: e.pageX,
            top: e.pageY
          },
          delay: 0.03
        });
      }

      $(".p-1").hover(function() {
        $(".cursor").css({ "background-image": "url(image-1.jpg)" });
      });
      $(".p-2").hover(function() {
        $(".cursor").css({ "background-image": "url(image-2.jpg)" });
      });
      $(".p-3").hover(function() {
        $(".cursor").css({ "background-image": "url(image-3.jpg)" });
      });
      $(".p-4").hover(function() {
        $(".cursor").css({ "background-image": "url(image-4.jpg)" });
      });
      $(".p-5").hover(function() {
        $(".cursor").css({ "background-image": "url(image-5.jpg)" });
      });
      $(".p-6").hover(function() {
        $(".cursor").css({ "background-image": "url(image-6.jpg)" });
      });
      $(".p-7").hover(function() {
        $(".cursor").css({ "background-image": "url(image-7.jpg)" });
      });
      $(".p-8").hover(function() {
        $(".cursor").css({ "background-image": "url(image-8.jpg)" });
      });
      $(".p-9").hover(function() {
        $(".cursor").css({ "background-image": "url(image-9.jpg)" });
      });
      $(".p-10").hover(function() {
        $(".cursor").css({ "background-image": "url(image-10.jpg)" });
      });
      $(".p-11").hover(function() {
        $(".cursor").css({ "background-image": "url(image-11.jpg)" });
      });
      $(".p-12").hover(function() {
        $(".cursor").css({ "background-image": "url(image-12.jpg)" });
      });

      var flag = false;
      $($overlay).mousemove(function() {
        flag = true;
        TweenLite.to($cursor, 0.3, { scale: 1, autoAlpha: 1 });
        $($overlay).on("mousemove", moveCircle);
      });

      $($overlay).mouseout(function() {
        flag = false;
        TweenLite.to($cursor, 0.3, { scale: 1, autoAlpha: 0 });
      });



      // Grey out projects

        $($overlay).mouseenter(function() {
          selectNotHovered();
          removeHovered();
        });
        
         $($overlay).mouseleave(function() {
            removeNotHovered();
        });
        
        function selectNotHovered() {
          var overlays = document.querySelectorAll(".project:not(:hover)");
          overlayArray = Array.prototype.slice.call(overlays,0);
          overlayArray.forEach(function(over){
              over.classList.add("not-hovered"); 
          });
        }

        function removeNotHovered() {
          var overlays = document.querySelectorAll(".project:not(:hover)");
          overlayArray = Array.prototype.slice.call(overlays,0);
          overlayArray.forEach(function(over){
              over.classList.remove("not-hovered"); 
          });
        }
        
          function removeHovered() {
          var overlays = document.querySelectorAll(".project:hover");
          overlayArray = Array.prototype.slice.call(overlays,0);
          overlayArray.forEach(function(over){
              over.classList.remove("not-hovered"); 
          });
        }

      /* Toggle */

      var t1 = new TimelineMax({ paused: true });
      t1.to(".nav", 1.8, {
          width: "100%",
          ease: Expo.easeInOut,
      });

      t1.staggerTo(".nav-item p", 0.6, { top: "0px", ease: Expo.easeInOut }, 0.1, "-=0.8");

      t1.reverse();
      $(document).on("click", ".nav-toggle", function () {
          t1.reversed(!t1.reversed());
      });

      // Text toggle
      function toggleText(e) {
        setTimeout(function() {
          e.target.textContent == 'Infos' ? e.target.textContent = 'Close' : e.target.textContent = 'Infos'; 
        }, 1000);
      }

      var button = document.querySelector('.nav-toggle');
      button.addEventListener('click', toggleText);

      /* Loader */

       paceOptions = {
       ajax: true,
       document: true,
       eventLag: false
       };

       Pace.on('done', function() {
       $('.p').delay(500).animate({top: '30%', opacity: '0'}, 3000, $.bez([0.19,1,0.22,1]));


       $('#preloader').delay(1500).animate({top: '-100%'}, 2000, $.bez([0.19,1,0.22,1]));

       /*TweenMax.from(".title", 2, {
            delay: 1.8,
            y: 10,
            opacity: 0,
            ease: Expo.easeInOut
           })
       TweenMax.from(".nav-toggle", 2, {
            delay: 2.2,
            y: 10,  
            opacity: 0,
            ease: Expo.easeInOut
           })*/
      });