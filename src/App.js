import susi from './logo.gif';
import './App.css';
import MyButton from './components/myButton';
import Profile from './components/profile';
import Introduction from './components/introduction';
import NavBar from './components/navBar';
import Footer from './components/footer';
import React, { useState } from 'react';

function App() {
  const navText = "Pujinnn";
  const navHeader = "ini Header navbar";

  const [getNavbarValue, setNavbarValue] = useState("");
  const changeNavbarValue = () => {
    setNavbarValue("Gweh");
  }

  // function clicked() {
  //   return alert("ah ah ah ah ~ ")
  // }

  const Paragraf = (props) => {
    return (
      <div>
        <i>Mantap Bang</i>
        <marquee>alamak jaaang</marquee>
      </div>

    )
  }

  return (
    
    <div className="App">
      <NavBar name={navText} head={navHeader} navValue={getNavbarValue}/>

      <header className="App-header margin-top-3">

        <Profile name={navText} />
        <img src={susi} alt="susi"/>
        <p>
          HALO CUY!
          <Introduction name="Bayu Ariyadi" />
        </p>
        <MyButton clicked={changeNavbarValue} />
        <Footer name={Paragraf()} />
      </header>
    </div>
  );
}

export default App;
