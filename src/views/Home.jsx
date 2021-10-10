import 'bootstrap/dist/css/bootstrap.min.css';
import SwiperSlider from '../components/SwiperSlider/SwiperSlider';
import UnsplashSearch from '../components/UnsplashSearch/UnsplashSearch';
import Movies from '../components/Movies/Movies';
import { Row, Col, Container } from 'react-bootstrap';
import { FaNodeJs, FaReact, FaAngular, FaGitAlt, FaGithub, FaHtml5, FaCss3Alt, FaJs, FaSass, FaTerminal } from 'react-icons/fa';
import { SiTypescript } from 'react-icons/si';
import Hal from '../../src/images/hal_9000.png';
import WriteText from '../components/WriteText/WriteText';

function Home() {
  return (
    <>
      <SwiperSlider />
      <Container id="about" fluid className="shadow-lg pb-5 dark">
        <Container>
          <Row className="pt-5">
            <Col className="py-5">
              <h5>ABOUT &amp; ME</h5>
              <h1>WHO AM I &amp; WHY AM I</h1>
              <p><WriteText speed={20} text="seconds ago Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam odio provident beatae laudantium vero deleniti illo corporis possimus eveniet cupiditate maxime saepe explicabo veritatis, consectetur distinctio iusto sapiente dolorum dolor?" /></p>
            </Col>
          </Row>
        </Container>
      </Container>
      <Container id="skills" fluid className="py-5 p-1-mobile really-dark">
        <Container className="py-5 p-1-mobile">
          <Row>
            <Col lg={2} xs={3} className="text-left">
              <img className="mb-2 hal-9000" src={Hal} alt="Hal 9000" />
              <p>{`> `}{<WriteText speed={150} text="Hello Dave." />}</p>
            </Col>
            <Col lg={1} className="hide-mobile"></Col>
            <Col lg={9} xs={9} className="text-left">
              <h5>SKILLS &amp; TOOLS</h5>
              <h1>MY TOOLBOX &amp; THINGS I CAN DO</h1>
              <Row>
                <Col>
                  <ul className="py-3">
                    <li>HTML/CSS</li>
                    <li>JavaScript ES6, TypeScript</li>
                    <li>ReactJS, AngularJS</li>
                    <li>LESS, SASS/SCSS</li>
                    <li>RESTful Services/APIs</li>
                  </ul>
                </Col>
                <Col>
                  <ul className="py-3">
                    <li>Responsive/Mobile Design</li>
                    <li>Cross-Browser Development</li>
                    <li>Content Management Systems</li>
                    <li>Testing/Debugging</li>
                    <li>Git/Version Control</li>
                  </ul>
                </Col>
              </Row>
              <FaReact className="p-2" style={{ color: '#ffffff', fontSize: '4rem' }}  />
              <FaAngular className="p-2" style={{ color: '#ffffff', fontSize: '4rem' }}  />
              <FaGithub className="p-2" style={{ color: '#ffffff', fontSize: '4rem' }}  />
              <FaGitAlt className="p-2" style={{ color: '#ffffff', fontSize: '4rem' }}  />
              <FaTerminal className="p-2" style={{ color: '#ffffff', fontSize: '4rem' }}  />
              <FaNodeJs className="p-2" style={{ color: '#ffffff', fontSize: '4rem' }}  />
              <SiTypescript className="mx-2" style={{ color: '#ffffff', fontSize: '2.5rem' }}  />
              <FaJs className="p-2" style={{ color: '#ffffff', fontSize: '4rem' }} />
              <FaHtml5 className="p-2" style={{ color: '#ffffff', fontSize: '4rem' }}  />
              <FaCss3Alt className="p-2" style={{ color: '#ffffff', fontSize: '4rem' }}  />
              <FaSass className="p-2" style={{ color: '#ffffff', fontSize: '4rem' }}  />
            </Col>
          </Row>
        </Container>
      </Container>
      <Container id="slider" fluid className="shadow-lg pb-5 dark">
        <Container>
          <Row className="pt-5">
            <Col className="text-center mt-5 mb-1">
              <h5>Unsplash API &amp; SwiperJS</h5>
              <h1>Get Slider</h1>
              <p>Type in a word in the search field and it will create a swiper slider with 10 images from Unsplash API.</p>
            </Col>
          </Row>
        </Container>
        <UnsplashSearch />
      </Container>
      <Container id="movies" fluid className="shadow-lg pb-5 p-1-mobile really-dark">
        <Container className="p-1-mobile">
          <Row className="pt-5">
            <Col className="py-5 p-1-mobile">
              <h5>THEMOVIEDB</h5>
              <h1>SEARCH FOR A MOVIE</h1>
              <Movies />
            </Col>
          </Row>
        </Container>
      </Container>
  </>
  );
}

export default Home;
