import { useEffect, useState } from "react";
import { Row, Col, Button, Card, Form } from 'react-bootstrap';

const Movies = () => {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('lethal weapon');
  const imgPath = 'https://image.tmdb.org/t/p/w1280';

  const HandleClick = (e) => {
    e.preventDefault();
    FetchMovies();
  }

  const FetchMovies = async () => {
    const apiUrl = `https://api.themoviedb.org/3/search/movie?api_key=ab370cb99659ec97129e84df21d61501&sort_by=popularity.desc&query=${query}&page=1`;
    setLoading(true);
    setMovies([]);
    try {
      const resp = await fetch(apiUrl);
      const data = await resp.json();

      setMovies((prevResult) => {
        return [...prevResult, ...data.results]
      })

      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    FetchMovies()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <Row>
        <Col lg={4} xs={12}>
          <Form>
            <Form.Group>
              <Form.Label htmlFor="query" visuallyHidden>
                Search
              </Form.Label>
              <Form.Control
                className="mb-2"
                id="query"
                placeholder="Search..."
                type="text"
                onChange={(e) => {setQuery(e.target.value);FetchMovies();}}
              />
              <Button type="submit" className="mb-5 mt-2" variant="primary" onClick={HandleClick}>
                Get Movies
              </Button>
            </Form.Group>
          </Form>
        </Col>
      </Row>
      <Row className="g-4">
        {loading ? <h2>Loading...</h2> :
          movies.slice(0, 4).map((movie, i) => (
            <Col xs={12} sm={6} md={4} xl={3} key={i}>
              <Card className="bg-dark text-white">
                <Card.Img variant="top" src={movie.poster_path && `${imgPath}${movie.poster_path}`} />
                <Card.Body>
                  <Card.Title>
                    <h1>{movie.title}</h1>
                  </Card.Title>
                  <Card.Text>
                    {movie.overview}
                  </Card.Text>
                  <p>...</p>
                  <Card.Footer>
                    <small>Release: {movie.release_date}</small>
                  </Card.Footer>
                </Card.Body>
              </Card>
            </Col>
          ))
        }
      </Row>
    </>
  )
}

export default Movies;