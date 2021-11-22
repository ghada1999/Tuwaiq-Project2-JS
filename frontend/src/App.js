import React from "react";
import { Route, Routes } from "react-router-dom";
// import Main from "./components/main";
import CardDash from "./components/dashboard/cardDash";

const App = () => {
  return (
    <div className="App">
      {/* <Main /> */}
      <Routes>
        {/* <Route path="/" element={<Main />} /> */}
        <Route path="/cardDash" element={<CardDash />} />
        {/* <Route path="/cardDash/:id" element={<Product />} /> */}
      </Routes>
    </div>
  );
};

export default App;
