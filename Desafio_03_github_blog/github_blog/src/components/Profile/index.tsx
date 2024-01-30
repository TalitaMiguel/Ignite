import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { ProfileCard, ProfileContainer, ProfileContent } from './style'
import {
  faArrowUpRightFromSquare,
  faBuilding,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons'
import { useContext } from 'react'
import { IssuesContext } from '../../contexts/IssuesContext'

export function Profile() {
  const { user } = useContext(IssuesContext)

  return (
    <ProfileContainer>
      <ProfileCard>
        <img src={user?.avatar_url} alt="" />
        <ProfileContent>
          <section>
            <h3>{user?.name}</h3>
            <a href={user?.html_url} target="_blank" rel="noreferrer">
              GITHUB
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </a>
          </section>
          <span>{user?.bio}</span>
          <div>
            <p>
              <FontAwesomeIcon icon={faGithub} />
              {user?.login}
            </p>

            <p>
              <FontAwesomeIcon icon={faBuilding} />
              Kluber
            </p>

            <p>
              <FontAwesomeIcon icon={faUserGroup} />
              {user?.followers} seguidores
            </p>
          </div>
        </ProfileContent>
      </ProfileCard>
    </ProfileContainer>
  )
}
