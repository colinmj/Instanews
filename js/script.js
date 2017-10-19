$(document).ready(function(){


  $('#select-article').on('change', function(){
    
    var selectedArticles =  $(this).val();
    console.log(selectedArticles);


    var url = 'https://api.nytimes.com/svc/topstories/v2/' + selectedArticles + '.json';
    url += '?' + $.param({
      'api-key': "d182746a0d6f48f4b1247f6ea849fe15"
    });
  
    $.ajax({
      url: url,
      method: 'GET',
    }).done(function(data) {
      for(var x = 0; x < 12; x++){
        var title = data.results[x].abstract;
        var photo = data.results[x].multimedia[3].url;
        var storyUrl = data.results[x].url;
        // $('.stories').append('<li class="card">' + title + '</li>');
        $('.stories').append('<a class="card">' + title + '<img src="' + photo + '"/>' + '</a>');
    }

    // $('.stories').append('<a class="card">' + title + '<img src="' + photo + '"/>' + '</a>');
      
    
      // console.log(data);
      
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




