import React from "react";
import "./App.css";
import { Container, AppDiv } from "./styles";
import About from "../components/organisms/About";
import LoadingOverlay from "../components/organisms/LoadingOverlay";
import Menu from "../components/organisms/Menu";
import ThemeOption from "../components/organisms/ThemeOption";
import ScrollTopBtn from "../components/organisms/ScrollTopBtn";
import Skill from "../components/organisms/Skill";
import Education from "../components/organisms/Education";
import Experience from "../components/organisms/Experience";
import Portfolio from "../components/organisms/Portfolio";
import Testimonial from "../components/organisms/Testimonial";
import Interest from "../components/organisms/Interest";
import Blog from "../components/organisms/Blog";
import Contact from "../components/organisms/Contact";

const App: React.FC = () => {
    return (
        <header>
            <div className="profile-page sidebar-collapse">
                <nav
                    className="navbar navbar-expand-lg fixed-top navbar-transparent bg-primary"
                    color-on-scroll="400"
                >
                    <div className="container">
                        <div className="navbar-translate">
                            <a className="navbar-brand" href="#" rel="tooltip">
                                Creative CV
                            </a>
                            <button
                                className="navbar-toggler navbar-toggler"
                                type="button"
                                data-toggle="collapse"
                                data-target="#navigation"
                                aria-controls="navigation"
                                aria-expanded="false"
                                aria-label="Toggle navigation"
                            >
                                <span className="navbar-toggler-bar bar1"></span>
                                <span className="navbar-toggler-bar bar2"></span>
                                <span className="navbar-toggler-bar bar3"></span>
                            </button>
                        </div>
                        <div
                            className="collapse navbar-collapse justify-content-end"
                            id="navigation"
                        >
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a
                                        className="nav-link smooth-scroll"
                                        href="#about"
                                    >
                                        About
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a
                                        className="nav-link smooth-scroll"
                                        href="#skill"
                                    >
                                        Skills
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a
                                        className="nav-link smooth-scroll"
                                        href="#portfolio"
                                    >
                                        Portfolio
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a
                                        className="nav-link smooth-scroll"
                                        href="#experience"
                                    >
                                        Experience
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a
                                        className="nav-link smooth-scroll"
                                        href="#contact"
                                    >
                                        Contact
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default App;
