import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

const PageDefault = () => {
    return (
<Card style={{ width: '35rem' }}>
  <Card.Img variant="top" src="https://assets1.ignimgs.com/2019/05/29/dndmobile-br-1559158957902.jpg" />
  <Card.Body>
    <Card.Title>No Avaiable Information</Card.Title>
    <Card.Text>
      Sorry Mate, Nothing to be found <br/>
      Please use the search bar or change sections
    </Card.Text>
    <Button variant="primary">Main Page</Button>
  </Card.Body>
</Card>
    )
}

export default PageDefault
