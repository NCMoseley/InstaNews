(function($){

  
  $('#menu').on('change',function(){
   var choice = $('#menu option:selected' ).val();
   $("ul").empty();

var url = 'https://api.nytimes.com/svc/topstories/v2/' + choice +'.json';
url += '?' + $.param({
  'api-key': '4802e2aa376c4a9f96db22b0dc2c01cf'
});
$.ajax({
  url: url,
  method: 'GET',
})
.done(function(data) {
  $('.headlines').empty();
  for(var i = 0; i <= 11; i++) {
  var title = data.results[i].abstract
  var image = data.results[i].multimedia[4].url
  var url = data.results[i].url
  console.log(title);
  $('.headlines').append('<a style="background-image: url(' + image + ')" href="' + url + '"' + '>'  + '<div class="list-image">' + title + '</div></a>');
  }
  
  console.log(data);  
})


.fail(function(err) {
  throw err;
});


})




})(jQuery);
