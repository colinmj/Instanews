## Instanews

I've replicated the designer's vision for Instanews, an app that accesses top stories from The New York Times. Using the New York Times API, I've selectively accessed the JSON file to include 12 stories with photographs.

## Getting Started

There is a drop down menu with the text 'Sections...' that displays the available sections of stories. Selecting a section will initiate the ajax request, and 12 stories will populate the document. They only display a photo initially, but will display the abstract upon hover. The photos as well as the text are links, so clicking on either will send the user directly to the story on the New York Times website.

## Built With

* HTML5
* CSS3
* Sass
* JavaScript
* jQuery 3.2.1
* Selectric
* Gulp
* Es Lint
* Pretty Error

Mark up in HTML 5 with the styling initially done in CSS3 and then refactored to SCSS. I've installed Gulp, which is checking my SCSS files and my JS files for syntax errors with ES Lint(for js) and Pretty Error (for Sass) before compiling them into minified files, with the SCSS also including vendor prefixes. Using the New York Times API, I've written an AJAX request with jQuery to return a JSON file of top stories from the site. I've filtered through the data and only included stories that include images, and also set it to only include 12 stories. These stories are appended to the DOM as links so that they link directly to the site. The abstracts from the stories only appear when the images are moused over. Instanews is responsively designed, displaying one story per line in its mobile version, 2 per line in tablet size and 4 per line for desktop. There is an alert if there is an error.

## Learnings


##Authors

Colin Matson-Jones

##Awknowledgements

I went to stack overflow for the ajaxStart and ajaxComplete functions, and worked it out with the help of fellow developer Sean Stobo.