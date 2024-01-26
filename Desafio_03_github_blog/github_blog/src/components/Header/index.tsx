import { HeaderContainer } from './style'
import BackgroundBanner from '../../assets/BackgroundBanner.svg'

export function Header() {
  return (
    <HeaderContainer>
      <img src={BackgroundBanner} alt="" />
    </HeaderContainer>
  )
}
