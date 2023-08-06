import React from "react";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from "./Home"
import Upcoming from "./Upcoming";
import TopRated from "./TopRated";
import Popular from "./Popular";
import Searched from "./Searched";

function App(){

  
  return(
    <BrowserRouter>
    <Routes>
      <Route exact path="/" Component={Home}></Route>
      <Route exact path="/upcoming" Component={Upcoming}></Route>
      <Route exact path="/toprated" Component={TopRated}></Route>
      <Route exact path="/popular" Component={Popular}></Route>
      <Route exact path="/searched" Component={Searched}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App;