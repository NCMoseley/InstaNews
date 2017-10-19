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
  for(var i = 0; i < 12; i++) {
  var title = data.results[i].abstract,
      image = data.results[i].multimedia[2].url
      console.log(title);
  $('ul').append('<li>' + title + '<img src="' + image + '">' + '</li>');
  // $('ul').append('<li>' + title + '<img src="' + image + '">' + '</li>');
  }  
  


  console.log(data);
})


.fail(function(err) {
  throw err;
});


})




})(jQuery);
