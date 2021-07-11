$(function(){
  $("header").load("static/templates/header.html");
});

$(function(){
  $("footer").load("static/templates/footer.html");
});

jQuery.extend({
  getQueryParameters: function(str) {
    return (str || document.location.search).replace(/(^\?)/, '').split("&").map(function(n) {
      return n = n.split("="), this[n[0]] = n[1], this
    }.bind({}))[0];
  }
});
// Change background color via query params for documentation purposes
$(document).ready(function() {
  var example_background_color = $.getQueryParameters()['example-background-color'];
  if (example_background_color !== undefined) {
    $("body").css({
      backgroundColor: '#' + example_background_color
    });
  }
});
