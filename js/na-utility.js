$(document).ready(function() {
  $("#ie-i18n-menu").on('click', function() {
    // if($('#n-property-navigation-bar__menu--language-selector').is(":hidden")) {
    //   $('#n-property-navigation-bar__menu--language-selector').show();
    // }
    $('#n-property-navigation-bar__menu--language-selector').toggle();
  });

  $(document).on('click', function(event) {
    if(!$(event.target).closest('#ie-i18n-menu').length
      && $('#n-property-navigation-bar__menu--language-selector').is(":visible")) {
      $('#n-property-navigation-bar__menu--language-selector').hide();
    }

    if($("#page").hasClass("n-off-canvas-menu--open")) {
      $('#search-demo-container').hide();
    } else {
      $('#search-demo-container').show();
    }
  });
});
