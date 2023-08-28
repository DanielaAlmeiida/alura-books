import Profile from '../../img/profile.svg'
import Bag from '../../img/bag.svg'

import styled from 'styled-components'

const Icons = styled.ul`
  display: flex;
  align-items: center;
`

const Icon = styled.li`
  margin-right: 40px;
  width: 25px;
`


const icons = [Profile, Bag]

export default function HeaderIcons() {
    return (
        <Icons>
          { icons.map( (icon) => (
            <Icon>
              <img src={ icon }></img>
            </Icon>
          ) ) }      
        </Icons>
    )
}