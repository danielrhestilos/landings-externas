import React, { FunctionComponent } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faTwitter,
  faFacebook,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons'

import Logo from '../images/logo_codecup_03@2x.png'

const Footer: FunctionComponent = () => (
  <footer className="bg-base--inverted flex flex-column flex-row-l justify-around pa8">
    <div className="flex flex-column w-25-l justify-around">
      <img src={Logo} className="w-70-l" alt="VTEX" />
      <div className="flex justify-between mb7 mt9 mb0-l c-on-base--inverted">
        <div>
          <a
            className="link c-on-base--inverted"
            href="https://twitter.com/vtexonline"
          >
            <FontAwesomeIcon icon={faTwitter} />
          </a>
        </div>
        <div>
          <a
            className="link c-on-base--inverted"
            href="https://www.facebook.com/vtexonline/"
          >
            <FontAwesomeIcon icon={faFacebook} />
          </a>
        </div>
        <div>
          <a
            className="link c-on-base--inverted"
            href="https://www.instagram.com/vtextruecloud/"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </div>
      </div>
    </div>
    <div className="flex flex-column justify-around w-40-l c-on-base">
      <div className="flex-l list justify-between">
        <p className="ttu">
          <strong>
            <a className="link c-on-base--inverted" href="https://vtex.com">
              vtex.com
            </a>
          </strong>
        </p>
        <p className="ttu">
          <strong>
            <a className="link c-on-base--inverted" href="/rules">
              termos e condições
            </a>
          </strong>
        </p>
        <p className="ttu">
          <strong>
            <a
              className="link c-on-base--inverted"
              href="https://careers.vtex.com"
            >
              careers
            </a>
          </strong>
        </p>
        <p className="ttu">
          <strong>
            <a
              className="link c-on-base--inverted"
              href="mailto:codecup@vtex.com"
            >
              contact us
            </a>
          </strong>
        </p>
      </div>
      <p className="c-on-base--inverted">
        VTEX - Unified Cloud Commerce ™. Gerenciamos bilhões de sessões com um
        GMV estimado em mais de R$ 8bilhões em 3.000 lojas.
      </p>
    </div>
  </footer>
)

export default Footer
