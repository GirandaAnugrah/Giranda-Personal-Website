interface Props{
    icon: any;
    title: string;
    description: string;
    duration: string;
}

function ExpertiseCard({icon,title,description,duration}:Props) {
  return (
    <div className='card rounded-none p-5 border-2 border-solid font-mono mb-5 lg:w-4/12' data-aos="fade-up" data-aos-duration={duration}>
        <div className='card-title'>
            <div className="w-16">
                {icon}
            </div>
            <h1 className='text-2xl font-bold text-white underline decoration-secondary decoration-2 '>{title}</h1>
        </div>
        <div className="card-body text-white text-lg">
            <p>{description}</p>
        </div>
    </div>
  )
}

export default ExpertiseCard