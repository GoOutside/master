$(".menu-link").click(function(){
  $(".user_side_menu").toggleClass("active");
  $(".activity_location").toggleClass("active");
});

// $('.activity_list_item').on("click", function(event){
//    event.preventDefault();
//   $('.panel').slideToggle('fast', 0);
// });

$('.activity_list_item').on("click", function(){
  $(this).find('.panel').slideToggle('fast', 0);
});


