import './nav.css'
import { FaRegUser } from "react-icons/fa6";
import { RiGraduationCapLine } from "react-icons/ri";
import { LuContact } from "react-icons/lu";
import {Link, useLocation} from 'react-router-dom'
import {useState} from 'react'
const Nav = () =>{
    const location = useLocation()
    console.log(location)
    const [isClicked, setIsClicked] = useState(
        location.pathname === '/' ? 'profile' : location.pathname.slice(1)
    )
    const Navlist = [
        {title : 'profile',icon : <FaRegUser className='nav-icon' />},
        {title : 'skills',icon : <RiGraduationCapLine className='nav-icon' />},
        {title : 'contact',icon : <LuContact className='nav-icon' />}
    ]
    return(
        <nav>
            <ul className='navLists'>
                {Navlist.map((item)=>(
                    <Link 
                        to={(item.title === 'profile' ? '/' : `/${item.title}`)} 
                        key={item.title} 
                        className={`navList ${(isClicked === item.title ? 'clicked' : '')}`}
                        onClick= {()=> setIsClicked(item.title)}
                    >
                        {item.icon}
                    </Link>
                ))}
            </ul>
        </nav>
    )
}
export default Nav