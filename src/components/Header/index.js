import Logo from '../Logo'
import HeaderOptions from '../HeaderOptions';
import HeaderIcons from '../HeaderIcons';
import styled from 'styled-components'

const HeaderContainer = styled.header`
    background-color: #FFF;
    display: flex;
    justify-content: center;
`

export default function Header() {
    return(
        <HeaderContainer>
            <Logo/>
            <HeaderOptions/>
            <HeaderIcons/>
        </HeaderContainer>
        
    )
}