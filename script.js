$(document).ready(function() {
    $("name='teste'").each(function(index) {
      $(this).delay(500 * index).fadeIn(500);
    });
  });

