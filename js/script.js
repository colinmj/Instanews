$(document).ready(function(){

  $('.loading').hide();
  $(document).ajaxStart(function(){
    $('.loading').show();
  });
  $(document).ajaxComplete(function(){
    $('.loading').hide();
  });


  $('#select-article').on('change', function(){


    $('.logo').addClass('smaller');
    $('.foot').addClass('small-foot');
    
    var selectedArticles =  $(this).val(); // Accesses what is selected from dropdown menu
    
    var url = 'https://api.nytimes.com/svc/topstories/v2/' + selectedArticles + '.json';
    url += '?' + $.param({
      'api-key': "d182746a0d6f48f4b1247f6ea849fe15"
    });

  
    $.ajax({
      url: url,
      method: 'GET',
    }).done(function(data) {
      // var result = data.results;
      $('.stories').empty();

    
      $.each(data.results.filter(function(item){
        return item.multimedia.length !== 0 }).splice(0, 12),
        function(key, value){
          
        var title = value.abstract;
        var photo = value.multimedia[4].url;
        var storyUrl = value.url;

        $('.stories').append('<a href="' + storyUrl + '" class="card" style="background-image: url(' + photo + ');">' + '<div class="words">' + title + '</div  </a>');
      });
    
      }).fail(function(err) {
      throw err;
    });

  });

});




// var section = [
//   'home',
//   'opinion',
//   'world',
//   'national',
//   'politics',
//   'upshot',
//   'nyregion',
//   'business',
//   'science',
//   'health',
//   'sports',
//   'arts',
//   'books',
//   'movies',
//   'theater',
//   'sundayreview',
//   'fashion',
//   'tmagazine',
//   'food',
//   'travel',
//   'magazine',
//   'realestate',
//   'automobiles',
//   'obituaries',
//   'insider'
// ];
