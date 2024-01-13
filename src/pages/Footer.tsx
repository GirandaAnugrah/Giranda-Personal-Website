import { RiInstagramFill } from "react-icons/ri";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
function Footer() {
  return (
    <footer className="footer p-10 bg-primary-2 text-neutral-content">
    <aside>
        <h1 className="text-7xl font-mono text-secondary">GRN</h1>
        <p className="font-mono">Giranda Anugrah<br/>Jakarta Indonesia <br/>Copyright by Giranda Anugrah</p>
    </aside> 
    <nav>
        <header className="footer-title font-mono">Get In Touch</header> 
        <div className="grid grid-flow-col gap-4">
        <a href="https://www.instagram.com/giranugrah/">
            <RiInstagramFill fontSize="2.3em" className="hover:text-secondary"/>
        </a>
        <a href="https://github.com/GirandaAnugrah" className="hover:text-secondary">
            <FaGithub fontSize="2.3em"/>
        </a>
        <a href="https://www.linkedin.com/in/giranda-anugrah" className="hover:text-secondary">
            <FaLinkedin fontSize="2.3em"/>
        </a>
        <a href="mailto:anugrahgiranda@gmail.com" className="hover:text-secondary">
            <MdEmail fontSize="2.3em"/>
        </a>
        </div>
    </nav>
    </footer>
    )
}

export default Footer