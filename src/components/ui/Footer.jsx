import {FaFacebook, FaInstagram} from 'react-icons/fa'
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className='py-3' style={{ backgroundColor: 'pink', color: 'white'}}>
    <div className='container text-center'>  
        <div>
            <a href='#' className='text-white text-decoration-none mx-2'>Home</a>
            <a href='#' className='text-white text-decoration-none mx-2'>About</a>
            <a href='#' className='text-white text-decoration-none mx-2'>Shop</a>
            <a href='#' className='text-white text-decoration-none mx-2'>Contact</a>
        </div>
        <div className='mb-2'>
            <a href='#' className='text-white mx-2'><FaFacebook /></a>
            <a href='#' className='text-white mx-2'><FaXTwitter /></a>
            <a href='#' className='text-white mx-2'><FaInstagram /></a>
        </div>
        <p className='small mb-0'>&copy; 2025 Louis Slutton</p>
    </div>
    </footer>
  )
}

export default Footer