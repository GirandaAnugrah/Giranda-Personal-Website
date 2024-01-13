import TextWriter from "../utils/TextWriter"

function Projects() {
  return (
    <div className="flex justify-around flex-wrap min-h-screen bg-primary pt-20">
        <div className="desc lg:w-5/12 self-center ms-6">
          <h1 className="text-6xl md:text-8xl text-white font-mono">My <span className="text-secondary"><TextWriter text="Project" delay={250} infinite/></span></h1>
          <p className="text-white text-sm md:text-lg font-mono my-3 break-words">Passionate about web development, my current project is an exciting journey. I dive into creative ideas, constantly pushing boundaries to create exceptional online experiences. It's a thrilling process, and I'm motivated to keep crafting impressive websites that leave a lasting impact.</p>
          <a href="https://www.umnfestival.com" target="_blank">
            <button className="btn btn-xs sm:btn-sm md:btn-md bg-secondary font-bold lg:text-lg font-mono">Preview</button>
          </a>
        </div>
        <div className="lg:w-6/12 self-center">
          <img src="/img/phone.png" alt="" className="object-cover animate-waving-hand"/>
        </div>
    </div>
  )
}

export default Projects