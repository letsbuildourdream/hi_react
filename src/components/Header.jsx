import { Link } from "react-router-dom";

const Header = () => {
  return ( 
    <header>
      {/* <!---Navbar----> */}
      <nav>
        <div className="flex-container navbar">
          <div className="flex-container logo-container">
            <div className="logo-name">Dented</div> 
            <div className="line">|</div> 
            <div>Soft. Engineer</div>
          </div>

          <ul className="flex-container nav-items">
          <li><Link to="/">Home</Link></li>
              <li><Link to="skills">Skills</Link></li>
              <li><Link to="projects">Projects</Link></li>
              <li><Link to="about">About</Link></li>
              <li><Link to="contact">Contact</Link></li>
          </ul>
          {/* <!--------Hamburger Menu-----------> */}
          <label htmlFor="hamburger-menu">
            <i className="fa-solid fa-bars"></i>
          </label>
          <input type="checkbox" id="hamburger-menu" />

          <div className="side-menu">
            <ul className="flex-container side-nav-items">
              <li><Link to="/">Home</Link></li>
              <li><Link to="skills">Skills</Link></li>
              <li><Link to="projects">Projects</Link></li>
              <li><Link to="about">About</Link></li>
              <li><Link to="contact">Contact</Link></li>
            </ul>
          </div>
          {/* <!-------------------> */}
        </div>
      </nav>
    </header>
   );
}
 
export default Header;