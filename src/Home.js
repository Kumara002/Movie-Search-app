import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import  {UserContext} from "./CreateContext";
import "./App.css";
import "./Home.css";
import icon from "./green-video-camera-13716.png";
import menu from "./menubar.png";
import "./Upcoming.css";



function Home(){
    const [data,setData]=useState("");
    
    return(
        <UserContext.Provider value={data}>
         <header>
                <img src={icon} id="icon"></img>
                <img src={menu} id="menu"></img>
                <label htmlFor="search"><img src="https://www.iconpacks.net/icons/3/free-search-icon-8922.png" id="search-icon"></img></label>
                <input id="search" placeholder="  search..." onChange={(e)=>{setData(e.target.value)}} value={data}></input>
                <Link to="/searched" > <button id="btn-enter" >Enter</button></Link>
                <span id="txt-watchlist">Watchlist</span>
                <span>Sign in</span>
                <select id="select-lang">
                    <option>en-US</option>
                    <option>french</option>
                    <option>ger</option>
                </select>

            </header>
            <body>
                <div className="home" id="top-rated">
                    <p className="txt-home"> Top Rated</p>
                    <a></a>
                </div>
                <br></br>
                <div className="home" id="popular">
                    <h1 className="txt-home"> Popular</h1>
                    <a></a>
                </div>
                <br></br>
                <div className="home" id="upcoming">
                    <p className="txt-home"> Upcoming</p>
                    <a></a>
                </div>
                <br></br>
               

                <h1 id="txt-upcoming">Upcoming</h1>
                <Link to="/upcoming"><button id="upcoming-link">List</button></Link>
                <h1 id="txt-popular">Popular</h1>
                <Link to="/popular"><button id="popular-link">List</button></Link>
                <h1 id="txt-top-rated">Top Rated</h1>
                <Link to="/toprated"><button id="top-rated-link">List</button></Link>
            </body>
            
        </UserContext.Provider>
    )
}

export default Home;