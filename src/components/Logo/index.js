import logo from '../../img/logo.svg'
import styled from 'styled-components'


const LogoContainer = styled.div`
  display: flex;
  font-size: 30px;
`

const LogoImage = styled.img`
  margin-right: 10px; 
`

export default function Logo() {
    return (
        <LogoContainer>
          <LogoImage
            src={ logo }
            alt="Logo"
            className="logo-img"
          />
          <p><strong>Alura</strong>Books</p>
        </LogoContainer>
)} 
