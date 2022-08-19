import './App.css';
import React from 'react';
import Header from './Header';
// import Footer from './Footer';
import MainConent from './MainContent';

export default function App() {
  const [lightMode, setLightMode] = React.useState(false)

  function handleLightMode(){
    setLightMode(prevData => !prevData)
  }

  return (
    <div>
      <Header lightMode={lightMode} toggleDarkMode = {handleLightMode}/>
      <MainConent lightMode={lightMode}/>
      {/* <Footer /> */}
    </div>
  );
}
