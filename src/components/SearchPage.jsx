import React from 'react'
import SearchCards from './SearchCards';
import CardDeck from 'react-bootstrap/CardDeck'


const SearchPage = () => {
    return (
        <CardDeck>
            <SearchCards />
            <SearchCards />
            <SearchCards />
            <SearchCards />
        </CardDeck>
    )
}

export default SearchPage
