import React from "react";
import { useState,useEffect } from "react";
import {Link} from "react-router-dom";
import "./Upcoming.css";

function Upcoming(){
    const [data,setData]=useState([])
    const fetch = require('node-fetch');

const url = 'https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1';
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjZWY0NTNmNWVkOGZiZjQzYzllYzM0YWY1ZDk5YTA0YyIsInN1YiI6IjY0Y2RiNzM1MzAzYzg1MDExZGQzNGM0NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.T6Ow7bYBsFen-qIk1sQuFgq3wGvXbJl1CUOluUCQMUA'
  }
};
useEffect(()=>{
    fetch(url, options)
    .then(res => res.json())
    .then((json) => {
      console.log(json)
      const arr=(json.results)
      setData(arr)
  })
    .catch(err => console.error('error:' + err));
},[])

// data.map((key,value)=>{
//     console.log(key,value)
// })

    return(
        <>
        <header id="upcoming-header">
            <h1> Upcoming movies list... </h1>
        </header>
        <section>
            {data.map((value,key)=>{
                return (
                    <article className="movie-list" key={key}>
                        <img id="img-list" src={`https://image.tmdb.org/t/p/w500${value.poster_path}`} width="100" height="100"></img>
                         <span id="orginal-title">{value.original_title}</span>
                         <br></br>
                         <br></br>
                         <span id="overview">   Overview:{value.overview}</span>
                         <br></br>
                         <span id="release-date">Release Date:{value.release_date}</span>
                    </article>
                )
            })}
        </section>
        <footer id="upcoming-footer">
            <Link to="/"><img src="https://www.iconpacks.net/icons/3/free-icon-green-arrow-left-11383.png" id="back-btn" ></img></Link>
            <br></br>
            <span>This is coded by Kumara Murugan G</span>
        </footer>
        </>
    )
}
export default Upcoming;