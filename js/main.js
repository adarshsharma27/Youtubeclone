const apiKey = "AIzaSyCfOrZk9XRQ2UWk7qK9r3T8xMraGAa0fPc";
const maxLimit = 20;
const maxLimit2 = 10;

$(window).on('load', function () {
  $.ajax({
    url: `https://www.googleapis.com/youtube/v3/search?part=snippet&key=${apiKey}&type=video&maxResults=${maxLimit}&q=coding`,
    method: 'GET',
    success: function (data) {
      $.each(data.items, function (key, value) {
        console.log(data);
        let html = ` <div class="col-xl-4 col-md-4 col-sm-12">
                        <div class = "product-card text-left">
                            <iframe height = "300"
                            width = "360"
                            src = "https://www.youtube.com/embed/${value.id.videoId}"
                            title = "YouTube video player"
                            frameborder = "0"
                            allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen ></iframe>
                            <div class = "product-image-txt">
                            <h3>${value.snippet.title}</h3>
                            <p>${value.snippet.description}</p>
                            </div>
                   </div>
            </div>`
        $('#food-cards').append(html);

      });
    },
    error: function (error) {
      console.log(error);
    }

  });

});

$('#search').keyup(function (event) {
  $('#food-cards').html('');
  event.preventDefault();
  searchVideo = $("#search").val();
  $.ajax({
    url: `https://www.googleapis.com/youtube/v3/search?part=snippet&key=${apiKey}&type=video&maxResults=${maxLimit2}&order=rating&q=${searchVideo}`,
    method: 'GET',
    success: function (data) {
      $.each(data.items, function (key, value) {
        let html = ` <div class="col-xl-4 col-md-4 col-sm-12">
                        <div class = "product-card text-left">
                            <iframe height = "300"
                            width = "360"
                            src = "https://www.youtube.com/embed/${value.id.videoId}"
                            title = "YouTube video player"
                            frameborder = "0"
                            allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen ></iframe>
                            <div class = "product-image-txt">
                            <h3>${value.snippet.title}</h3>
                            <p>${value.snippet.description}</p>
                            </div>
                   </div>
            </div>`
        $('#food-cards').append(html);
      });
    },
    error: function (error) {
      console.log(error);
    }

  });
});