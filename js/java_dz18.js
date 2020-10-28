"use strict";

let numberOfFilms;
const personalMovieDB= {
    count: numberOfFilms,
    movies:{},
    actors:{},
    genres:[],
    privat: false
    
    }; 

function start(){
numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

 while(numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)){
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

 }
}

//start();

function rememberMyFilms(){
    for(let i=0; i<2; i++){
        const ask1= prompt("Один из последних просмотренных фильмов?", ""),
              ask2=prompt("На сколько оцените его?", "");
             
             if(ask1 !="" && ask2 !="" && ask1.length <50 && ask2.length <50 && ask1 !=null && ask2 !=null) 
        {personalMovieDB.movies[ask1] = ask2;}
        else {i--;}
        
        }
}

//rememberMyFilms();

function detectPersonalLevel(){
    if(personalMovieDB.count<10){
        alert("Просмотренно довольно мало фильмов");
    }else {
        if(personalMovieDB.count>=10 || personalMovieDB.count<30 ){
        alert("Вы классический зритель");
    } else if(personalMovieDB.count>=30){
        alert("Вы киноман");
    } else{
            alert("Произошла ошибка");}
        }
}

//detectPersonalLevel();

function showMyDB(hidden){
    if(!hidden){
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.privat);

function writeYourGenres(){
    for(let i=1; i<=3; i++){
        personalMovieDB.genres[i-1] = prompt(`Ваш любимый жанр под номером ${i}`);
}
}

writeYourGenres();