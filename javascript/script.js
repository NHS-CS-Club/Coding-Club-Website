// Check jQuery
window.onload = function() {
    if (window.jQuery) {  
        // jQuery is loaded  
        console.log('Working');
    } else {
        console.log('Not yet');
     location.reload();
    }
 }
 