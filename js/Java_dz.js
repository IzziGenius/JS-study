"use strict";

const numberOfFilms=+prompt("Сколько фильмов вы уже посмотрели?", "");


const personalMovieDB= {
count: numberOfFilms,
movies:{},
actors:{},
genres:[],
privat: false

};

const ask1= prompt("Один из последних просмотренных фильмов?", ""),
 ask1$2=prompt("На сколько оцените его?", ""),
 ask2= prompt("Один из последних просмотренных фильмов?", ""),
 ask2$2=prompt("На сколько оцените его?", "");

personalMovieDB.movies[ask1] = ask1$2;
personalMovieDB.movies[ask2] = ask2$2;


console.log(personalMovieDB);