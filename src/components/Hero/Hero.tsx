
function Hero() {
  return (
    <div className="hero min-h-screen bg-fixed bg-hero-pattern">
    <div className="hero-overlay  bg-gradient-to-b from-primary-2/[.5] from-80% to-primary"></div>
    <div className="text-center text-neutral-content">
        <div className="max-w-xxl">
        <h1 className="mb-5 text-5xl lg:text-8xl font-mono font-bold uppercase">
            Giranda Anugrah
        </h1>
        <p className="mb-5 text-xl lg:text-2xl font-mono uppercase" data-aos="fade-up" data-aos-duration="1000">Software Enginer, Front End & Backend Developer</p>
        </div>
    </div>
        <a href="#about" className='hidden md:inline-block'>
        <div className='w-14 h-14 absolute bottom-0 border-solid border-4 rounded-full mb-10 animate-bounce'>
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M16 15L12 19M12 19L8 15M12 19V5" stroke="#ffffff" stroke-width="2" stroke-linecap="round"></path> </g></svg>
        </div>
        </a>
    </div>
    )
}

export default Hero