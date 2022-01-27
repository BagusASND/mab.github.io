// Page Loading
$(window).on('load', function(){
    $(".loading-state").fadeOut("slow");
});

// Clear search input
$("#clearSearch").click(function(){
    $("#searchField").val("");
});
$(".mClearSearch").click(function(){
    $("#mSearchField").val("");
});

// Pull down header
$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll >= 100) {
        $(".changed-header").addClass("pull-down");
    }
    else {
        $(".changed-header").removeClass("pull-down");
    }
});

// Tooltip initialize
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})