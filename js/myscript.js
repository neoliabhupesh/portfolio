$(".button-res").click(function(){
    $(".nav_bar").toggleClass("active");

});
var modal = document.getElementById('modal');
window.onclick = function(event) {
    if (event.target == modal) {
       $(".nav_bar").removeClass("active");
    }
};
$(".close").click(function () {
    $(".nav_bar").removeClass("active");
})
// Jquery imageslider Plugin_My Work

$('.static_web_carousel .owl-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        autoplaySpeed: 300,
        nav:true,
        dots:false,
        center:true,
        margin:0,
        navText:[
            "",
            ""
        ],
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 2,
            },
            1000: {
                items: 3,
            },
            1200: {
                items: 3,
            }
        }   
});
$('.dyn_web_carousel .owl-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        autoplaySpeed: 300,
        nav:true,
        dots:false,
        center:true,
        margin:0,
        navText:[
            "",
            ""
        ],
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 2,
            },
            1000: {
                items: 3,
            },
            1200: {
                items: 3,
            }
        }   
});
// Nav bar
$(window).scroll(function() {
    if ($(".header").offset().top > 50) {
        $(".header").addClass("top-nav-collapse");
    } else {
        $(".header").removeClass("top-nav-collapse");
    }
});
// Menu item Clicks
$(".menu li a").click(function (e) {
    e.preventDefault();
    $(".nav_bar").removeClass("active");
    var golink = $(this).attr("href").split("#");    
    $(".menu li a").css("border", "none");
    $(this).css("border-bottom", "2px solid #e53935");
    if($(window).width() > 768){
        $("html, body").animate({scrollTop: $("#" + golink[1]).offset().top - 94}, 1000);
    }else{
        $("html, body").animate({scrollTop: $("#" + golink[1]).offset().top - 83}, 1000);
    }
});
// Go to top
$("#clickfortop").click(function () {
	 $("html").animate({ scrollTop: 0 }, 'slow');
});

// My Image opacity
$(window).on("load", function () {
    $(window).scroll(function () {
        if($(this).scrollTop() > 200){
            $("#myimage").animate({opacity: "1"}, 2500);
        }
    })
});
// Skills percentage animate
$(window).scroll(function() {
    if ($(window).scrollTop() > 1100) {
        $(".skill_container .html").animate({width:"65%"}, 2500);    
        $(".skill_container .css").animate({width:"60%"}, 2500);    
        $(".skill_container .js").animate({width:"55%"}, 2500);    
        $(".skill_container .b_m").animate({width:"65%"}, 2500);    
        $(".skill_container .jq").animate({width:"60%"}, 2500);    
        $(".skill_container .ps").animate({width:"65%"}, 2500);    
    }
});

// Fixed Bottom date show
function dateandtime() {
    var currentdate = new Date();
    var y = currentdate.getFullYear();
    var mth = currentdate.getMonth();
    var month = ["Jan", "Feb", "Mar","Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    var d = currentdate.getDate();
    var dy = currentdate.getDay();
    var h = currentdate.getHours();
    var m = currentdate.getMinutes();
    var s = currentdate.getSeconds();
    if(h<=9){
        h = "0" + h;
    }
    if(m<=9){
        m = "0" + m;
    }
    if(s<=9){
        s = "0" + s;
    }
    var day = ["Sun", "Mon", "Tues", "Wed", "Thur", "Fri", "Sat"];
    document.getElementById("date").innerHTML = day[dy] + " " + d + "/" + month[mth] + "/" + y + " " + h + ":" + m + ":" + s; 

}
setInterval(dateandtime, 500);
// My Address(Google Map)
$(document).ready(function () {
        var lati = 28.581884900000002;
        var long = 77.3684189;
        var mapcanvas = document.getElementsByClassName('g_map')[0];
        var centerPos = new google.maps.LatLng(lati, long);
        // var centerPos = {lat: lati ,lng: long};
        var mapProp = { center : centerPos, zoom : 16};
        var markerProp = {position : centerPos, animation: google.maps.Animation.BOUNCE};
        var infoProp = {content : "<b>Address:</b> <br>H No. 403, Street no. 3, Sec 51, Noida"};
        function myMap() {
            // This will show map
            var map = new google.maps.Map(mapcanvas, mapProp);
            // Create a marker
            var marker = new google.maps.Marker(markerProp);
            // Add the marker to the map by using the setMap() method
            marker.setMap(map);
            // Create infowindow
            var infowindow = new google.maps.InfoWindow(infoProp);
            // Add the info window to the map over marker
            infowindow.open(map,marker);
        };
        myMap();
 
});

// Blog Pages(not Included)
$(".task_accordion .accrdn a").click(function (e) {
    e.preventDefault();
    if($(this).next().is(":hidden")){
        $(".task_accordion .accrdn p").slideUp();
        $(this).next('.content').slideDown();
    }   
});
$(".task_collapsible .collapse a").click(function (e) {
    e.preventDefault();
        $(this).next().slideToggle();
        var x = $(this).find("span");
        if (x.hasClass('caret_down')) {
                x.removeClass('caret_down').addClass('caret_up');
            }else{
                x.removeClass('caret_up').addClass('caret_down');
        }
});
// Blog dropdown(not included)
$(".nav ul li a").click(function (e) {
    e.preventDefault();
    if ($(this).next().is(":hidden")) {
        $(".nav ul li a").next().slideUp(0);
        $(this).next().slideDown();
    }else{
        $(this).next().slideUp();
    }
})
// $(document).ready(function () {
//     //Disable full page
//     $("body").on("contextmenu", function(e){
//         return false;
//     });
//     $('body').bind('cut copy paste', function (e) {
//         e.preventDefault();
//     });
// });
