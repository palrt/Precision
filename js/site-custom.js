jQuery(document).ready(function(){
	jQuery('.menubtn').on('click', function(){
	jQuery('.header-nav-main  .main-nav').slideToggle('fast');
	if(jQuery('.header-nav-main .main-nav').is(':visible')){
		jQuery('body').toggleClass('responsive-menu-open');
	}
	});
	
	jQuery(".lazy").slick({
        infinite: true,
		dots: true,
		fade: true,
		autoplay: true,
		lazyLoad: 'ondemand',
		adaptiveHeight: true
      });
	  
	  jQuery(".smile").slick({
        infinite: true,
		dots: false,
		autoplay: true,
		fade: true,
		lazyLoad: 'ondemand',
		adaptiveHeight: true
      });
	  
	  
	  jQuery('.bla-1').YouTubePopUp();
	  
	  jQuery('.header-nav-main .main-nav li a[href^="#"]').click(function(e){
		  jQuery('html,body').animate({
			  scrollTop:jQuery(this.hash).offset().top
			},1000);
		jQuery('.header-nav-main .main-nav li a').removeClass('active');
		jQuery(this).addClass('active');
		return false;e.preventDefault();
		});
});
