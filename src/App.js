import React from "react";
import "./App.css";
import Header from "./Header.js";
import Body from "./Body";
import BackProjectModal from "./BackProjectModal";
import GetItModal from "./GetItModal";
function App() {
  return (
    <>
      <Header />
      <Body />
      <BackProjectModal />
      <GetItModal />
    </>
  );
}

export default App;
