$('.stories').append('<a href="' + storyUrl + '" class="card" style="background-image: url(' + photo + ');">' + '<div class="words">' + title + '</div>  </a>');

$('.stories').append(`<a href="${storyUrl}" class="card style="background-image: url('${photo}');"> <div class="words"> ${title} </div> </a>`);