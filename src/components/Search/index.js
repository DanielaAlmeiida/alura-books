import Input from '../Input'
import styled from 'styled-components'
import { useState } from 'react'
import { books } from './searchData'

const SearchContainer = styled.section`
    color: #FFF;
    text-align: center;
    padding: 85px 0;
    height: 470px;
    width: 100%;
`

const Title = styled.h2`
    color: #FFF;
    font-size: 36px;
    text-align: center;
    width: 100%;
`
const Subtitle = styled.h3`
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 40px;
`

const Results = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    cursor: pointer;
    p {
        width: 200px;
    }
    img {
        width: 100px;
    }
    &:hover {
        border: 1px solid white;
    }
`

export default function Search() {

    const [searchedBooks, setSearchedBooks] = useState([])

    return (
        <SearchContainer>
            <Title>Do you know where to start?</Title>
            <Subtitle>Find your book in our bookshelf!</Subtitle>
            <Input
                placeholder="Write your next reading"
                onBlur={ event => {
                    const typedText = event.target.value
                    const searchResult = books.filter( book => book.name.includes(typedText))
                    setSearchedBooks(searchResult)
                }}
            />
    
        { searchedBooks.map( book => (
            <Results>
                <p>  { book.name } </p> 
                <img src= { book.src } />
            </Results>
         )) } 

        </SearchContainer>
        
    )
}