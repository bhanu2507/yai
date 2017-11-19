// JavaScript Document
function quick_search(){
	/* Quik search in header on click function */
	jQuery("#quik-search-btn").click(function() {
		jQuery('.dez-quik-search').animate({'width': '100%' });
		jQuery('.dez-quik-search').delay(500).css({'left': '0'  });
    });
    jQuery("#quik-search-remove").click(function() {
        jQuery('.dez-quik-search').animate({'width': '0%' ,  'right': '0'  });
		jQuery('.dez-quik-search').css({'left': 'auto'  });
    });	
	/* Quik search in header on click function End*/
}

function magnific_popup()
{
	/* magnificPopup function */
    jQuery('.mfp-gallery').magnificPopup({
		delegate: '.mfp-link',
		type: 'image',
		tLoading: 'Loading image #%curr%...',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		},
		image: {
			tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
			titleSrc: function(item) {
				return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';
			}
		}
    });
	/* magnificPopup function end */
	
	/* magnificPopup for paly video function */		
	jQuery('.video').magnificPopup({
		type: 'iframe',
		iframe: {
			markup: '<div class="mfp-iframe-scaler">'+
					 '<div class="mfp-close"></div>'+
					 '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>'+
					 '<div class="mfp-title">Some caption</div>'+
			  		 '</div>'
		},
		callbacks: {
			markupParse: function(template, values, item) {
				values.title = item.el.attr('title');
			}
		}
	});
	/* magnificPopup for paly video function end*/
	
}

function scroll_top(){
	'use strict';
	/* page scroll top on click function */	
    jQuery("button.scroltop").click(function() {
		jQuery("html, body").animate({
            scrollTop: 0
        }, 1000);
        return false;
    })

	jQuery(window).bind("scroll", function() {
		var scroll = jQuery(window).scrollTop();
        if (scroll > 900) {
            jQuery("button.scroltop").fadeIn(1000);
        } else {
            jQuery("button.scroltop").fadeOut(1000);
        }
    });
	/* page scroll top on click function end*/
}

/* accodin open close icon change */	 	
function toggleChevron(e) {
	 jQuery(e.target)
		 .prev('.panel-heading')
		 .find("i.indicator")
		 .toggleClass('glyphicon-minus glyphicon-plus');
}

function accordian_icon()
{
	/* accodin open close icon change */	 	
	jQuery('#accordion').on('hidden.bs.collapse', toggleChevron);
	jQuery('#accordion').on('shown.bs.collapse', toggleChevron);
	/* accodin open close icon change end */
}
/* accodin open close icon change end*/	 	

/* Input Placeholder  */
function placeholderSupport()
{
	/* input placeholder for ie9 & ie8 & ie7 */
    jQuery.support.placeholder = ('placeholder' in document.createElement('input'));
	/* input placeholder for ie9 & ie8 & ie7 end*/
	
	/*fix for IE7 and IE8  */
	if (!jQuery.support.placeholder) {
		jQuery("[placeholder]").focus(function () {
			if (jQuery(this).val() == jQuery(this).attr("placeholder")) jQuery(this).val("");
		}).blur(function () {
			if (jQuery(this).val() == "") jQuery(this).val(jQuery(this).attr("placeholder"));
		}).blur();

		jQuery("[placeholder]").parents("form").submit(function () {
			jQuery(this).find('[placeholder]').each(function() {
				if (jQuery(this).val() == jQuery(this).attr("placeholder")) {
					 jQuery(this).val("");
				}
			});
		});
	}
	/*fix for IE7 and IE8 end */
}
/* Input Placeholder End */
	 
/* equal height box */	 
function equalheight(container) {

	var currentTallest = 0, 
		currentRowStart = 0, 
		rowDivs = new Array(), 
		$el, topPosition = 0;
		
		
	$(container).each(function() {

		$el = $(this);
		$($el).height('auto')
		topPostion = $el.position().top;

		if (currentRowStart != topPostion) {
			for (currentDiv = 0; currentDiv < rowDivs.length; currentDiv++) {
				rowDivs[currentDiv].height(currentTallest);
			}
			rowDivs.length = 0; // empty the array
			currentRowStart = topPostion;
			currentTallest = $el.height();
			rowDivs.push($el);
		} else {
			rowDivs.push($el);
			currentTallest = (currentTallest < $el.height()) ? ($el.height()) : (currentTallest);
		}
		for (currentDiv = 0; currentDiv < rowDivs.length; currentDiv++) {
			rowDivs[currentDiv].height(currentTallest);
		}
	});
}
/* equal height box */

/* footer fixed bottom function custom */	
function footerAlign() {
  jQuery('.site-footer').css('display', 'block');
  jQuery('.site-footer').css('height', 'auto');
  var footerHeight = jQuery('.site-footer').outerHeight();
  jQuery('.footer-fixed > .page-wraper').css('padding-bottom', footerHeight);
  jQuery('.site-footer').css('height', footerHeight);
}
/* footer fixed bottom function custom end */

/* Vertically center Bootstrap 3 modals so they aren't always stuck at the top function custom */
function reposition() {
	var modal = jQuery(this),
	dialog = modal.find('.modal-dialog');
	modal.css('display', 'block');
	
	/* Dividing by two centers the modal exactly, but dividing by three 
	 or four works better for larger screens.  */
	dialog.css("margin-top", Math.max(0, (jQuery(window).height() - dialog.height()) / 2));
}
/* Vertically center Bootstrap 3 modals so they aren't always stuck at the top function custom end*/

function appoinmentForm()
{
	jQuery("#appointment_form").submit(function(e)
	{
		jQuery('#show_appoinment_msg').show();
		jQuery('#show_appoinment_msg').html('<div class="gen alert alert-success">Submiting..</div>');
		var appoinment_firstname = $('#appoinment_firstname').val();
		var appoinment_lastname = $('#appoinment_lastname').val();
		var appoinment_date = $('#appoinment_date').val();
		var appoinment_service = $('#appoinment_service').val();
		var appoinment_detail= $('#appoinment_detail').val();
		var todo = jQuery('#todo').val();
		var formURL = jQuery(this).attr("action");
		var data = {
			appoinment_firstname:appoinment_firstname,
			appoinment_lastname:appoinment_lastname,
			appoinment_date:appoinment_date,
			appoinment_service:appoinment_service,
			appoinment_detail:appoinment_detail,
			todo:todo,
		}
		jQuery.ajax(
		{
			url : formURL,
			type: "POST",
			data : data,
			success: function (res) {
					if(res=='1'){
						jQuery('#show_appoinment_msg').html('<div class="gen alert alert-success">Thank you very much, We will notify you when we launch.</div>');
					}
					if(res=='99'){
						jQuery('#show_appoinment_msg').html('<div class="err alert alert-danger">Please enter a valid email address</div>');
					}
				}
		});
		e.preventDefault();	//STOP default action
	});	
}

function contactForm()
{
	$("#contact_form").submit(function(e)
	{
		$('#show_contact_msg').html('<div class="gen alert alert-success">Submiting..</div>');
		var username = $('#contact_name').val();
		var useremail = $('#contact_email').val();
		var commenttext = $('#contact_text').val();
		var formURL = $(this).attr("action");
		var data = {
					username:username,
					useremail:useremail,
					commenttext:commenttext,
				   }
		$.ajax(
		{
			url : formURL,
			type: "POST",
			data : data,
			success: function (res) {
					 if(res=='1'){
						$('#show_contact_msg').html('<div class="gen alert alert-success">Thank you very much, We will notify you when we launch.</div>');
					 }
		
					 if(res=='5'){
					 $('#show_contact_msg').html('<div class="err alert alert-danger">Please enter a valid email address</div>');
					 }
				}
		});
		e.preventDefault();	//STOP default action
	});
}

function file_input()
{
	/* Input type file jQuery */	 	 
	jQuery(document).on('change', '.btn-file :file', function() {
		var input = jQuery(this),
			numFiles = input.get(0).files ? input.get(0).files.length : 1,
			label = input.val().replace(/\\/g, '/').replace(/.*\//, '');
		input.trigger('fileselect', [numFiles, label]);
	});
	
	jQuery('.btn-file :file').on('fileselect', function(event, numFiles, label) {
		var input = jQuery(this).parents('.input-group').find(':text'),
			log = numFiles > 10 ? numFiles + ' files selected' : label;
	
		if (input.length) {
			input.val(log);
		} else {
			if (log) alert(log);
		}
	});
	/* Input type file jQuery end*/
	
}

function header_fix()
{
	/* Main navigation fixed on top  when scroll down function custom */		
	jQuery(window).bind('scroll', function () {
		var menu = jQuery('.sticky-header');
		if ($(window).scrollTop() > menu.offset().top) {
			menu.addClass('is-fixed');
		} else {
			menu.removeClass('is-fixed');
		}
	});
	/* Main navigation fixed on top  when scroll down function custom end*/
	
}

function masonryBox()
{
	/* masonry by  = bootstrap-select.min.js */ 
	var self = $("#masonry");
	self.imagesLoaded(function () {
		self.masonry({
			gutterWidth: 15,
			isAnimated: true,
			itemSelector: ".card-container"
		});
	});

	jQuery(".filters li").click(function(e) {
		e.preventDefault();
		var filter = $(this).attr("data-filter");
		self.masonryFilter({
			filter: function () {
				if (!filter) return true;
				return $(this).attr("data-filter") == filter;
			}
		});
	});
	/* masonry by  = bootstrap-select.min.js end */
}


/*################	End OF Function List ###################################*/
	
/* Document.ready Start */	
jQuery(document).ready(function() {
    'use strict';

	quick_search();
	
	magnific_popup();
		
		
	header_fix();

	scroll_top();
	
	accordian_icon();
	
	file_input();	
	
	footerAlign();

	placeholderSupport();

	appoinmentForm();

	contactForm();
	
	jQuery('.tp-bgimg').after("<div class='overlay-row'></div>");
	
	/* Video responsive function */	
	jQuery('iframe[src*="youtube.com"]').wrap('<div class="embed-responsive embed-responsive-16by9"></div>');
	jQuery('iframe[src*="vimeo.com"]').wrap('<div class="embed-responsive embed-responsive-16by9"></div>');	
	/* Video responsive function end*/  
	  
	/* gallery filter activation = jquery.mixitup.min.js */ 
	if (jQuery('#image-gallery-mix').length) {
		jQuery('.gallery-filter').find('li').each(function () {
			$(this).addClass('filter');
		});
		jQuery('#image-gallery-mix').mixItUp();
	};
	if(jQuery('.gallery-filter.masonary').length){
		jQuery('.gallery-filter.masonary span').on('click', function(){
			var selector = $(this).parent().attr('data-filter');
			jQuery('.gallery-filter.masonary span').parent().removeClass('active');
			jQuery(this).parent().addClass('active');
			jQuery('#image-gallery-isotope').isotope({ filter: selector });
			return false;
		});
	}
	/* gallery filter activation = jquery.mixitup.min.js */

	
	/* Reposition when a modal is shown */
	jQuery('.modal').on('show.bs.modal', reposition);
	/* Reposition when the window is resized */
	jQuery(window).on('resize', function() {
		jQuery('.modal:visible').each(reposition);
	
		equalheight('.equal-wraper .equal-col');
		footerAlign();
	});
    /* Reposition when a modal is shown end*/
	
});
/* Document.ready END */



/* Window Load START */
jQuery(window).load(function () {
	'use strict'; 
	
	masonryBox();
	
	/* Bootstrap Select box function by  = bootstrap-select.min.js */ 
	jQuery('select').selectpicker();
	/* Bootstrap Select box function by  = bootstrap-select.min.js end*/
	
	
	/* TouchSpin box function by  = jquery.bootstrap-touchspin.js */ 
	jQuery("input[name='demo_vertical2']").TouchSpin({
      verticalbuttons: true,
      verticalupclass: 'glyphicon glyphicon-plus',
      verticaldownclass: 'glyphicon glyphicon-minus'
    });
	/* TouchSpin box function by  = jquery.bootstrap-touchspin.js end*/
	
	equalheight('.equal-wraper .equal-col');
	
});
/*  Window Load END */