import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { ProfileCard, ProfileContainer, ProfileContent } from './style'
import {
  faArrowUpRightFromSquare,
  faBuilding,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons'

export function Profile() {
  return (
    <ProfileContainer>
      <ProfileCard>
        <img
          src="https://img.freepik.com/fotos-gratis/retrato-do-close-up-adoravel-jovem-mulher-afro-americana-com-cabelo-encaracolado-afro-sorrindo-com-uma-expressao-agradavel-feliz-aproveitando-as-ferias-de-inverno-vestindo-blusa-parede-azul_1258-35442.jpg?w=740&t=st=1705592689~exp=1705593289~hmac=0dafeecb9096e2c70e7dbd8252f194b2860d0d86c15df079e0543eeb569eb911"
          alt=""
        />
        <ProfileContent>
          <section>
            <h3>Cameron Williamson </h3>
            <a href="http://">
              GITHUB
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </a>
          </section>
          <span>
            Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
            viverra massa quam dignissim aenean malesuada suscipit. Nunc,
            volutpat pulvinar vel mass.
          </span>
          <div>
            <p>
              <FontAwesomeIcon icon={faGithub} />
              cameronwll
            </p>

            <p>
              <FontAwesomeIcon icon={faBuilding} />
              Rocketseat
            </p>

            <p>
              <FontAwesomeIcon icon={faUserGroup} />
              32 seguidores
            </p>
          </div>
        </ProfileContent>
      </ProfileCard>
    </ProfileContainer>
  )
}
