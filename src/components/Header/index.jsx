import { Container, Menu, HamburguerMenu } from './styles'
import {
  TiSocialFacebook,
  TiSocialTwitter,
  TiSocialYoutube
} from 'react-icons/ti'
import { IoLogoInstagram } from 'react-icons/io'
import { IoClose } from 'react-icons/io5'
import { SiFlickr, SiTiktok } from 'react-icons/si'

import { useState } from 'react'

import Logo from '../../assets/logo-chapada2Asset-1-8-768x189.png'

export function Header() {
  const [active, setActive] = useState(false)
  const [title, setTitle] = useState('Início')

  const ToggleMode = () => {
    setActive(!active)
  }
  const nameTitle = (e) => {
    const page = e.target.innerText.toLowerCase()
    const pageDone = page.charAt(0).toUpperCase() + page.slice(1)
    setTitle(pageDone)
    setActive(!active)
  }

  return (
    <Container>
      <div className={active ? 'menuOverlay' : 'menuOverlayClose'}></div>
      <Menu>
        <a href="https://www.sc.gov.br/">
          <img src={Logo} alt="Logo do site" />
        </a>

        <ul>
          <li>
            <a href="https://estado.sc.gov.br/noticias/" target="_blank">
              Portal de notícias
            </a>
          </li>
          <li>
            <a href="https://www.sc.gov.br/" target="_blank">
              
              Portal de serviços
            </a>
          </li>
          <li>
            <a href="https://doe.sea.sc.gov.br/" target="_blank">
              
              Diário oficial
            </a>
          </li>
          <li>
            <a
              href="https://estado.sc.gov.br/acesso-a-informacao/"
              target="_blank"
            >
              Acesso à informação
            </a>
          </li>
          <li>
            <a
              href="https://estado.sc.gov.br/orgaos-do-governo/"
              target="_blank"
            >
              
              orgãos do governo
            </a>
          </li>
          <li>
            <a href="https://estado.sc.gov.br/" target="_blank">
              
              sobre sc
            </a>
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
            <a
              href="https://www.tiktok.com/@santacatarinaemfotos"
              target="_blank"
            >
              <SiTiktok />
            </a>
          </li>
        </ul>
      </Menu>

      <HamburguerMenu>
        <nav>
          <button onClick={ToggleMode}>
            <span></span>
            <span></span>
            <span></span>
          </button>
          <p>{title}</p>
        </nav>

        <div className={active ? 'menuOpen' : 'menuClose'}>
          <button onClick={ToggleMode}>
            <IoClose />
          </button>

          <div className="list">
            <ul>
              <li>
                <a onClick={e => nameTitle(e)} href="#">
                  Início
                </a>
              </li>
              <li>
                <a onClick={e => nameTitle(e)} href="#">
                  Serviços ao cidadão
                </a>
              </li>
              <li>
                <a onClick={e => nameTitle(e)} href="#">
                  Serviços por categoria
                </a>
              </li>
              <li>
                <a onClick={e => nameTitle(e)} href="#">
                  Galeria de aplicativos
                </a>
              </li>
              <li>
                <a onClick={e => nameTitle(e)} href="#">
                  CONTATO
                </a>
              </li>
            </ul>
          </div>
        </div>
      </HamburguerMenu>
    </Container>
  )
}
