import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/home/Home";
import Hotel from "./pages/hotel/Hotel";
import List from "./pages/list/List";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      {/* <Routes path="/hotels" element={<List/>}/> */}
      {/* <Routes path="/hotels/:id" element={<Hotel/>}/> */}
    </Routes>
    
    </BrowserRouter>
  );
}

export default App;
