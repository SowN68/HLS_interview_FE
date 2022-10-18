import React from "react";
import "./App.css"
import Navigation from "./components/Header/Navigation";
import Header from "./components/Header/Header";
import JokeContent from "./components/JokerContent/JokeContent";
import Footer from "./components/Footer/Footer";
function App() {
  return (
       <div className="App">
            <Navigation/>
            <Header />  
            <JokeContent />
            <Footer/>
    </div>
  );
}

export default App;
