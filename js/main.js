(function(){
        "use strict";

        var windowWidth = $(window).width();
        var windowHeight = $(window).height();

        if(windowWidth < 1649){
          if(windowHeight < 734){
             $('.slider_are, .single_slider_content').css('min-height','740px');
          }
        }
        else if(windowWidth > 1650){
          if(windowHeight < 734){
             $('.slider_are, .single_slider_content').css('min-height','900px');
          }
        }

        // MOBILE MENU JS
        function mobileMenu(selector,dropdown){
            $(selector + '> a').on('click', function(){
                $(this).siblings(dropdown).slideToggle();
                $(dropdown).not($(this).siblings(dropdown)).slideUp();
            }).removeAttr('href');
        }

        if(windowWidth < 992){
            $('.dropdwon').hide();
            mobileMenu('.has_dropdown','.dropdwon');
        }


        $('body').scrollspy({ target: '#for_mobile' });

        // smooth scroll
        $('.navbar-nav li a').on("click", function(e) {
            var anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $(anchor.attr('href')).offset().top
            }, 1000);
            e.preventDefault();
        });

      /* accordion jquery */
      $('.panel-title > a').on('click',function(){
           //  cache selectors
           var $activeClassHolder = $('.single_acco_title');
           var $indicator = $(this).find('.material-icons.indicator');

           // toggle accodrion indicator
           $indicator.text() == 'keyboard_arrow_down' ? $indicator.text('keyboard_arrow_up') : $indicator.text('keyboard_arrow_down');
           $('.material-icons.indicator').not($indicator).text('keyboard_arrow_down');

           //  toggle active class for open accordions
           $(this).parents($activeClassHolder).toggleClass('active');
           $activeClassHolder.not($(this).parents($activeClassHolder)).removeClass('active');
      });


      // window scroll
      var offsetFromTop = $('body').hasClass('granim') ? windowHeight - 90 : 150;
      var $menuArea = $('.menu_area');
      $(window).scroll(function() {
          if($(document).scrollTop() > offsetFromTop){
               $menuArea.addClass('shrinked');
               scrollTop.fadeIn(300);
          }
          else{
               $menuArea.removeClass('shrinked');
               scrollTop.fadeOut(300);
          }
      })

      //Click event to scroll to top
      var scrollTop = $('.scroll_top');
      scrollTop.on('click', function(){
        $('html, body').animate({scrollTop : 0},800);
        return false;
      });


      //  for mobile
      if(windowWidth <= 991){
        var $slideNav = $('#for_mobile .nav');
        $slideNav.slideUp();
        $('.navbar-toggle').on('click',function(){
          $slideNav.slideToggle();
        })
      }

      // custom nav trigger function for owl casousel
      function customTrigger(slideNext,slidePrev,targetSlider){
          $(slideNext).on('click', function() {
              targetSlider.trigger('next.owl.carousel');
          });
          $(slidePrev).on('click', function() {
              targetSlider.trigger('prev.owl.carousel');
          });
      }

      /* === Screenshot Carousel === */
      var mySwiper = $('.swiper-container').swiper({
          mode:'horizontal',
          loop: true,
          speed: 400,
          effect: 'coverflow',
          autoplay: "2000",
          slidesPerView: 3,
          grabCursor: true,
          nextButton: '.nav-right',
          prevButton: '.nav-left',
          keyboardControl: true,
          coverflow: {
              rotate: 0,
              stretch: 91,
              depth: 200,
              modifier: 1,
              slideShadows : true
          }
      });

      /*========= all sliders js =========*/
      // hero slider
      $('.slider_wrapper').owlCarousel({
           loop:true,
           nav: false,
           autoplay: true,
           dots: false,
           items: 1
      });


      /* Team slider slider */
      var teamSlider = $('.team_slider');
      if( teamSlider.length){
          teamSlider.owlCarousel({
              loop:true,
              nav: false,
              autoplay: true,
              margin: 30,
              dots: false,
              responsive:{
                  0:{
                      items:1
                  },
                  480:{
                      items:2
                  },
                  767:{
                      items:2
                  },
                  991:{
                      items:3
                  },
                  1000:{
                      items:3
                  }
              }
          });

          // customTrigger team slider
          customTrigger('.team_wrapper .nav-left','.team_wrapper .nav-right', teamSlider );
      }


        /* case stidy image slider */
        $('.testimonial_slider').owlCarousel({
            loop:true,
            dots: true,
            autoplay: true,
            items: '1'
        });


        /* pricing table js*/
        var pricingTable = $('.single_pricing_wrapper');
        pricingTable.on('mouseover',function(){
            $(this).addClass('active');
            pricingTable.not($(this)).removeClass('active')
        });
        pricingTable.on('mouseleave',function(){
            $(this).removeClass('active');
            pricingTable.eq(1).addClass('active');
        });


        /*COUNTER UP*/
        $('.count_up').counterUp({
            delay: 10,
            time: 1000
        });

        /* reveal animation on viewport */
        var $revealClass = $('.reveal');
        $revealClass.css({
            'animation-name': 'none',
            'visibility': 'hidden'
        });

        $revealClass.waypoint(function(direction) {
            var animationName = $(this).attr('data-anim'),
                animDelay = $(this).attr('data-delay'),
                animDuration = $(this).attr('data-duration');

            $(this).css({
                'animation-name': animationName,
                'animation-duration': animDuration,
                '-webkit-animation-delay': animDelay,
                '-moz-animation-delay': animDelay,
                'animation-delay': animDelay,
                'visibility': 'visible'
            });
        },{
            offset: '75%'
        });

        /* preloader js */
        $(window).load(function(){
            $('.preloader_inner').fadeOut(1000);
            $('.preloader-bg').delay('500').fadeOut(1000);
        });

        // blog page js
        $('.share_icon').on('click', function(){
          $('.social_share').toggleClass('active');
        });

        
        /* Video background (Tubuler) options */
        var options = { 
            videoId: 'aPgFF2jwSmk', 
            start: 3 
        };

        /* Video version (Tubuler) Init */
        $('.video_version .wrap').tubular(options);


        // granim Inti
        if($('body').hasClass('granim')){
          var granimInstance = new Granim({
            element: '#canvas-basic',
            name: 'basic-gradient',
            direction: 'left-right',
            opacity: [1, 1],
            isPausedWhenNotInView: true,
            states : {
                "default-state": {
                    gradients: [
                        ['#2095f2', '#055fa6'],
                        ['#02AAB0', '#00CDAC'],
                        ['#DA22FF', '#9733EE']
                    ]
                }
            }
          });

          var granimInstance2 = new Granim({
              element: '#canvas-basic2',
              name: 'basic-gradient',
              direction: 'left-right',
              opacity: [1, 1],
              isPausedWhenNotInView: true,
              states : {
                  "default-state": {
                      gradients: [
                          ['#2095f2', '#055fa6'],
                          ['#02AAB0', '#00CDAC'],
                          ['#DA22FF', '#9733EE']
                      ]
                  }
              }
          });
        }

        //Demo Color Picker
        var $pickedColor = $('.color_picker ul li'),
            $body = $('body'),
            versions =  $pickedColor.map(function () {
                return $(this).data('color');
            }).toArray().join(' ');

        $pickedColor.on('click', function () {
            $body.removeClass(versions).addClass($(this).data('color'));
        });

        var $colorPicker = $('.color_picker');
        $('.color_toggler').on('click',function () {
            $colorPicker.toggleClass('open');
        });

        /* Mailchimp Init */
        $('#subscribe_form').ajaxChimp({
           /* Put you mailchimp action url link here see documentation for detail */
            url: 'http://aazztech.us15.list-manage.com/subscribe/post?u=6d0721c4beeb2a7285553dfe7&amp;id=d775d03bad'
        });

        /* Ajax mail process */
        var contactForm = $(".contact_form");
        contactForm.on('submit', function (e) {
            // var _this = $(this),
            e.preventDefault();
            var resposeMsg = $('.respone_message');

            /* Ajax request */
            $.ajax({
                url: "form-process.php",
                type: "POST",
                data: contactForm.serialize(),
                beforeSend: function () {
                    resposeMsg.html("<div class='alert alert-info'><p>Отправка ...</p></div>");
                },
                success: function (text) {
                    if (text === "success") {
                        resposeMsg.html("<div class='alert alert-success'><p><i class='fa fa-check' aria-hidden='true'></i>Сообщение было успешно отправлено.</p></div>");
                    } else {
                        if(text.length < 0){
                            resposeMsg.html("<div class='alert alert-danger'><p>Все поля обязательны!</p></div>");
                        }
                        else{
                             resposeMsg.html("<div class='alert alert-danger'><p>" + text + " обязательно!</p></div>");
                        }
                       
                    }
                }
            });
            return false;
        });
        
})(jQuery);
