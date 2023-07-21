import FOG from "vanta/dist/vanta.fog.min";
import React, { useState, useEffect, useRef } from "react";
import { HashLink as Link } from "react-router-hash-link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SlowMo } from "gsap/EasePack";
import connexion from "../services/connexion";
import "./Home.scss";
import Header from "../components/Header";
import Cv from "../assets/Cv.pdf";
import Footer from "../components/Footer";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(SlowMo);

function Home() {
  const [works, setWorks] = useState([]);
  const getWorks = async () => {
    try {
      const work = await connexion.get("/works");
      setWorks(work);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getWorks();
  }, []);

  const myRef = useRef(null);
  const [vantaEffect, setVantaEffect] = useState(null);
  useEffect(() => {
    setVantaEffect(
      FOG({
        el: myRef.current,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        highlightColor: 0xf0f0f0,
        midtoneColor: 0xf0f0f00,
        lowlightColor: 0xf0f0f0,
        baseColor: 0xfff5ee,
        minHeight: 200.0,
        minWidth: 200.0,
        blurFactor: 0.25,
        speed: 0.3,
        zoom: 0.3,
      })
    );

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [works]);

  const [theme, setTheme] = useState(vantaEffect);
  const toggleTheme = () => {
    if (theme === "light") {
      setTheme(
        FOG({
          el: myRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          highlightColor: 0xf0f0f0,
          midtoneColor: 0xf0f0f00,
          lowlightColor: 0xf0f0f0,
          baseColor: 0xfff5ee,
          minHeight: 200.0,
          minWidth: 200.0,
          blurFactor: 0.25,
          speed: 0.3,
          zoom: 0.3,
        })
      );
    } else {
      setTheme(
        FOG({
          el: myRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          highlightColor: 0xf0f0f0,
          midtoneColor: 0xf0f0f00,
          lowlightColor: 0xf0f0f0,
          baseColor: 0x0,
          minHeight: 200.0,
          minWidth: 200.0,
          blurFactor: 0.25,
          speed: 0.3,
          zoom: 0.3,
        })
      );
    }
  };
  useEffect(() => {
    document.body.className = theme;
  }, []);

  const moveTitle1 = () => {
    gsap.fromTo(
      ".title1",
      { x: -1000 },
      {
        x: 0,

        scrollTrigger: {
          trigger: ".title1",
          start: "-100% 60%",
          end: "100% 40%",
          scrub: true,
          // markers: true,
        },
      }
    );
  };

  const moveTitle2 = () => {
    gsap.fromTo(
      ".title2",
      { x: -2000 },
      {
        x: 0,
        delay: 10,
        scrollTrigger: {
          trigger: ".title2",
          start: "-100% 60%",
          end: "100% 40%",
          scrub: true,
          // markers: true,
        },
      }
    );
  };

  const moveAbout = () => {
    gsap.fromTo(
      ".About",
      { x: 1500 },
      {
        x: 100,
        duration: 5,
        scrollTrigger: {
          trigger: ".About",
          start: "-100% 60%",
          end: "100% 40%",
          scrub: true,
          // markers: true,
        },
      }
    );
  };

  const moveProjects = () => {
    gsap.fromTo(
      ".projects",
      { x: -3000 },
      {
        x: 0,
        duration: 5,
        delay: 3,
        scrollTrigger: {
          trigger: ".projects",
          start: "-100% 60%",
          end: "30% 40%",
          scrub: true,
          // markers: true,
        },
      }
    );
  };
  const moveContact = () => {
    gsap.fromTo(
      ".contact",
      { x: 1500 },
      {
        x: 0,
        duration: 5,
        scrollTrigger: {
          trigger: ".contact",
          start: "-100% 80%",
          end: "100% 80%",
          scrub: true,
          // markers: true,
        },
      }
    );
  };

  useEffect(() => {
    moveTitle1();
    moveTitle2();
    moveAbout();
    moveProjects();
    moveContact();
  }, []);

  return (
    <div className={`App ${theme}`}>
      <div className="Main" ref={myRef}>
        <Header />
        <div className="toggle-switch">
          <label className="switch-label">
            <input type="checkbox" className="checkbox" onClick={toggleTheme} />
            <span className="slider" />
          </label>
        </div>
        <div className="Content">
          <div className="title">
            <div className="title1">
              <h2>Nicolas Panis</h2>
            </div>
            <div className="title2">
              <h1>Web Developer</h1>
            </div>
          </div>
          <div className="About">
            <Link smooth to="#about" />
            <h2>About</h2>
            <div className="lineAbout" />
            <p>
              " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              ac consectetur risus, quis rhoncus ante. Pellentesque habitant
              morbi tristique senectus et netus et malesuada fames ac turpis
              egestas. Curabitur ac turpis sit amet purus dictum eleifend nec
              non augue. Fusce ipsum lacus, venenatis vitae fringilla et,
              dapibus quis erat. Donec dapibus, nisl lobortis mollis fringilla,
              ex tellus pharetra ante, vel hendrerit ligula libero quis mauris.
              Sed sed ipsum leo. Sed faucibus turpis ex. Suspendisse tincidunt
              sit amet nulla eu pretium. Proin in diam est. Aenean venenatis,
              quam in condimentum posuere, elit orci laoreet odio, ac cursus
              mauris tellus eu arcu. Aenean sed diam sodales, gravida orci sed,
              efficitur velit. Proin mollis mollis pretium."
            </p>
            <div className="resume">
              <a href={Cv} target="_blank" rel="noreferrer">
                ↗ Resume
              </a>
            </div>
          </div>
          <div className="projects">
            <div className="works">
              <h2>Works</h2>
            </div>
            <div className="lineProject" />
            {works.map((work) => (
              <div key={work.id} className="work">
                <h5>{work.ref}</h5>
                <Link to={`/works/${work.id}`}>
                  <h3>{work.title}</h3>
                </Link>
                <h4>{work.date}</h4>
              </div>
            ))}
          </div>
          <div className="contact" id="contact">
            <Link
              smooth
              to="#contact"
              scroll={(contact) =>
                contact.scrollIntoView({ behavior: "smooth", block: "start" })
              }
            />
            <h2>Contact</h2>
            <div className="lineContact" />
            <div className="mail">
              <h3>Mail</h3>
              <a
                href="mailto:nicolaspanis12@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                ↗ nicolaspanis12@gmail.com
              </a>
            </div>
            <div className="media">
              <h3>Social Media</h3>
              <a
                className="link"
                href="https://www.linkedin.com/in/nicolaspanis/"
                target="_blank"
                rel="noreferrer"
              >
                ↗ LinkedIn
              </a>
              <a
                className="link"
                href="https://github.com/NicolasPanis"
                target="_blank"
                rel="noreferrer"
              >
                ↗ Github
              </a>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Home;
