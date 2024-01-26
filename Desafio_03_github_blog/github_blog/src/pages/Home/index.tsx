import { Profile } from '../../components/Profile'
import { Cards } from './components/Cards'
import { SearchForm } from './components/SearchForm'
import { HomeContainer, HomeContent } from './style'

export function Home() {
  return (
    <>
      <Profile />
      <HomeContainer>
        <HomeContent>
          <h1>Publicações</h1>
          <span>6 publicações</span>
        </HomeContent>

        <SearchForm />
        <Cards />
      </HomeContainer>
    </>
  )
}
