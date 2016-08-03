
$(document).ready(function(){

	$("a[rel=popover]").popover({
		html: true,
		trigger: "hover",
		placement: "bottom",
		content: '<img src="images/manhattan-run-map.jpg" class="media-object" alt="Sample Image" width="250" height="auto">'
	});


    $('#adventure-cali-thumbnail-pic, #adventure-cali-thumbnail-caption').hover(function() {
        $("#adventure-cali-thumbnail-pic, #adventure-cali-thumbnail-caption").addClass('adventure-thumbnail-transition');      
    }, function() {
        $("#adventure-cali-thumbnail-pic, #adventure-cali-thumbnail-caption").removeClass('adventure-thumbnail-transition'); 
    });


    $('#adventure-shanghai-thumbnail-pic, #adventure-shanghai-thumbnail-caption').hover(function() {
        $("#adventure-shanghai-thumbnail-pic, #adventure-shanghai-thumbnail-caption").addClass('adventure-thumbnail-transition');
    }, function() {
        $("#adventure-shanghai-thumbnail-pic, #adventure-shanghai-thumbnail-caption").removeClass('adventure-thumbnail-transition'); 
    });

    $('#adventure-hongkong-thumbnail-pic, #adventure-hongkong-thumbnail-caption').hover(function() {
        $("#adventure-hongkong-thumbnail-pic, #adventure-hongkong-thumbnail-caption").addClass('adventure-thumbnail-transition');      
    }, function() {
        $("#adventure-hongkong-thumbnail-pic, #adventure-hongkong-thumbnail-caption").removeClass('adventure-thumbnail-transition'); 
    });

     $('#adventure-taiwan-thumbnail-pic, #adventure-taiwan-thumbnail-caption').hover(function() {
        $("#adventure-taiwan-thumbnail-pic, #adventure-taiwan-thumbnail-caption").addClass('adventure-thumbnail-transition');      
    }, function() {
        $("#adventure-taiwan-thumbnail-pic, #adventure-taiwan-thumbnail-caption").removeClass('adventure-thumbnail-transition'); 
    });



$( ".project-thumbnail-1 , .project-thumbnail-2" )
    .mouseenter(function() {
        $(this).find('.caption').removeClass("rollOut").addClass("rollIn").show();
        $(this).find('.caption h4').addClass("slideInLeft");
        $(this).find('.caption a').addClass("slideInRight");
    })
    .mouseleave(function() {
        $(this).find('.caption').removeClass("rollIn").addClass("rollOut");
        $(this).find('.caption h4').removeClass("slideInLeft");
        $(this).find('.caption a').removeClass("slideInRight");
});   


$( ".project-thumbnail-3, .project-thumbnail-4" )
    .mouseenter(function() {
        $(this).find('.caption').removeClass("hinge").addClass("fadeIn").show();
        $(this).find('.caption h4').addClass("slideInLeft");
        $(this).find('.caption p').addClass("bounceInUp");
        $(this).find('.caption a').addClass("slideInRight");
        $(this).find('img').addClass("pulse");
    })
    .mouseleave(function() {
        $(this).find('.caption').removeClass("fadeIn").addClass("hinge");
        $(this).find('.caption h4').removeClass("slideInLeft");
        $(this).find('.caption p').removeClass("bounceInUp");
        $(this).find('.caption a').removeClass("slideInRight");
        $(this).find('img').removeClass("pulse");
});    


})


