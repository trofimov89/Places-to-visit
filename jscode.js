//
// function scrollToView(x) {
//   document.querySelector(x).scrollIntoView({behavior:'smooth'})
// }


// $(window).scroll(function() {
//     if ($(this).scrollTop() > 50 ) {
//         $('.scrolltop:hidden').stop(true, true).fadeIn();
//     } else {
//         $('.scrolltop').stop(true, true).fadeOut();
//     }
// });
// $(function(){$(".scroll").click(function(){$("html,body").animate({scrollTop:$(".thetop").offset().top},"1000");return false})})

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
