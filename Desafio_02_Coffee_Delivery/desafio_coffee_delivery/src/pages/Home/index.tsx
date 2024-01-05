import coffeesList from '../../data.json'
import BannerCoffee from '../../assets/banner-coffee.png'
import { Coffee, MapPin, Package, Timer } from 'phosphor-react'
import { CoffeeList } from '../../components/CoffeeList'
import {
  BackgroundBannerIcons,
  BannerContainer,
  BannerImage,
  CoffeesContainer,
  HomeContainer,
  ListBanner,
  ListBannerContainer,
  Cards,
} from './styles'

export function Home() {
  return (
    <HomeContainer>
      <BannerContainer>
        <header>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <span>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </span>
          <ListBannerContainer>
            <ListBanner>
              <BackgroundBannerIcons color={'yellow-dark'}>
                <MapPin size={16} weight="fill" />
              </BackgroundBannerIcons>
              <span>Compra simples e segura</span>
            </ListBanner>

            <ListBanner>
              <BackgroundBannerIcons color={'base-text'}>
                <Package size={16} weight="fill" />
              </BackgroundBannerIcons>
              <span>Embalagem mantém o café intacto</span>
            </ListBanner>

            <ListBanner>
              <BackgroundBannerIcons color={'yellow'}>
                <Timer size={16} weight="fill" />
              </BackgroundBannerIcons>
              <span>Entrega rápida e rastreada</span>
            </ListBanner>

            <ListBanner>
              <BackgroundBannerIcons color={'purple'}>
                <Coffee size={16} weight="fill" />
              </BackgroundBannerIcons>
              <span>O café chega fresquinho até você</span>
            </ListBanner>
          </ListBannerContainer>
        </header>
        <BannerImage>
          <img src={BannerCoffee} alt="" />
        </BannerImage>
      </BannerContainer>

      <CoffeesContainer>
        <h2>Nossos cafés</h2>
        <Cards>
          {coffeesList?.coffees.map((coffee) => {
            return <CoffeeList key={coffee.id} coffee={coffee} />
          })}
        </Cards>
      </CoffeesContainer>
    </HomeContainer>
  )
}
