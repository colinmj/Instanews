'use strict';

$(document).ready(function () {

  // Activates Selectric

  $('select').selectric();

  // Display loading icon on ajax request
  $('.loading').hide();
  $(document).ajaxStart(function () {
    $('.loading').show();
    $('.foot').hide();
  });
  $(document).ajaxComplete(function () {
    $('.loading').hide();
    $('.foot').show();
  });

  // Adjusting the header for when the stories show and creating variable for each article

  $('#select-article').on('change', function () {

    $('.logo').addClass('smaller');
    $('.foot').addClass('small-foot');

    var selectedArticles = $(this).val(); // Accesses what is selected from dropdown menu

    var url = 'https://api.nytimes.com/svc/topstories/v2/' + selectedArticles + '.json';
    url += '?' + $.param({
      'api-key': "d182746a0d6f48f4b1247f6ea849fe15"
    });

    // Ajax request

    $.ajax({
      url: url,
      method: 'GET'
    }).done(function (data) {
      // var result = data.results;
      $('.stories').empty();

      // Looping and filtering the results

      $.each(data.results.filter(function (item) {
        return item.multimedia.length !== 0;
      }).splice(0, 12), function (key, value) {

        var title = value.abstract;
        var photo = value.multimedia[value.multimedia.length - 1].url;
        var storyUrl = value.url;

        // Appending to the dom

        $('.stories').append('<a href="' + storyUrl + '" class="card style="background-image: url(\'' + photo + '\');"> <div class="words"> ' + title + ' </div> </a>');
        $('.card').on('mouseover', function () {
          $(this).children().css('visibility', 'visible');
        });
        $('.card').on('mouseleave', function () {
          $(this).children().css('visibility', 'hidden');
        });
      });
    }).fail(function () {
      $('.stories').empty();
      $('.stories').prepend('<p> Sorry, there\'s been an error </p>');
      alert('No Dice');
      $('.card').css('visibility', 'hidden');
    });
  });
});