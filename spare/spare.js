//<a href="http://www.google.com" style="hover:text-decoration:none;">Google</a>

//$('ul').append('<li>' + title + '<img src="' + image + '">' + '</li>');

// $('ul').append('<li>' + title + '<img src="' + image + '">' + '</li>');


// .done(function(data) {
//     for(var i = 0; i < 12; i++) {
//     var title = data.results[i].abstract,
//         image = data.results[i].multimedia[3].url
       
//         console.log(title);
  
//     $('ul').append('<a class=li>' + title + '<img src="' + image + '" style="background image:' + image +'";>' + '</li>');
//      //$('ul').append('<li>' + title + '<img src="' + image + '">' + '</li>');
      
//     }  

// =================================
// =================================

// (function ($) {


//   $('#menu').on('change', function () {
//     var choice = $('#menu option:selected').val();
//     $("ul").empty();

//     var url = 'https://api.nytimes.com/svc/topstories/v2/' + choice + '.json?api-key=4802e2aa376c4a9f96db22b0dc2c01cf'



//     $.ajax({
//       url: url,
//       method: 'GET',
//     })

//       .done(function (data) {
//         $('.headlines').empty();
//         // for (var i = 0; i <= 12; i++) {
//         //   var title = data.results[i].abstract,
//         //     image = data.results[i].multimedia[4].url,
//         //     url = data.results[i].url
//         // }
//         // console.log(title);
//         // $('.headlines').append('<a style="background-image: url(' + image + ')" href="' + url + '"' + '>' + '<div class="list-image">' + title + '</div></a>');
//         // }

        

//         function test() {
//           return data.results.filter(function (item) {
//             return item.multimedia.length !== 0
            
//           }).splice(0, 12)
//         }
//         console.log(data)

//         $.each(test(), function (index, value) {
//            var imglink = '';
//            imglink = value.multimedia[4].url;
          
//           var z = '';

//               z = '<a style="background-image: url(' + imglink + ')" href="' + url + '"' + '>' + '<div class="list-image">' + value.title + '</div></a>'

//               // z = '<li class="article"><a style="background-image: url(' + imglink + ')" + 'href="' + value.multimedia.url + " + '</a><div><p>' + value.title + '</div></p></li>';

          


//   $('.headlines').append(z)
//             })

//         console.log("text", test());

//         // $.each(data.results.filter(function(item) { return item.multimedia.length !== 0 }).splice(0, 12), function(index, value) {
//         //    console.log('data.results:', value)





//         // .fail(function (err) {
//         //   throw err;
//         // });


//       })
//   })

// })(jQuery);

// $(".gif").css({
//           display: "inline",
//           Position: "absolute",
//           "animation-name": "gif",
//           "animation-duration": "2s"
//         }),