"use strict";

const numberOfFilms=+prompt("Сколько фильмов вы уже посмотрели?", "");


const personalMovieDB= {
count: numberOfFilms,
movies:{},
actors:{},
genres:[],
privat: false

}; 


for(let i=0; i<2; i++){
const ask1= prompt("Один из последних просмотренных фильмов?", ""),
      ask2=prompt("На сколько оцените его?", "");
     
     if(ask1 !="" && ask2 !="" && ask1.length <50 && ask2.length <50 && ask1 !=null && ask2 !=null) 
{personalMovieDB.movies[ask1] = ask2;}
else {i--;}

}

if(personalMovieDB.count<10){
    alert("Просмотренно довольно мало фильмов");
}else {
    if(personalMovieDB.count>=10 && personalMovieDB.count<30 ){
    alert("Вы классический зритель");
} else if(personalMovieDB.count>=30){
    alert("Вы киноман");
} else{
        alert("Произошла ошибка");}
    }



console.log(personalMovieDB);