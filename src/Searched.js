import React from "react";
import { useState, useEffect } from "react";
import { useContext} from "react";
import {UserContext} from "./CreateContext";
import { Link } from "react-router-dom";
import "./Upcoming.css";
import "./TopRated.css";

function Searched(){
    const [data,setData]=useState([])
    const user=useContext(UserContext)
    console.log("user:",user)
    const fetch = require('node-fetch');

const url = `https://api.themoviedb.org/3/search/movie?query=${user}&include_adult=false&language=en-US&page=1`;
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
    const arr=json.results;
    setData(arr)
})
  .catch(err => console.error('error:' + err));
},[])


    return(
        <>
        <header id="upcoming-header">
            <h1>Movie List based on search criteria...</h1>
        </header>
        <section>
            {data.map((value,key)=>{
                return(
                    <article className="top-rated-list" key={key}>
                        <img id="top-rated-poster" src={`https://image.tmdb.org/t/p/w500${value.poster_path}`} width="100" height="100"></img>
                        <span id="top-rated-title">{value.title}</span>
                        <br></br>
                        <p id="top-rated-overview">Overview: {value.overview}</p>
                        <br></br>
                        <span id="top-rated-rel-date">Release Date: {value.release_date}</span>
                        <br></br>
                        <img src="https://www.iconpacks.net/icons/2/free-icon-coin-2159.png" width="20" height="20" style={{"borderRadius":"5px","marginBottom":"5px"}}></img>
                        <span id="top-rated-vote-avg"> Rating: {value.vote_average}</span>
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
export default Searched;