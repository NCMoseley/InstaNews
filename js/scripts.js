(($ => {



let $headlines = $('.headlines');

  $('#menu').on('change', () => {
    const choice = $('#menu option:selected').val();

    $(".nyt").css({
      height: "auto",
      width: "35%"
    }),

      $("#header").css({
        "align-items": "center",
        flex: "1 0 auto",
        height: "auto"
      });

    const url = `https://api.nytimes.com/svc/topstories/v2/${choice}.json?api-key=4802e2aa376c4a9f96db22b0dc2c01cf`;

    
    $.ajax({
      url,
      method: 'GET',
      success(d) {
      
        $(".gif").css("display", "inline");
      }
    })

      .done(data => {
        $headlines.empty()

        function test() {
          return data.results.filter(item => item.multimedia.length !== 0).splice(0, 12)
        }
        console.log(data)

        $.each(test(), (index, value) => {
          let imglink = '';
          imglink = value.multimedia[value.multimedia.length - 1].url;

          const c = value.url;

          let z = '';

          z = `<a style="background-image: url(${imglink})" href="${c}"><div class="titlebg"><div class="list-title">${value.abstract}</div></div></a>`

          $headlines.append(z)
        })

        console.log("text", test())

      })
      .fail(() => {
        $headlines.append('<h3>Sorry! There was a problem, please try again!</h3>')
        alert("Content not found; Please check that you have entered a valid category.");
      })

  })

  $('#menu').selectric();

  $('#bt_add_val').on('click', e => {
    e.preventDefault();

    const value = $('#add_val').val().toLowerCase();

    console.log(value);

    $('#menu').append(`<option value="${value}">${value}</option>`);

    $('#menu').selectric('refresh');

    $('#add_val').closest('form').find("input[type=text], textarea").val("");

  });
}))(jQuery);
