import { Navbar, Nav } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import Time from "../Time/Time";
import ToggleSwitch from '../ToggleSwitch/ToggleSwitch';

const NavBar = () => {
  return (
    <Navbar className="px-3" bg="dark" variant="dark" fixed="top" expand="lg">
      <Navbar.Brand>
        <Nav.Link href="/">
          <div style={{ color: 'white', fontSize: '1.5rem', transform: 'translateY(2px)' }}>
            <h1 style={{ fontWeight: 'bold' }}>{`Dave Brousseau`}</h1>
          </div>
        </Nav.Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive" />
      <Navbar.Collapse id="responsive">
        <Nav className="me-auto">
          <Nav.Link className="clear" href="/about">01. <span>About</span></Nav.Link>
          <Nav.Link className="clear" href="/experience">02. <span>Experience</span></Nav.Link>
          <Nav.Link className="clear" href="/work">03. <span>Work</span></Nav.Link>
          <Nav.Link className="clear" href="/contact">04. <span>Contact</span></Nav.Link>
        </Nav>
        <Nav>
          <ToggleSwitch />
          <Nav.Link style={{ textAlign: 'right' }} disabled>
            <p className="mt-3 px-4" style={{ color: '#ffffff' }}><Time /></p>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default NavBar;