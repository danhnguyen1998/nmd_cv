import React from "react";
import "./App.css";
import Header from "../component/organisms/header/index";
import ProfilePage from "../component/organisms/profile-page";
import About from "../component/organisms/about";
import Skill from "../component/organisms/skill";
import Portfolio from "../component/organisms/portfolio";

const App: React.FC = () => {
  return (
    <>
      <Header />
      <div>
        <ProfilePage />
        <About />
        <Skill />
        <Portfolio />
      </div>
      
    </>
  );
};

export default App;
