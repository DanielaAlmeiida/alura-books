import LastestReleases from '../components/LatestReleases';
import Search from '../components/Search'
import styled from 'styled-components'

const AppContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background-image: linear-gradient(90deg, #002F52 35%, #326589);
`

function Home() {
  return (
    <AppContainer> 
        <Search />   
        <LastestReleases />
    </AppContainer>
  );
}

export default Home;
