import React from 'react'
import Container from 'react-bootstrap/Container'
import Jumbotron from 'react-bootstrap/Jumbotron'

const Header= () => {

    const jubmoStyle = {
        marginBottom: 0,
        color: 'white',
        backgroundImage: 'url(https://cdn.pixabay.com/photo/2019/08/22/08/30/fantasy-4422921_960_720.jpg)',

    }

    return (
        <Jumbotron fluid style={jubmoStyle} >
        <Container>
            <h1>DM Reference</h1>
            <p>
                Common Topics and Areas for Every Dungeon Master
            </p>
        </Container>
        </Jumbotron>
    )
}

export default Header


