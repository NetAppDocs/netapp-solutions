$(document).ready(function() {
  const MASTHEAD_OFFSET = 165;
  const SECTIONS = $("main h2, main h3");
  // PAGE NAV - Init
  if(SECTIONS.length == 0) {
    $(".page-nav-container").css('display','none');
    $("#pagenav-css").attr("disabled", "disabled");
  } else {
    $(".page-nav-title").css('display','block');
    for (var i = 0; i < SECTIONS.length; i++) {
      var sectionId = $(SECTIONS[i]).attr('id');
      var sectionName = $(SECTIONS[i]).text();
      var subClass = $(SECTIONS[i]).is("h3") ? ' page-nav__sublink' : '';
      $("#page-menu").append('<li class="page-nav-item"><a href="#'+sectionId+'" class="page-nav__link'+subClass+'">'+sectionName+'</a></li>');
    }
    $(".page-nav__link").first().addClass('page-nav__link--active');
  }

  // PAGE NAV - Click
  $(".page-nav__link").click(function(event) {
    $(".page-nav__link").removeClass('page-nav__link--active');
    var target = $(event.target);
    target.addClass('page-nav__link--active');
    location.hash = event.target.hash;
  });

  // PAGE NAV - Scroll
  $(window).on('resize scroll', function() {
    var activeSection = getActiveSection(SECTIONS, MASTHEAD_OFFSET);
    if(activeSection) {
      var activeHref = $(activeSection).attr('id');
      if(location.hash != "#"+activeHref) {
        $(".page-nav__link").removeClass('page-nav__link--active');
        $("#page-menu a[href=#"+activeHref+"]").addClass('page-nav__link--active');
        if(history.replaceState) {
          history.replaceState(null, null, "#"+activeHref);
        }
      }
    }
  });

  $(".n-pdf-button").click(function(){
      $(this).toggleClass("active");
    });
});

function getActiveSection(sections, offset) {
  var scrollPosition = $(window).scrollTop()+offset+5;
  var activeSection;
  for (var i = 0; i < sections.length; i++) {
    var el = $(sections[i]);
    var activePosition = el.offset().top;
    if(activePosition > scrollPosition) {
      break;
    }

    activeSection = sections[i];
  }

  return activeSection;
}
