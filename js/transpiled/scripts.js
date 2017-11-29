'use strict';

(function ($) {

  var $headlines = $('.headlines');

  $('#menu').on('change', function () {
    var choice = $('#menu option:selected').val();

    $(".nyt").css({
      height: "auto",
      width: "35%"
    }), $("#header").css({
      "align-items": "center",
      flex: "1 0 auto",
      height: "auto"
    });

    var url = 'https://api.nytimes.com/svc/topstories/v2/' + choice + '.json?api-key=4802e2aa376c4a9f96db22b0dc2c01cf';

    $.ajax({
      url: url,
      method: 'GET',
      success: function success(d) {

        $(".gif").css("display", "inline");
      }
    }).done(function (data) {
      $headlines.empty();

      function test() {
        return data.results.filter(function (item) {
          return item.multimedia.length !== 0;
        }).splice(0, 12);
      }
      console.log(data);

      $.each(test(), function (index, value) {
        var imglink = '';
        imglink = value.multimedia[value.multimedia.length - 1].url;

        var c = value.url;

        var z = '';

        z = '<a style="background-image: url(' + imglink + ')" href="' + c + '"><div class="titlebg"><div class="list-title">' + value.abstract + '</div></div></a>';

        $headlines.append(z);
      });

      console.log("text", test());
    }).fail(function () {
      $headlines.append('<h3>Sorry! There was a problem, please try again!</h3>');
      alert("Content not found; Please check that you have entered a valid category.");
    });
  });

  $('#menu').selectric();

  $('#bt_add_val').on('click', function (e) {
    e.preventDefault();

    var value = $('#add_val').val().toLowerCase();

    console.log(value);

    $('#menu').append('<option value="' + value + '">' + value + '</option>');

    $('#menu').selectric('refresh');

    $('#add_val').closest('form').find("input[type=text], textarea").val("");
  });
})(jQuery);