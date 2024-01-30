import { useContext } from 'react'
import { Profile } from '../../components/Profile'
import { Cards } from './components/Cards'
import { SearchForm } from './components/SearchForm'
import { HomeContainer, HomeContent } from './style'
import { IssuesContext } from '../../contexts/IssuesContext'

export function Home() {
  const { issues } = useContext(IssuesContext)

  return (
    <>
      <Profile />
      <HomeContainer>
        <HomeContent>
          <h1>Publicações</h1>
          <span>{issues.length} publicações</span>
        </HomeContent>

        <SearchForm />

        <Cards />
      </HomeContainer>
    </>
  )
}
