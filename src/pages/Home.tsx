import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import About from "./About";
import Projects from "./Projects";
import Expertise from "./Expertise";
import Footer from "./Footer";
import ProjectList from "./ProjectList";
import LoadingFallback from "../components/LoadingFallback";
import { useEffect, useState } from "react";

function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
    // return clearTimeout(timeout);
  }, []);

  if (loading) return <LoadingFallback />;
  return (
    <div>
      <Navbar />
      <section id="home">
        <Hero />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="expertise">
        <Expertise />
      </section>
      <section id="projects">
        <Projects />
        <ProjectList />
      </section>
      <Footer />
    </div>
  );
}

export default Home;
