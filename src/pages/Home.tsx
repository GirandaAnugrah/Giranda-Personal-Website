import Navbar from '../components/Navbar/Navbar'
import Hero from '../components/Hero/Hero'
import About from './About'
import Projects from './Projects'
import Expertise from './Expertise'
import Footer from './Footer'
import ProjectList from './ProjectList'

function Home() {
  return (
    <div>
        <Navbar/>
        <section id='home'>
            <Hero/>
        </section>
        <section id='about'>
            <About/>
        </section>
        <section id='expertise'>
            <Expertise/>
        </section>
        <section id='projects'>
            <Projects/>
            <ProjectList/>
        </section>
        <Footer/>
    </div>
  )
}

export default Home