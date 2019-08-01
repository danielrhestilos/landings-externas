import React, { FunctionComponent } from 'react'

import Go from '../images/imagem_go_@2x.png'

const Subscribe: FunctionComponent = () => (
  <section className="flex flex-column pa6 w-90 ml-auto-l mr0-l center">
    <div className="flex flex-row-l flex-column justify-around-l items-center">
      <div className="w-40-l">
        <p className="t-heading-1">como funciona?</p>
        <p className="lh-copy">
          Inscreva-se, no período de{' '}
          <strong>03 de maio de 2019 a 10 de maio de 2019</strong>, até as 21h
          (horário de brasília), para participar da primeira fase (online) da
          VTEX Code Cup. Essa etapa vai acontecer no dia{' '}
          <strong>11 de maio de 2019, as 13h (horário de Brasília)</strong> e
          terá duração de <strong>3h30min</strong>.
        </p>
        <p className="lh-copy">
          Os primeiros 10 colocados no ranking geral da primeira fase, serão
          convidados para a segunda fase (presencial) que acontecerá no dia{' '}
          <strong>08 de junho de 2019</strong>, na sede da VTEX, no Rio de
          Janeiro. Nessa etapa, os competidores serão submetidos a um novo
          contest.
        </p>
        <p className="lh-copy">
          O primeiro colocado no ranking geral será o vencedor do VTEX Code Cup
          e como prêmio receberá uma viagem à Rússia para acompanhar a final
          mundial ACM-ICPC em 2020.
        </p>
      </div>
      <div className="flex flex-column items-center w-50-l">
        <img src={Go} className="mv4" alt="" />
        <a className="link" href="https://vtexcc19.kattis.com/">
          <button className="c-on-base--inverted br-pill mt6 mb3 bg-emphasis ph9 b--none pointer">
            <p className="t-heading-4">Participar</p>
          </button>
        </a>
      </div>
    </div>
  </section>
)

export default Subscribe
