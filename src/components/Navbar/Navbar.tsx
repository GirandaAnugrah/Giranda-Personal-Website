import { useState } from 'react'

function Navbar() {
    const [color,setColor] = useState(false)
    const changeColor = () => {
        if(window.scrollY >= 90){
            setColor(true)
        }else{
            setColor(false)
        }
    }
    window.addEventListener('scroll',changeColor)
  return (
    <div className={`drawer ${color ? ' backdrop-blur-md': 'bg-transparent'} fixed z-40 `}>
    <input id="my-drawer-3" type="checkbox" className="drawer-toggle" /> 
    <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <div className="w-full navbar bg-base-300 bg-transparent">
        <div className="flex-1 px-2 mx-2">
            <a href="#home">
            <h1 className='font-bold text-3xl text-white font-mono uppercase shadow-md'>Giranda</h1>
            </a>
        </div>
        <div className="flex-none hidden lg:block">
            
            <ul className="menu menu-horizontal text-white font-mono">
            {/* Navbar menu content here */}
            <li className='hover:text-secondary hover:-translate-y-1 duration-75'><a href='#home'>Home</a></li>
            <li className='hover:text-secondary hover:-translate-y-1 duration-75'><a href='#about'>About</a></li>
            <li className='hover:text-secondary hover:-translate-y-1 duration-75'><a href='#expertise'>Expertise</a></li>
            <li className='hover:text-secondary hover:-translate-y-1 duration-75'><a href='#projects'>Projects</a></li>   
            <li className='hover:text-secondary hover:-translate-y-1 duration-75'><a href='https://drive.google.com/file/d/1puhHYBcHXKtFTXThFy3vqkcSQd1YnTJL/view?usp=sharing' target="_blank">Resume</a></li>   
            </ul>
        </div>
        <div className="flex-none self-end lg:hidden">
            <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M4 5C3.44772 5 3 5.44772 3 6C3 6.55228 3.44772 7 4 7H20C20.5523 7 21 6.55228 21 6C21 5.44772 20.5523 5 20 5H4ZM7 12C7 11.4477 7.44772 11 8 11H20C20.5523 11 21 11.4477 21 12C21 12.5523 20.5523 13 20 13H8C7.44772 13 7 12.5523 7 12ZM13 18C13 17.4477 13.4477 17 14 17H20C20.5523 17 21 17.4477 21 18C21 18.5523 20.5523 19 20 19H14C13.4477 19 13 18.5523 13 18Z" fill="#ffffff"></path> </g></svg>
            </label>
        </div> 
        </div>
    </div> 
    <div className="drawer-side">
        <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label> 
        <ul className="menu p-4 w-80 min-h-full backdrop-blur-md text-white">
            <li><a href='#home'>Home</a></li>
            <li><a href='#about'>About</a></li>
            <li><a href='#expertise'>Expertise</a></li>
            <li><a href='#projects'>Projects</a></li>
            <li><a href='https://drive.google.com/file/d/1puhHYBcHXKtFTXThFy3vqkcSQd1YnTJL/view?usp=sharing' target="_blank">Resume</a></li>      
        </ul>
    </div>
    </div>
  )
}

export default Navbar