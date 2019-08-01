import React, { FunctionComponent } from 'react'

import TrophyIcon from '../images/icone_trofeu@2x.png'
import Logo from '../images/logo_codecup_02@2x.png'

const About: FunctionComponent = () => (
  <section id="about" className="bg-white flex w-90 w-100-l center pv9">
    <div
      className="flex-l justify-center dn"
      style={{ writingMode: 'vertical-lr', transform: 'rotate(-180deg)' }}
    >
      <p className="ph5">V T E X :: C O D E C U P</p>
    </div>
    <div className="flex flex-column flex-row-l ml8-l justify-around flex-grow-1">
      <div className="w-40-l pt6">
        <h1 className="t-heading-1" style={{ fontSize: '5rem' }}>
          o que é?
        </h1>
        <p className="lh-copy mv7">
          É a competição de programação da VTEX em que programadores de todos os
          níveis testam suas habilidades. A competição reúne programadores de
          todo o Brasil em somente duas etapas, online e a final presencial no
          Rio de Janeiro!
        </p>
        <img src={Logo} className="w-50-l w-60 mt7 mb8" alt="VTEX Code Cup" />
        <p className="c-emphasis t-heading-1">
          Inscreva-se e teste seus limites.
        </p>
        <p className="c-emphasis t-heading-3">INSCRIÇÕES ENCERRADAS</p>
      </div>
      <div className="bg-emphasis w-40-l br3 pv7 ph3 flex flex-column items-center justify-around">
        <p className="t-heading-1 c-on-muted-1 w-75 center">
          Prêmio final: viagem à Rússia para acompanhar a final da ICPC*
        </p>
        <img src={TrophyIcon} className="w-40 center mv6" alt="" />
        <a className="link" href="https://vtexcc19.kattis.com/">
          <button className="c-on-base--inverted br-pill mt6 mb3 bg-base--inverted ph9 b--none pointer">
            <p className="t-heading-4">Participar</p>
          </button>
        </a>
        <p className="t-mini w-75 c-on-base--inverted">
          * Caso a organização do ACM-ICPC não autorize acompanhar a final da
          ICPC ou o vencedor já esteja classificado para a final do ICPC em
          2020, poderá solicitar a troca do prêmio por uma participação no
          Moscow Pre-Finals Workshop ICPC 2020.
        </p>
      </div>
    </div>
  </section>
)

export default About
