import React  from 'react'
import {Carousel, Container} from 'react-bootstrap'

const Home = () => {
    return (
        <Container>
            <Carousel>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="https://64.media.tumblr.com/566095676d27bda491aaced2c43df751/tumblr_nz1ili43iV1tpri36o1_1280.png"
                alt="First slide"
                />
                <Carousel.Caption>
                <h3>Classes</h3>
                <p>Known Classes for D&D 5E</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="https://i.pinimg.com/originals/68/51/d1/6851d1455f7e9655a9e79187f3650731.jpg"
                alt="Third slide"
                />

                <Carousel.Caption>
                <h3>Equipment</h3>
                <p>Starting Equipment For Characters</p>
                </Carousel.Caption>
            </Carousel.Item>
            {/* <Carousel.Item>
                <img
                className="d-block w-100"
                src="https://lh3.googleusercontent.com/proxy/rJSX6gRb9jDABR4PoN0iZZ6bAlcjnyO9hJ4FkprJ878XzyiuYQkHy2nvCUs2LX68kY3_kqjXswfAxThl5UQSB6NcL5DWqkaBI09AF3xVlJYhxiivcyjOJyDy5AL-nR140Q61DTm4dQkJp97PkoyF950OwOM7xEpD"
                alt="Third slide"
                />

                <Carousel.Caption>
                <h3>Game Mechanics</h3>
                <p>Running the Game</p>
                </Carousel.Caption>
            </Carousel.Item> */}
            </Carousel>
        </Container>
    )
}

export default Home
