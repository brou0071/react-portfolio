import { useState, useEffect } from 'react'
import { Image, Form, Button, Row, Col } from 'react-bootstrap';
import SwiperCore, { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

const UnsplashSearch = () => {
  SwiperCore.use([Autoplay]);
  const [query, setQuery] = useState('travel')
  const [photos, setPhotos] = useState([])
  const [page, setPage] = useState(0)
  const accessKey = `5_8a6_v2hZEEjkn-It2kGO7IVk7GtMAvkpRIu2JZRSE`
  const clientId = `?client_id=${accessKey}`
  const mainUrl = `https://api.unsplash.com/photos/`
  const searchUrl = `https://api.unsplash.com/search/photos/`

  const HandleSubmit = (e) => {
    e.preventDefault()
    setPage(1)
    FetchImages()
  }

  const FetchImages = async () => {
    let url
    const urlPage = `&page=${page}`
    const urlQuery = `&query=${query}`
    // build the url
    if (query) {
      url = `${searchUrl}${clientId}${urlPage}${urlQuery}&orientation=squarish`
    } else {
      url = `${mainUrl}${clientId}${urlPage}`
    }
    try {
      const response = await fetch(url)
      const data = await response.json()
      setPhotos((oldPhotos) => {
        if (query && page === 1) {
          return data.results
        } else if (query) {
          return [...oldPhotos, ...data.results]
        } else {
          return [...oldPhotos, ...data]
        }
      })
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    FetchImages()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page])

  return (
    <div className="mb-5">
      <Form>
        <Form.Group>
          <Row className="mb-4">
            <Col xs={3}></Col>
            <Col xs={5}>
              <Form.Label htmlFor="inlineFormInput" visuallyHidden>
                Search
              </Form.Label>
              <Form.Control
                className="mb-2"
                id="inlineFormInput"
                placeholder="Search..."
                type="text"
                onChange={(e) => setQuery(e.target.value)}
              />
            </Col>
            <Col xs={4}>
              <Button type="submit" className="mb-2" variant="primary" onClick={HandleSubmit}>
                Search
              </Button>
            </Col>
            <Col xs={2}></Col>
          </Row>
        </Form.Group>
      </Form>
      <Swiper
        spaceBetween={10}
        slidesPerView={4}
        loop={true}
        autoplay={{
          "delay": 1500,
      }}>
        {photos.map((image, index) => {
          return (
            <SwiperSlide key={index}>
              <Image src={image.urls.small} rounded />
            </SwiperSlide>
          )
        })}
      </Swiper>
    </div>
  )
}

export default UnsplashSearch