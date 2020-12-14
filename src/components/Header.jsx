import React from 'react'
import Container from 'react-bootstrap/Container'
import Jumbotron from 'react-bootstrap/Jumbotron'

const Header= () => {

    const jubmoStyle = {
        marginBottom: 0,
        color: 'white',
        backgroundImage: 'url(https://media.dnd.wizards.com/styles/news_banner_header/public/images/news/G30FYHMw8D.jpg)',
        backgroundRepeat: 'noRepeat',
        backgroundSize: 'cover',

    }

    return (
        <Jumbotron fluid style={jubmoStyle} expand='sm'>
        <Container>
            <h1>DM Reference</h1>
            <p>Topics and Areas for Every Dungeon Master</p>
        </Container>
        </Jumbotron>
    )
}

export default Header


