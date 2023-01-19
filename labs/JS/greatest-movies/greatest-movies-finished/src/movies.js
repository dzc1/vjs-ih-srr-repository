// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(movies) {
  // Iteration 1.1 - Mapiamos el array de movies para sacar cada director del array  :)
  const directorsListUnfiltered = movies.map((movie) => movie.director);

  // Uncomment para ver lista de directores duplicados
  //return directorsListUnfiltered;

  // Bono - queremos es limpiar el array de los nombres de directores duplicados :)
  // esto lo hacemos con el metodo filter()
  const directorsListFiltered = directorsListUnfiltered.filter(
    (director, index, paramThree, paramFour) => {
      //   console.log(director);
      //   console.log(index);
      //   console.log(paramThree);
      //   console.log(paramFour);
      return directorsListUnfiltered.indexOf(director) === index;
    }
  );
  // Final return con directores lumpios/filtrados
  return directorsListFiltered;
}
console.log("Iteration 01");
// console.log(getAllDirectors(movies));
// console.table(getAllDirectors(movies));
console.log("-----------------------------");
// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
//function howManyMovies(movies) { }
const howManyMovies = (movies) => {
  // part 1
  // filtramos el array original de pelis y nos creamos un "shallow" copy.Para filtrar usaremos 1 param que  va a hacer la peli y dentro del filtro usaremos notacion de punto "." para entrar y buscar / filtrar las claves especificas dentro del array.
  const stevenDramaFilteredMovies = movies.filter((movie) => {
    return (
      movie.director === "Steven Spielberg" && movie.genre.includes("Drama")
    );
  });
  // return stevenDramaFilteredMovies

  // part 2
  // le agregamos la prop length porque nos pide que busquemos por la longitud del array nuevo que nos hemos creado

  return stevenDramaFilteredMovies.length;
};
console.log("Iteration 02");
console.table(howManyMovies(movies));
console.log("-----------------------------");

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
const scoresAverage = (movies) => {
  // part 1
  // Verificacion inicial del array con un buen aproach de programacion, tomamos en cuenta el caso de uso ficticio que se presente un array vicio y no ejecutamos la matematica.
  if (movies.length === 0) return 0;
  // part 2
  // usando reduce() method con 2 params y un valor Inical!
  // const totalScoreSkeleton = movies.reduce((accumulator, currentValue) => {}, 0);
  const totalScore = movies.reduce((accumulator, currentValue) => {
    if (currentValue.score) {
      return accumulator + currentValue.score;
    } else {
      return accumulator;
    }
  }, 0);

  // Part 3 - variable - save logic - math logic + toFixed(2) - para pasar 2 pocisiones decimales
  const averageScoreString = (totalScore / movies.length).toFixed(2);

  return Number(averageScoreString);
};
console.log("Iteration 03");
console.log(scoresAverage(movies));
console.log("-----------------------------");

// Iteration 4: Drama movies - Get the average of Drama Movies
const dramaMoviesScore = (movies) => {
  // part 0 -
  // Verificacion inicial del array con un buen aproach de programacion, tomamos en cuenta el caso de uso ficticio que se presente un array vicio y no ejecutamos la matematica.
  if (movies.length === 0) return 0;

  // part 2
  // Vamos a usar el filter() para filtrar el array de pelis y utilizamos notacion de punto para segmentar el genero de drama.
  // Recordemos que el genero de drama es un array como tal, entonces dependeamos de un metodo que se encargue de "buscar" el genero "drama" por nosotros.
  const dramaMoviesUsingIncludes = movies.filter((movie) =>
    movie.genre.includes("Drama")
  );

  // part 3
  // Reutilizacion de la funcion scoresAverage() + una de las variables definidas arriba
  const averageDramaScores = scoresAverage(dramaMoviesUsingIncludes);

  // part 4 - finaliza with style :)
  return averageDramaScores;
};
console.log("Iteration 04");
console.log(dramaMoviesScore(movies));
console.log("-----------------------------");

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
const orderByYear = (movies) => {
  // part 1
  // Queremos crear un "shallow" copy del array original :) - usemos el metodo map() === "crear un shallow copy" :)
  const movieArrayCopy = movies.map((movie) => {
    return movie;
  });
  // part 2
  // usemos el sort() para pdoer sortear :)
  movieArrayCopy.sort((movieA, movieB) => {
    if (movieA.year > movieB.year) return movieA.year - movieB.year;
    if (movieA.year < movieB.year) return movieA.year - movieB.year;
    else return movieA.title.localeCompare(movieB.title);
  });
  // part 3
  // return with style
  return movieArrayCopy;
};
console.log("Iteration 05");
//console.table(orderByYear(movies));
console.log("-----------------------------");

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
const orderAlphabetically = (movies) => {
  return movies
    .map((movie) => movie.title) // mappeamos cada pocision del array
    .sort() // usamos este metodo para ordenar alfabeticamente, esto automatico por eso usamos el metodo.
    .slice(0, 20); // cortamos desde la position 0 hasta la 20 - 20 pelis
};
console.log("Iteration 06");
console.table(orderAlphabetically(movies));
console.log("-----------------------------");

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
//Part 001
const convertHours = (hourString) => {
  let calculateHour = hourString.split("h");
  return calculateHour[0] * 60;
};
// Part 002
const convertMinutes = (minuteString) => {
  let calculateMinutes = minuteString.split("min");
  return Number(calculateMinutes[0]);
};
// Part 003
const convertDuration = (duration) => {
  let timePieces = duration.split(" ");

  let minutes = timePieces.reduce((sum, onePiece) => {
    if (onePiece.includes("h")) {
      return sum + convertHours(onePiece);
    }
    return sum + convertMinutes(onePiece);
  }, 0);

  return minutes;
};
// Part 004
const turnHoursToMinutes = (movies) => {
  let newCentArray = movies.map((movie) => {
    let newMovie = {};
    newMovie.title = movie.title;
    newMovie.year = movie.year;
    newMovie.director = movie.director;
    newMovie.duration = convertDuration(movie.duration);
    newMovie.genre = movie.genre;
    newMovie.rate = movie.rate;

    return newMovie;
  });

  return newCentArray;
};
console.log("Iteration 07");
console.table(turnHoursToMinutes(movies));
console.log("-----------------------------");

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
const bestYearAvg = (movies) => {
  if (!movies.length) return null;

  let masterObject = {};

  movies.forEach((movie) => {
    if (!masterObject[movie.year]) {
      masterObject[movie.year] = [movie];
    } else {
      masterObject[movie.year].push(movie);
    }
  });

  let highest = 0;
  let theActualYear;
  for (let theYear in masterObject) {
    if (scoresAverage(masterObject[theYear]) > highest) {
      highest = scoresAverage(masterObject[theYear]);
      theActualYear = theYear;
    }
  }
  return `The best year was ${theActualYear} with an average score of ${highest}`;
};
console.log("Iteration 08");
console.table(bestYearAvg(movies));
console.log("-----------------------------");
