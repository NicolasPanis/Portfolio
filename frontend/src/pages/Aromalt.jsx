import React, {
  useState,
  useEffect,
  useLayoutEffect,
  useRef,
  useContext,
} from "react";
import Header from "../components/Header";
import connexion from "../services/connexion";
import { Link } from "react-router-dom";
import "./Aromalt.scss";
import LogoAromalt from "../assets/logo_Aromalt.png";
import A_1 from "../assets/A_1.jpg";
import A_2 from "../assets/A_2.jpg";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TransitionContext from "../context/TransitionContext";

function Aromalt() {
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

  const main = useRef();
  const scrollTween = useRef();
  const [ctx] = useState(gsap.context(() => {}, main));
  const { completed } = useContext(TransitionContext);

  const goToSection = (i) => {
    // Remove the GSAP instance with the specific ID
    // to prevent memory leak
    ctx.data.forEach((e) => {
      if (e.vars && e.vars.id === "scrollTween") {
        e.kill();
      }
    });
    ctx.add(() => {
      scrollTween.current = gsap.to(window, {
        scrollTo: { y: i * window.innerHeight, autoKill: false },
        duration: 1,
        id: "scrollTween",
        onComplete: () => (scrollTween.current = null),
        overwrite: true,
      });
    });
  };

  useLayoutEffect(() => {
    if (!completed) return;
    ctx.add(() => {
      const panels = gsap.utils.toArray(".panel");
      panels.forEach((panel, i) => {
        ScrollTrigger.create({
          trigger: panel,
          start: "top bottom",
          end: "+=200%",
          onToggle: (self) =>
            self.isActive && !scrollTween.current && goToSection(i),
        });
      });
      ScrollTrigger.create({
        start: 0,
        end: "max",
        snap: 1 / (panels.length - 1),
      });
    });
    return () => ctx.revert();
  }, [completed]);

  return (
    <div>
      <Header />
      <div className="aromalt">
        <div className="headerAromalt">
          <h1>Aromalt</h1>
        </div>
        {works.slice(0, 1).map((work) => (
          <div className="mainAromalt">
            <h3>
              In hendrerit convallis sem, nec sollicitudin nisl commodo ut. In
              pellentesque enim sit amet viverra egestas. Nunc sit amet lacus id
              sem fermentum consequat in vel turpis.
            </h3>
            <div className="headerMain">
              <div className="tags">
                <h4>Tags</h4>
                <p>Example</p>
                <p>Example</p>
              </div>
              <div className="url">
                <h4>URL</h4>
                <p>{work.path}</p>
              </div>
            </div>
            <main className="main" ref={main}>
              <section className="description panel blue">
                <img src={A_1} alt="aromalt2" />
              </section>
              <section className="panel red">
                <img src={A_2} alt="aromalt2" className="aromalt_maquette" />
              </section>
              {/* <section className="panel orange">TWO</section> */}
              <section className="panel purple">
                <img src={LogoAromalt} alt="aromalt2" />
              </section>
              <section className="panel green">
                <div className="picture">
                  <h4>Visit the website</h4>
                  <div className="visit">
                    <Link
                      target="_blank"
                      smooth
                      to="https://aromalt.remote-fr-3.wilders.dev/"
                    >
                      https://aromalt.com
                    </Link>
                  </div>
                </div>
              </section>
            </main>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Aromalt;
