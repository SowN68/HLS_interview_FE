import React from "react";
import Header from "./components/Header/Header";
import JokeContent from "./components/JokerContent/JokeContent";
import Footer from "./components/Footer/Footer";
function App() {
  return (
       <React.Fragment>
            <Header />  
            <JokeContent />
            <Footer/>
    </React.Fragment>
  );
}

export default App;
