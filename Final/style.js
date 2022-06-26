
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("on_top").style.display = "block";
    } else {
        document.getElementById("on_top").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
document.body.scrollTop = 0;
document.documentElement.scrollTop = 0;
}

$(window).on('load',function(){
    $('body').removeClass('preloading');
    $('.load').delay(300).fadeOut('fast');
  });

   //dropdown lits
//   jQuery(document).ready(function(){
//     jQuery(".dropdown").click(function(){
//         jQuery(this).find(".sub-menu1").slideToggle("500");
//     });
// });

// //modal menu
//     // Get the modal
//     var modal = document.getElementById("myModal");
        
//     // Get the button that opens the modal
//     var btn = document.getElementById("myBtn");
    
//     // Get the <span> element that closes the modal
//     var span = document.getElementsByClassName("close")[0];
    
//     // When the user clicks the button, open the modal 
//     btn.onclick = function() {
//       modal.style.display = "block";
//     }
    
//     // When the user clicks on <span> (x), close the modal
//     span.onclick = function() {
//       modal.style.display = "none";
//     }
    
//     // When the user clicks anywhere outside of the modal, close it
//     window.onclick = function(event) {
//       if (event.target == modal) {
//         modal.style.display = "none";
//       }
//     }