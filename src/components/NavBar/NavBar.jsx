import { useState } from 'react';
import { Navbar, Nav } from 'react-bootstrap'
import { IconContext } from 'react-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import Time from "../Time/Time";
import {
  FaSun,
  FaMoon
} from "react-icons/fa";

const NavBar = () => {
  const [theme, setTheme] = useState(true);

  const HandleChange = (e) => {
    setTheme(!e.target.checked);
    localStorage.setItem('LOCAL_THEME', theme ? 'light' : 'dark');
  }

  return (
    <Navbar className="px-3" bg={theme ? 'light' : 'dark'} variant={theme ? 'light' : 'dark'} fixed="top" expand="lg">
      <Navbar.Brand>
        <Nav.Link href="/">
          <div style={{ color: theme ? 'black' : 'white', fontSize: '1.5rem', transform: 'translateY(2px)' }}>
            <h1 style={{ fontWeight: 'bold' }}>{`Dave Brousseau`}</h1>
          </div>
        </Nav.Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive" />
      <Navbar.Collapse id="responsive">
        <Nav className="me-auto">
          <Nav.Link className="clear" href="#about"><span>About</span></Nav.Link>
          <Nav.Link className="clear" href="#skills"><span>Skills</span></Nav.Link>
          <Nav.Link className="clear" href="#slider"><span>Slider</span></Nav.Link>
          <Nav.Link className="clear" href="#movies"><span>Movies</span></Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link style={{ textAlign: 'right' }} disabled>
            <p className="mt-3" style={{ color: theme ? 'black' : 'white' }}><Time /></p>
          </Nav.Link>
          <label className="px-3 mt-4 mx-3 switch">
            <input onChange={HandleChange} type="checkbox" />
            <span className="theslider"></span>
          </label>
        </Nav>
        <IconContext.Provider value={{ size: '0.4em', color: theme ? '#212121' : 'white' }}>
          {theme ? <FaSun /> : <FaMoon />}
        </IconContext.Provider>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default NavBar;