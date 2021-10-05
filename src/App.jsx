import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import NavBar from './components/NavBar/NavBar';
import Home from './views/Home';
import { Row, Col, Container } from 'react-bootstrap';
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <Container fluid className="shadow-lg py-5 dark">
              <Container>
                <Row>
                  <Col className="text-center">
                    <h1 className="mb-5">About</h1>
                    <a href="/about">Skip to main content</a>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam odio provident beatae laudantium vero deleniti illo corporis possimus eveniet cupiditate maxime saepe explicabo veritatis, consectetur distinctio iusto sapiente dolorum dolor?</p>
                  </Col>
                </Row>
              </Container>
            </Container>
          </Route>
          <Route path="/dashboard">
            <div className="wrapper">
              <h1>Dashboard</h1>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam odio provident beatae laudantium vero deleniti illo corporis possimus eveniet cupiditate maxime saepe explicabo veritatis, consectetur distinctio iusto sapiente dolorum dolor?</p>
            </div>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
