
interface Props{
    title:string;
    description:string;
    image: string;
    technology?: Array<string>;
    duration: string;
}
function Card({title,description,image,technology,duration}:Props) {
  return (
    <div className="card rounded-t-sm rounded-b-none w-96 bg-primary-2 shadow-lg mb-8 group hover:bg-primary" data-aos="fade-up" data-aos-duration={duration}>
    <figure><img src={image} className="aspect-video group-hover:scale-110 ease-in duration-300"/></figure>
    <div className="card-body w-full text-white font-mono">
        <h2 className="card-title text-xl">{title}</h2>
        <p className="text-sm opacity-80">{description}</p>
        <div className="flex flex-wrap justify-end w-full gap-2 ">
          {
            technology?.map((tech) => (
              <div className="badge bg-secondary">{tech}</div>
            ))
          }
        </div>
    </div>
    </div>
  )
}

export default Card 