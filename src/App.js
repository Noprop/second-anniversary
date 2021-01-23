import { useState, useEffect } from 'react';
import './App.css';
import image from './pics/homepage.jpg'
// import image from './pics/PNG image 40.png';
import Locations from './components/Locations';
import Timeline from './components/Timeline';



import * as Scroll from 'react-scroll';
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

const App = () => {
  const [render, setRender] = useState([false, 0]);

  useEffect(() => {
    if (render[0]) {
      scroll.scrollToBottom({
        duration: 1500,
        smooth: true,
      });
    }
  }, [render])

  return (
    <div className="App">
      <div className="wrapper">
        <header className="header">
          <h1>2</h1>
          <h2>Hi Hannah. Happy two years!!! ❤️ I want to be with you for a very, very long time. I figured making a website would a good idea to show you that.</h2>
          <h2>Feel free to visit this place whenever you feel like it :)</h2>
          {/* <button 
            className="headerButton" 
            onClick={() => setRender([true, 0])}
          > */}
          <button 
            className="headerButton" 
            onClick={() => setRender([true, 0])}
          >Locations</button>
          {/* </button> */}
          <button 
            className="headerButton hb2" 
            onClick={() => setRender([true, 1])}
          >Timeline</button>
          <div className="imgContainer">
            <img src={image} alt="Picture of us"/>
          </div>
        </header>
        {render[0] && (
          <main name="main">
            {render[1] === 0 
              ? <Locations name="locations" />
              : <Timeline name="timeline" />
            }
          </main>
        )}
      </div>
    </div>
  );
}

export default App;
