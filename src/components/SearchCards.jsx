import React from 'react'
import Card from 'react-bootstrap/Card'

const SearchCards = () => {
    return (
        <Card>
        <Card.Img variant="top" src="https://i.pinimg.com/originals/16/34/e7/1634e73f6ac2b9ea05e74df94e981e04.jpg" />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in to
            additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
    )
}

export default SearchCards

