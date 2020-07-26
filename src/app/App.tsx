import React from "react";
import "./App.css";
import Header from "../component/organisms/header/index";
import ProfilePage from "../component/organisms/profile-page";
import About from "../component/organisms/about";
import Skill from "../component/organisms/skill";
import Portfolio from "../component/organisms/portfolio";
import Experience from "../component/organisms/experience";
import Education from "../component/organisms/education";
import Contact from "../component/organisms/contact/views";
import Footer from "../component/organisms/footer/views";

const App: React.FC = () => {
  return (
    <body id="top">
      <Header />

      <ProfilePage />
      <About />
      <Skill />
      {/* <Portfolio /> */}
      <Experience />
      <Education />
      <Contact />
      <Footer />
    </body>
  );
};

export default App;
