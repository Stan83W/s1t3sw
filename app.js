/* List */

var $cursor = $(".cursor"),
        $overlay = $(".project-list a");

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

      var flag = false;
      $($overlay).mousemove(function() {
        flag = true;
        TweenLite.to($cursor, 0.3, { scale: 1, autoAlpha: 1 });
        $($overlay).on("mousemove", moveCircle);
      });

      $($overlay).mouseout(function() {
        flag = false;
        TweenLite.to($cursor, 0.3, { scale: 0.1, autoAlpha: 0 });
      });

      /* Toggle*/

      TweenMax.from(".navbar", 2, {
          left: "-20%",
          ease: Expo.easeInOut,
          delay: 0.4,
      });

      var t1 = new TimelineMax({ paused: true });
      t1.to(".nav", 1.8, {
          width: "100%",
          ease: Expo.easeInOut,
      });

      t1.staggerTo(".nav-item a", 0.6, { top: "0px", ease: Expo.easeInOut }, 0.1, "-=0.8");

      t1.reverse();
      $(document).on("click", ".nav-toggle", function () {
          t1.reversed(!t1.reversed());
      });

      $(document).on("click", ".nav-item a", function () {
          t1.reversed(!t1.reversed());
      });

      /* Loader */

       paceOptions = {
       ajax: true,
       document: true,
       eventLag: false
       };

       Pace.on('done', function() {
       $('.p').delay(500).animate({top: '30%', opacity: '0'}, 3000, $.bez([0.19,1,0.22,1]));


       $('#preloader').delay(1500).animate({top: '-100%'}, 2000, $.bez([0.19,1,0.22,1]));

       TweenMax.from(".title", 2, {
            delay: 1.8,
                 y: 10,
                 opacity: 0,
                 ease: Expo.easeInOut
           })
      });