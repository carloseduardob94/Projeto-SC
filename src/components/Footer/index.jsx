import { FaMapMarkerAlt, FaClock, FaLock } from 'react-icons/fa'
import {
  TiSocialFacebook,
  TiSocialTwitter,
  TiSocialYoutube
} from 'react-icons/ti'
import { IoLogoInstagram } from 'react-icons/io'
import { SiFlickr, SiTiktok } from 'react-icons/si'

import { Container, Info, Menu, Map, SocialNetwork } from './styles'

import Mapa from '../../assets/Mapa_cinza-480x310-1.png'
import Logo from '../../assets/logo-chapada2Asset-1-8-768x189.png'

export function Footer() {
  return (
    <Container>
      <main>
        <Info>
          <a href="https://www.sc.gov.br/">
            <img src={Logo} alt="" />
          </a>
          <div className="adress">
            <FaMapMarkerAlt />
            <div className="text-info">
              <p>Centro Administrativo do Governo </p>
              <p>Rod. SC 401 - km.5 nº 4.600. </p>
              <p>Florianópolis | CEP: 88032-900 </p>
            </div>
          </div>

          <div className="timer">
            <FaClock />
            <p>
              Horário de Expediente: Das 12h ás 19h, de segunda a sexta-feira
              (Decreto Nº 1.410 de 18 de Dezembro de 2017){' '}
            </p>
          </div>

          <div className="private">
            <FaLock />
            <a
              href="https://estado.sc.gov.br/politica-privacidade/"
              target="_blank"
            >
              Política de privacidade
            </a>
          </div>
        </Info>

        <Menu>
          <div>
            <h3>MENU</h3>
            <nav>
              <a href="https://www.sc.gov.br/#home" target="_blank">
                INÍCIO
              </a>
              <br />
              <a href="https://www.sc.gov.br/#servicos" target="_blank">
                SERVIÇOS AO CIDADÃO
              </a>
              <br />
              <a
                href="https://www.sc.gov.br/#servicos-categoria"
                target="_blank"
              >
                SERVIÇOS POR CATEGORIA
              </a>
              <br />
              <a href="https://www.sc.gov.br/#apps" target="_blank">
                GALERIA DE APLICATIVOS
              </a>
              <br />
              <a href="https://www.sc.gov.br/#contato" target="_blank">
                CONTATO
              </a>
              <br />
            </nav>
          </div>

          <div>
            <h3>LINKS EXTERNOS</h3>
            <a href="https://www.sc.gov.br/#home" target="_blank">
              PORTAL DE NOTÍCIAS
            </a>
            <br />
            <a href="https://www.sc.gov.br/#servicos" target="_blank">
              DIÁRIO OFICIAL
            </a>
            <br />
            <a href="https://www.sc.gov.br/#servicos-categoria" target="_blank">
              TRANSPARÊNCIA
            </a>
            <br />
            <a href="https://www.sc.gov.br/#apps" target="_blank">
              ORGÃOS DO GOVERNO
            </a>
            <br />
          </div>
        </Menu>

        <Map>
          <img src={Mapa} alt="Mapa de SC" />
        </Map>
      </main>
      <SocialNetwork>
        <p>
          Copyright © 2022 Todos os Direitos Reservados SC - Governo de Santa
          Catarina | Desenvolvimento - CIASC | Gestão de Conteúdo- SEA / DITI /
          GESIN
        </p>
        <div>
          <a href="https://www.facebook.com/governosc" target="_blank">
            <TiSocialFacebook />
          </a>
          <a href="https://twitter.com/GovSC" target="_blank">
            <TiSocialTwitter />
          </a>
          <a href="https://www.youtube.com/GovernoSC" target="_blank">
            <TiSocialYoutube />
          </a>
          <a href="https://www.instagram.com/GovernoSC/" target="_blank">
            <IoLogoInstagram />
          </a>
          <a href="https://www.flickr.com/photos/governosc/" target="_blank">
            <SiFlickr />
          </a>
          <a href="https://www.tiktok.com/@santacatarinaemfotos">
            <SiTiktok />
          </a>
        </div>
      </SocialNetwork>
    </Container>
  )
}
