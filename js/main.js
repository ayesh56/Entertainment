// SLIDE JS
const slides = document.querySelectorAll(".images")
var count = 0;

var i = 0
for (image of slides) {
    image.style.left = `${i * 100}% `;
    i += 1

}

function goprev() {
    count--;
    if (count == -1) {
        count = 4;
        slideimage()
    }
    else {
        slideimage()
    }

}

function gonext() {
    count++;
    if (count == 5) {
        count = 0;
        slideimage()
    }
    else {
        slideimage()
    }

}


function slideimage() {
    for (image of slides) {

        image.style.transform = `translateX(${-(count * 100)}% )`;
        console.log(image.style.transform)
        console.log(count)

    }
}

var currentGenre = "Genre";
var movieTitle;

function getMediaPosters(selectedGenre) {
    var countMovies = 0;
    var mediaCarouselMovies;
    currentGenre = selectedGenre;
    document.getElementById("genreText").innerHTML = selectedGenre;

    if (selectedGenre == 'All') {
        document.getElementById('movies-action').style.display = "flex";
        document.getElementById('movies-drama').style.display = "flex";
        document.getElementById('movies-scifi').style.display = "flex";
        mediaCarouselMovies = document.getElementById("film-section");
    }
    console.log(selectedGenre);
    if (selectedGenre == 'Action') {
        document.getElementById('movies-action').style.display = "flex";
        document.getElementById('movies-drama').style.display = "none";
        document.getElementById('movies-scifi').style.display = "none";
        mediaCarouselMovies = document.getElementsByClassName("film-section-card");
    }
    if (selectedGenre == 'Drama') {
        document.getElementById('movies-action').style.display = "none";
        document.getElementById('movies-drama').style.display = "flex";
        document.getElementById('movies-scifi').style.display = "none";
        mediaCarouselMovies = document.getElementsByClassName("film-section-card");
    }
    if (selectedGenre == 'Sci-Fi') {
        document.getElementById('movies-action').style.display = "none";
        document.getElementById('movies-drama').style.display = "none";
        document.getElementById('movies-scifi').style.display = "flex";
        mediaCarouselMovies = document.getElementsByClassName("film-section-card");
    }
}
function updateResults() {
    var query = document.getElementById('mysearch').value.trim().toLowerCase();
    var counter = 0;
  
    if (currentGenre == 'All' || currentGenre == 'Genre') {
      movieTitle = document.getElementsByClassName('film-name');
      console.log(movieTitle)
    }
    if (currentGenre == 'Action') {
      movieTitle = document.getElementById('movies-action').getElementsByClassName('film-name');
    }
    if (currentGenre == 'Drama') {
      movieTitle = document.getElementById('movies-drama').getElementsByClassName('film-name');
    }
    if (currentGenre == 'Sci-Fi') {
      movieTitle = document.getElementById('movies-scifi').getElementsByClassName('film-name');
    }
    for (var name = 0; name < movieTitle.length; name++) {
      var compareMovieTitles = movieTitle[name].innerHTML.toLowerCase();
      
      if (compareMovieTitles.indexOf(query) == -1) {
        movieTitle[name].closest('div.film-section-card').style.display = "none";
      } else {
        movieTitle[name].closest('div.film-section-card').style.display = "block";
        counter++;
      }
    }
  
    
  }