function About() {
  return (
    <div className="min-h-screen  flex justify-center items-center shadow-2xl bg-gradient-to-b from-primary from-90% to-primary-2">
      <div className="lg:flex w-[90%] md:w-[65%] h-fit items-center">
        <div
          className=" max-w-96 rounded-box bg-cover overflow-hidden mt-20 lg:mt-0 mx-auto"
          data-aos="fade-right"
          data-aos-duration="3000"
        >
          <img src="/img/me.jpg" alt="" className="object-cover saturate-50 " />
        </div>
        <div className="text-white lg:rotate-90 w-full my-5 md:my-none">
          <h1 className="text-5xl font-bold text-center font-mono animate-pulse duration-700">
            About <span className="text-secondary">Me</span>
          </h1>
        </div>
        <div
          className=" text-white max-w-lg font-semibold font-mono text-md mx-auto break-keep flex flex-col gap-2 items-start self-center"
          data-aos="fade-down"
          data-aos-duration="2000"
        >
          <p className="mb-5">
            Computer Science student at Multimedia Nusantara University
            passionate about{" "}
            <span className="text-secondary">Web Development</span>.Proficient
            in both frontend and backend development using{" "}
            <span className="text-secondary">Reactjs</span>,{" "}
            <span className="text-secondary">Laravel</span>,{" "}
            <span className="text-secondary">NodeJS</span>.
          </p>
          <p>
            Enthusiastic about learning and embracing new challenges, thriving
            in collaborative environments. Have strong{" "}
            <span className="text-secondary">problem-solving skills</span> and a
            knack for{" "}
            <span className="text-secondary">innovative solutions</span>
          </p>
          <button
            className="btn btn-sm sm:btn-sm md:btn-sm bg-secondary font-bold lg:text-sm font-mono"
            onClick={() =>
              window.open(
                "https://drive.google.com/file/d/1puhHYBcHXKtFTXThFy3vqkcSQd1YnTJL/view?usp=sharing"
              )
            }
          >
            Resume
          </button>
        </div>
      </div>
    </div>
  );
}

export default About;
