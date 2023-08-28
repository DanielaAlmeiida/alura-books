import { books } from './dataLatestReleases'

import styled from 'styled-components'

import { Title } from '../Title'
import RecomendCard from '../RecomendCard'
import bookImg from '../../img/book2.png'

const LastestReleasesContainer = styled.section`
    background-color: #EBECEE;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
`



const NewBooksContainer = styled.div`
    margin-top: 30px;
    display: flex;
    width: 100%;
    justify-content: center;
    cursor: pointer;
`

export default function LastestReleases () {
    return (
        <LastestReleasesContainer>
            <Title 
                color='#000'
                fontSize="36px"
                align="center"
            >LATEST RELEASES
            </Title>  

            <NewBooksContainer > 
            {books.map((book) => (
                <img 
                key={ book.id }
                src={ book.src }/>
                ))}
            </NewBooksContainer>

            <RecomendCard
                title="Maybe you get curious about"
                subtitle="Angular 11"
                description="Building an application with Google plataform."
                img={ bookImg }
            />
           
        </LastestReleasesContainer>
    )
}