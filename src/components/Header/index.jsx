import { Container, Menu } from './styles'
import {
  TiSocialFacebook,
  TiSocialTwitter,
  TiSocialYoutube
} from 'react-icons/ti'
import { IoLogoInstagram } from 'react-icons/io'
import { SiFlickr, SiTiktok } from 'react-icons/si'

import Logo from '../../assets/logo-chapada2Asset-1-8-768x189.png'

export function Header() {
  return (
    <Container>
      <Menu>
        <a href="https://www.sc.gov.br/">
          <img src={Logo} alt="Logo do site" />
        </a>

        <ul>
          <li>
            <a href="https://estado.sc.gov.br/noticias/" target="_blank">Portal de notícias</a>
          </li>
          <li>
            <a href="https://www.sc.gov.br/" target="_blank"> Portal de serviços </a>
          </li>
          <li>
            <a href="https://doe.sea.sc.gov.br/" target="_blank"> Diário oficial </a>
          </li>
          <li>
            <a href="https://estado.sc.gov.br/acesso-a-informacao/" target="_blank"> Acesso à informaçã o</a>
          </li>
          <li>
            <a href="https://estado.sc.gov.br/orgaos-do-governo/" target="_blank"> orgãos do governo</a>
          </li>
          <li>
            <a href="https://estado.sc.gov.br/" target="_blank"> sobre sc </a>
          </li>
          <li>
            <a href="https://www.facebook.com/governosc" target="_blank">
              <TiSocialFacebook />
            </a>
          </li>
          <li>
            <a href="https://twitter.com/GovSC" target="_blank">
              <TiSocialTwitter />
            </a>
          </li>
          <li>
            <a href="https://www.youtube.com/GovernoSC" target="_blank">
              <TiSocialYoutube />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/GovernoSC/" target="_blank">
              <IoLogoInstagram />
            </a>
          </li>
          <li>
            <a href="https://www.flickr.com/photos/governosc/" target="_blank">
              <SiFlickr />
            </a>
          </li>
          <li>
            <a href="https://www.tiktok.com/@santacatarinaemfotos" target="_blank">
              <SiTiktok />
            </a>
          </li>
        </ul>
      </Menu>
    </Container>
  )
}
