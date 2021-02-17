// class Movie{
//     constructor(movie,genre,director,releaseYear,rating){
//         this.movie = movie;
//         this.genre = genre;
//         this.director = director;
//         this.releaseYear = releaseYear;
//         this.rating = rating;
//     }

//     overview(){
//         console.log(`${this.movie}, a ${this.genre} film directed by ${this.director} was released in ${this.releaseYear}. It received a rating of ${this.rating}`);
//     }
// }


// const movie1 = new Movie('good','action','someone','2012',10);
// movie1.overview();


//========== SOLUTION WITHOUT CLASS KEYWORD ==========//

function Movie(movie,genre,director,releaseYear,rating){
    this.movie = movie;
    this.genre = genre;
    this.director = director;
    this.releaseYear = releaseYear;
    this.rating = rating;
}

Movie.prototype.overview = function overview(){
    console.log(`${this.movie}, a ${this.genre} film directed by ${this.director} was released in ${this.releaseYear}. It received a rating of ${this.rating}`);
}

const movie2 = new Movie('bad','comedy','somebody','2102',0);
movie2.overview();