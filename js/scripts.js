(function ($) {

  
            
    $('#menu').on('change', function () {
      var choice = $('#menu option:selected').val();
      $("ul").empty();

      $(".nyt").css({
          height: "auto",
           width:  "35%"
        }),

        $("#header").css({
          "align-items": "center",
          flex: "1 0 auto",
          height: "auto"
        });


      var url = 'https://api.nytimes.com/svc/topstories/v2/' + choice + '.json?api-key=4802e2aa376c4a9f96db22b0dc2c01cf'


      $.ajax({
        url: url,
        method: 'GET',
          success: function (d) {
            // replace div's content with returned data
            $(".gif").css("display", "inline");
        }
      })
     
         


        .done(function (data) {
          $('.headlines').empty()
            
             

          function test() {
            return data.results.filter(function (item) {
              return item.multimedia.length !== 0

            }).splice(0, 12)
          }
          console.log(data)

          $.each(test(), function (index, value) {
            var imglink = '';
            imglink = value.multimedia[4].url;

            var c = value.url

            var z = '';

            z = '<a style="background-image: url(' + imglink + ')" href="' + c + '"' + '>' + '<div class="titlebg">' + '<div class="list-title">' + value.abstract + '</div>' + '</div>' + '</a>' 

            $('.headlines').append(z)
          })
       
          console.log("text", test())
          
        })
        .fail(function() {
            $('.headlines').append('<h3>Sorry! There was a problem, please try again!</h3>')
            alert( "Content not found; Please reload the page." );
          })
          
      })
      

    
  })(jQuery);

// alert( "error" );
  