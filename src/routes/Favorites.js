import { useEffect, useState } from 'react';
import styled from 'styled-components'
import { deleteFavorite, getFavorites } from '../services/favorites';

const AppContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background-image: linear-gradient(90deg, #002F52 35%, #326589);
`

const ResultsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`

const Results = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px 0;
    cursor: pointer;
    text-align: center;
    padding: 0 100px;
    p {
        width: 200px;
        color: #FFF;
    }
    img {
        width: 100px;
    }
    &:hover {
        border: 1px solid white;
    }
`

const Title = styled.h2`
    color: #FFF;
    font-size: 36px;
    text-align: center;
    width: 100%;
    padding-top: 35px
`


function Favorites() {
  const [favorites, setFavorites] = useState([])

  async function fetchFavorites() {
    const APIfavorites = await getFavorites()
    setFavorites(APIfavorites)
  }

  async function deleteFavoriteBook(id) {
    await deleteFavorite(id)
    await fetchFavorites()
    alert(`Book with id: ${id} removed from favorites.`)
  }

  useEffect(() => {
    fetchFavorites()
  }, [])

  return (
    <AppContainer>
     <div>
       <Title>Here are your favorite books:</Title>
       <ResultsContainer>
         {
           favorites.length !== 0 ? favorites.map( favorite => (
             <Results onClick={ () => deleteFavoriteBook(favorite.id) }>
               <p>{favorite.name}</p>
               
             </Results>
           )) : null
         }
       </ResultsContainer>
     </div>
   </AppContainer>


  );
}

/*<img src={livroImg}/>*/

export default Favorites;
