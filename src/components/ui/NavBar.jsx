import { BsCart2 } from "react-icons/bs";
import { Link } from 'react-router-dom'
import styles from './NavBar.module.css'
import NavBarLink from "./NavBarLink";

const NavBar = () => {
  return (
    <nav className={`navbar navbar-expand-lg navbar-light bg-white shadow-sm py-3 ${styles.stickyNavbar}`}>
    <div className="container">
        <Link className="navbar-brand fw-bold text-uppercase" to="/">Slutton</Link>
        <button
            className="navbar-toggler"
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarContent'
            aria-controls='navbarContent'
            aria-expanded='false'
            aria-label='Toggle navigation'
        >
            <span className='navbar-toggler-icon'></span>
        </button>
        <div>
            <NavBarLink />
            <Link to='/cart' className={`btn btn-dark ms-3 rounded-pill position-relative ${styles.responsiveCart}`}>
                <BsCart2 />
                <span
                    className="position-absolute top-0 start-100 translate-middle badge rounded-pill"
                    style={{fontSize: '0.85rem', padding: '0.5em 0.65em', backgroundColor:'grey'}}
                >
                    12
                </span>
            </Link>
        </div>
    </div>
    </nav>
  )
}

export default NavBar