$(document).ready(function () {
    //replace some elements in table
    $.fn.urlReplace = function () {
        var $rows = $(".holidayOverview tr");

        $rows.each(function () {
            var $innerText = $(this).find('td:eq(0)').text();
            var $innerTextWrapper = $(this).find('td:eq(0)');
            var $innerTextClear = $innerText.substring(1);
            $($innerTextWrapper).attr('id', $innerTextClear);

            var $classText = $(this).find('td:eq(1)').text();
            var $classTextWrapper = $(this);
            $($classTextWrapper).attr('class', $classText);
        });
    }
    $.fn.urlReplace();

    //smooth scorll with top elimination
    $("a").on('click', function(event) {
  
        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
          // Prevent default anchor click behavior
          event.preventDefault();
    
          // Store hash
          var hash = this.hash;
    
          // Using jQuery's animate() method to add smooth page scroll
          // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
          $('html, body').animate({
            scrollTop: $(hash).offset().top
          }, 800, function(){
       
            // Add hash (#) to URL when done scrolling (default click behavior)
            window.location.hash = hash;
          });
        } // End if
      });
});
