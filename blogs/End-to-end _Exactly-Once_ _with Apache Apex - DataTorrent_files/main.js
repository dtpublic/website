

jQuery(document).ready(function() {


    jQuery(document).foundation();


    jQuery(".blog-author-single").prependTo(".fusion-meta-info-wrapper");


    /*
    `````````````````````````````````````````
    ````````````````````````````````````````
    ````````````````````````````````````````` INIT HOME SWIPER
    */
    var homeSwiper = new Swiper('.topper__banner-swiper', {
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        pagination: '.swiper-pagination',
        paginationClickable: true,
        autoplay: 10000,
        speed: 1500,
        autoplayDisableOnInteraction: false,
        loop: true
    });
    /*
    `````````````````````````````````````````
    ````````````````````````````````````````
    ````````````````````````````````````````` STICKY NAV LOGO AND DOWNLOAD
    */
    jQuery(function() {

        jQuery(".sticky-header").hide();

        jQuery(document).on('scroll', function() {
            //add sticky app download bar on apphub page
            if(jQuery('body.page-id-315').length) {
                if(jQuery('.sticky-app-target').length == 0) return;
                if(jQuery(this).scrollTop()>=jQuery('.sticky-app-target').position().top){
                    jQuery(".sticky-app").show();
                } else {
                    jQuery(".sticky-app").hide();
                }
                return;
            }

            if(jQuery(this).scrollTop()>=jQuery('.sticky-header-target').position().top){
                jQuery(".sticky-header").show();
                //alert("asd");
            } else {
                jQuery(".sticky-header").hide();

            }
        })
    })

    /*
    `````````````````````````````````````````
    ````````````````````````````````````````
    ````````````````````````````````````````` TOGGLE MENU ICON FOR MOBILE
    */
    jQuery("button.menu-icon").on("click", function () {
        if (jQuery(this).parent().hasClass("nav__opened")) {
            //closed 
            jQuery(this).parent().removeClass("nav__opened");
        } else {
            //open
            jQuery(this).parent().addClass("nav__opened");
        }
    });
    /*
    `````````````````````````````````````````
    ````````````````````````````````````````
    ````````````````````````````````````````` NEWSLETTER
    */
    jQuery(function() {
        jQuery(".footer__newsletter-signup").hide();
        jQuery(".footer__newsletter-btn").click(function() {
            jQuery(".footer__newsletter-btn").hide();
            jQuery(".footer__newsletter-signup").show();
        });
    });
    /*
    `````````````````````````````````````````
    ````````````````````````````````````````
    ````````````````````````````````````````` SMOOTH SCROLL
    */
    jQuery(function() {
        jQuery('body').smoothScroll({
          delegateSelector: '.topper__sticky-nav a'
        });
    });

    jQuery('.video_modal').on('hidden.bs.modal', function () {
        try {
            var div = jQuery("#video_modal_yt");
            var iframe = div.find("iframe")[0].contentWindow;
            func = 'pauseVideo';
            iframe.postMessage('{"event":"command","func":"' + func + '","args":""}', '*');
        }
        catch(errMess) {
            console.log(errMess);
        }
    });

    /*
    `````````````````````````````````````````
    ````````````````````````````````````````
    ````````````````````````````````````````` BLOG CATEGORY TABS
    */
    jQuery(function(){
        jQuery('.tab-all, .tab-technical, .tab-business').click(function(){
            if(jQuery(this).hasClass('selected')) {
                return false;
            } else {
                jQuery(this).addClass('selected');
                jQuery(this).siblings().removeClass('selected');
            }
        })
    });

    jQuery(function(){
    path = window.location.pathname;
    if(/^\/blog\/category\/technical\//.test(path)){
        jQuery('.tab-technical').addClass('selected');
        jQuery('.tab-technical').siblings().removeClass('selected');
    } else if(/^\/blog\/category\/business\//.test(path)){
        jQuery('.tab-business').addClass('selected');
        jQuery('.tab-business').siblings().removeClass('selected');
    }
 });

    /*
    `````````````````````````````````````````
    ````````````````````````````````````````
    ````````````````````````````````````````` VIDEO BACKGROUND
    */
    try {
        jQuery('.jquery-background-video').bgVideo({fadeIn: 2000});
    }
    catch (err) {
        //
    }
	/*
	`````````````````````````````````````````
	````````````````````````````````````````
    ````````````````````````````````````````` MATCH HEIGHT`
	*/
	// jQuery(function() {
	// 	jQuery('.equal-height').matchHeight({
 //            byRow: false
 //        });
	// });

    jQuery('.equal-height-container').each(function() {
        jQuery(this).children('.equal-height').matchHeight({
            byRow: false
        });
    });

    jQuery('div.fusion-one-third.equal-height .fusion-column-wrapper').matchHeight({
        byRow: false
    });
    jQuery('.category__item').matchHeight({ byRow: false });

    jQuery('.resources__blocks.equal-height').matchHeight({ byRow: false });

    jQuery(".youtubeVideoModal").on("click", function() {
        jQuery(".course_video_modal iframe").attr("src", jQuery(this).attr("data-video-src"));
        jQuery(".video_modal h3.modal-title").html(jQuery(this).attr("data-video-name"));
        jQuery(".video_modal").modal();
    });

	// Nav submenu matching height
	// jQuery(function() {
	//     jQuery('.nav__submenu').matchHeight({
	//         target: jQuery('.nav__thirdmenu')
	//     });
	// });
	/*
	`````````````````````````````````````````
	````````````````````````````````````````` 
	````````````````````````````````````````` FAST CLICK
	*/
	jQuery(function() {
		FastClick.attach(document.body);
	});
	/*
	`````````````````````````````````````````
	````````````````````````````````````````` 
	````````````````````````````````````````` MATCH MEDIA
	*/
	match_media_mobile();
	window.addEventListener('resize', match_media_mobile );

	function match_media_mobile() {
		if (window.matchMedia("(max-width: 640px)").matches) {
			// swap footer elements 
			jQuery(".footer__right").insertBefore(".footer__left");
		}
		else {
			// swap footer elements 
			jQuery(".footer__right").insertAfter(".footer__left");
		}
	}
	/*
	`````````````````````````````````````````
	````````````````````````````````````````` 
	````````````````````````````````````````` DOT DOT DOT
	*/
	jQuery(function() {
			jQuery(".dot").dotdotdot({
				after: 'a.readmore'
		});
	});
    /*
    `````````````````````````````````````````
    ````````````````````````````````````````` 
    ````````````````````````````````````````` LIGHT SLIDER
    */
    jQuery(function() {
    	jQuery('#imageGallery').lightSlider({
    	    gallery:true,
    	    item:1,
    	    loop:true,
    	    thumbItem:6,
    	    slideMargin:0,
    	    thumbMargin:0,
    	    enableDrag: false,
    	    currentPagerPosition:'left'/*,
    	    onSliderLoad: function(el) {
    	        el.lightGallery({
    	            selector: '#imageGallery .lslide'
    	        });
    	    }   */
    	}); 
    });
    /*
    `````````````````````````````````````````
    ````````````````````````````````````````` 
    ````````````````````````````````````````` BREAKPOINTS
    */
    jQuery(function() {
        jQuery(window).setBreakpoints({
            // use only largest available vs use all available
            distinct: true, 
            // array of widths in pixels where breakpoints
            // should be triggered
            breakpoints: [
                320,
                480,
                768,
                1024
            ] 
        }); 
        // 1024
        jQuery(window).bind('exitBreakpoint1024',function() {
            // Sticky nav unstick
            jQuery(".topper__sticky-nav").unstick();
            jQuery(".topper__sticky-nav").insertAfter(".topper");
        });

        jQuery(window).bind('enterBreakpoint1024',function() {
            // Sticky nav init
            jQuery(".topper__sticky-nav").sticky({topSpacing:91});
            jQuery(".sticky-wrapper").appendTo(".topper");
        });
    });
	/*
	`````````````````````````````````````````
	````````````````````````````````````````` 
	````````````````````````````````````````` FOUNDATION
	*/

    /*
     * Replace all SVG images with inline SVG
     */
    jQuery('img.svg').each(function(){
        var $img = jQuery(this);
        var imgID = $img.attr('id');
        var imgClass = $img.attr('class');
        var imgURL = $img.attr('src');

        if (imgURL.indexOf(".svg") > 0) {

            jQuery.get(imgURL, function (data) {
                // Get the SVG tag, ignore the rest
                var $svg = jQuery(data).find('svg');

                // Add replaced image's ID to the new SVG
                if (typeof imgID !== 'undefined') {
                    $svg = $svg.attr('id', imgID);
                }
                // Add replaced image's classes to the new SVG
                if (typeof imgClass !== 'undefined') {
                    $svg = $svg.attr('class', imgClass + ' replaced-svg');
                }

                // Remove any invalid XML tags as per http://validator.w3.org
                $svg = $svg.removeAttr('xmlns:a');

                // Check if the viewport is set, if the viewport is not set the SVG wont't scale.
                if (!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
                    $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
                }

                // Replace image with new SVG
                $img.replaceWith($svg);
                //console.log("here");

            }, 'xml');
        }

    });
});

function getParameterByName(name, str) {
    if (!str) {
      return '';
    }
    var regex = new RegExp( '[?&]' + name + '=([^&#]*)'),
        results = regex.exec(str);
        return results ? results[1] : null;
}
