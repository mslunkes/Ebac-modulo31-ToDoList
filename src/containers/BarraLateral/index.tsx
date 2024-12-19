import FiltroCard from '../../components/FiltroCard'

import * as S from './styles'

const BarraLateral = () => (
  <S.Aside>
    <div>
      <S.Campo type="text" placeholder="Buscar"></S.Campo>
      <S.Filtros>
        <FiltroCard ativo={false} legenda="pendentes" contador={1}></FiltroCard>
        <FiltroCard
          ativo={false}
          legenda="concluídas"
          contador={2}
        ></FiltroCard>
        <FiltroCard ativo={false} legenda="urgentes" contador={3}></FiltroCard>
        <FiltroCard
          ativo={false}
          legenda="importantes"
          contador={4}
        ></FiltroCard>
        <FiltroCard ativo={false} legenda="normal" contador={5}></FiltroCard>
        <FiltroCard ativo legenda="todas" contador={6}></FiltroCard>
      </S.Filtros>
    </div>
  </S.Aside>
)

export default BarraLateral
