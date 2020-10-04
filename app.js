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