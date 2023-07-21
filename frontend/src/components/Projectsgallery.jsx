import React, {
  useState,
  useEffect,
  useLayoutEffect,
  useRef,
  useContext,
} from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import TransitionContext from "../context/TransitionContext";
import "./Projectsgallery.scss";
import connexion from "../services/connexion";

function Projectsgallery() {
  const { id } = useParams();
  const [oneWork, setOneWork] = useState([]);

  const getOneWork = async () => {
    try {
      const desc = await connexion.get(`/works/${id}`);
      setOneWork(desc);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getOneWork();
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
      <div className="aromalt">
        <div className="headerAromalt">
          <h1>{oneWork.title}</h1>
        </div>
        <div className="mainAromalt">
          <h3>{oneWork.description}</h3>
          <div className="headerMain">
            <div className="tags">
              <h4>Tags</h4>
              <p>{oneWork.tags}</p>
            </div>
            <div className="url">
              <h4>URL</h4>

              <Link target="_blank" smooth to={oneWork.path}>
                {oneWork.path}
              </Link>
            </div>
          </div>
          <main className="main" ref={main}>
            <section className="description panel blue">
              <img
                src={`${import.meta.env.VITE_BACKEND_URL}/assets/images/${
                  oneWork.image_url1
                }`}
                alt="img1"
              />
            </section>
            <section className="panel red">
              <img
                src={`${import.meta.env.VITE_BACKEND_URL}/assets/images/${
                  oneWork.image_url2
                }`}
                alt="img2"
                className="aromalt_maquette"
              />
            </section>
            <section className="panel purple">
              <img
                src={`${import.meta.env.VITE_BACKEND_URL}/assets/images/${
                  oneWork.image_url3
                }`}
                alt="img3"
              />
            </section>
            <section className="panel green">
              <div className="picture">
                <h4>Visit the website</h4>
                <div className="visit">
                  <Link target="_blank" smooth to={oneWork.path}>
                    {oneWork.path}
                  </Link>
                  <Link target="_blank" smooth to={oneWork.path}>
                    ↗ Github
                  </Link>
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}

export default Projectsgallery;
