//Preload images 
	function preload(arrayOfImages) {
					$(arrayOfImages).each(function() {
					$('<img/>')[0].src = this;
		});
	};
preload(['images/backToSchool1_products.jpg', 'images/facebook.png', 'images/twitter.png', 'images/pintrest.png', 'images/navigationTitle.png', 'images/navigationSides.png', 'images/airWalk_slide2.jpg', 'images/navigationBottom.png', 'images/purple-paint1.gif', 'images/white-paint2.gif', 'images/liveOnTheWedgeBkrd.jpg', 'images/purple-paint1.gif', 'images/airWalk-bg.jpg', 'images/purple-paint7.gif', 'images/highLightYourGame.png', 'images/girlOnTheGo.png', 'images/liveOnTheWedge3.jpg', 'images/liveOnTheWedge.png', 'images/lookFlatFabulous4.jpg', 'images/lookFlatOutFabulous.png', 'images/airWalk5.jpg', 'images/aBrightIdea.png', 'images/rockANewLook.png', 'images/brash6.jpg', 'images/uniformShoes.png', 'images/uniform1.png', 'images/champion8.jpg', 'images/americanBallet9.jpg', 'images/scoreSomeFreshKicks.png', 'images/backToSchoolPreview10.jpg'  ]);


		//Cache selectors 
		$sel = {
			flexSlider: $('.flexslider'), 
			navigation: $('#navigation'), 
			clickNavigationLink: $("#sidesNav a")
		}

		//Flex slider 
		$sel.flexSlider.flexslider({
			useCSS: false
		});
		//varibles 
		//Switch the navigation to be fixed
		var topOfNavigation = $sel.navigation.offset().top - 20, 
			$window = $(window);

		//Fix the navigation if user comes from smaller screen
		fixNavigationHorzintalScroll();

		//Testing for resizing of window. If true		
		$window.resize(function() {
		 // fire off the funciton to test if the body window is smaller then the window
    		fixNavigationHorzintalScroll ();

		});

			function removeNavHighLightStyle() { 
			 	$("#navigation li").removeClass('addBackroundForInViewElement');

			 }

			 if(elementInViewport(document.getElementById('firstSlide')) == true) {
					removeNavHighLightStyle();
					$('#firstSlideLink').addClass('addBackroundForInViewElement');
				}
			$window.scroll(function(){
				if ($window.scrollTop() >= topOfNavigation) {
					$sel.navigation.addClass('fixedNavigation');
				}

				else {
				$sel.navigation.removeClass('fixedNavigation');
				}

		
				if(elementInViewport(document.getElementById('firstSlide')) == true) {
					removeNavHighLightStyle();
					$('#firstSlideLink').addClass('addBackroundForInViewElement');
				}
				else if(elementInViewport(document.getElementById('secondSlide')) == true) {
					removeNavHighLightStyle();
					$('#secondSlideLink').addClass('addBackroundForInViewElement');
				}
				else if(elementInViewport(document.getElementById('thirdSlide')) == true) {
					removeNavHighLightStyle();
					$('#thirdSlideLink').addClass('addBackroundForInViewElement');
				}
				else if(elementInViewport(document.getElementById('fourthSlide')) == true) {
					removeNavHighLightStyle();
					$('#fourthSlideLink').addClass('addBackroundForInViewElement');
				}
				else if(elementInViewport(document.getElementById('fifthSlide')) == true) {
					removeNavHighLightStyle();
					$('#fifthSlideLink').addClass('addBackroundForInViewElement');
				}
				else if(elementInViewport(document.getElementById('sixthSlide')) == true) {
					removeNavHighLightStyle();
					$('#sixthSlideLink').addClass('addBackroundForInViewElement');
				}
				else if(elementInViewport(document.getElementById('seventhSlide')) == true) {
					removeNavHighLightStyle();
					$('#seventhSlideLink').addClass('addBackroundForInViewElement');
				}
				else if(elementInViewport(document.getElementById('eightNineSlide')) == true) {
					removeNavHighLightStyle();
					$('#eightNineSlideLink').addClass('addBackroundForInViewElement');
				}
				else {
					removeNavHighLightStyle();
				}

				
			
			});

			$sel.clickNavigationLink.click(function(event){
				event.preventDefault();	
				var id = this.id, 
				scrollTo = $('#' + id + 'Slide').offset().top;

				$('body, html').animate({
					scrollTop: scrollTo
				   }, 500 //Set the time for scrolling, it is in milliseconds. 
				);	
			});

	function fixNavigationHorzintalScroll () {
		if (document.body.scrollWidth > document.body.clientWidth) {
        	$sel.navigation.addClass('scrollHorziantalFix');
    		}
    	else {
    		$sel.navigation.removeClass('scrollHorziantalFix');
    	}
	}

	//Test if element is within view
	function elementInViewport(el) {
	   var top = el.offsetTop,
	   left = el.offsetLeft,
	   width = el.offsetWidth,
	   height = el.offsetHeight;

	  while(el.offsetParent) {
	    el = el.offsetParent;
	    top += el.offsetTop;
	    left += el.offsetLeft;
	  }

	  return (
	    top < (window.pageYOffset + window.innerHeight) &&
	    left < (window.pageXOffset + window.innerWidth) &&
	    (top + height) > window.pageYOffset &&
	    (left + width) > window.pageXOffset
	  );
	}