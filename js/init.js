(function($){
  $(function(){

    $('.sidenav').sidenav();
    $('.parallax').parallax();
    $('.collapsible').collapsible();
    $('.tooltipped').tooltip({margin: 10});
    $('.modal').modal();
    $('textarea#textarea1').characterCounter();
    $(".dropdown-trigger").dropdown({
        hover: false,
        coverTrigger: false,
        constrainWidth: false
    });

    var elem = document.querySelector('.collapsible.expandable');
    var instance = M.Collapsible.init(elem, {
        accordion: false
    });

  }); // end of document ready
})(jQuery); // end of jQuery name space
