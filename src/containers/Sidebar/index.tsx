import Avatar from "../../components/Avatar"
import Paragrafo from "../../components/Paragrafo"
import Titulo from "../../components/Titulo"
import { BotaoTema, Descricao, SidebarContainer } from "./styles"

const SideBar = () => (
  <aside>
    <SidebarContainer>
      <Avatar />
      <Titulo fontSize={20}>Gawevi</Titulo>
      <Paragrafo tipo="secundario" fontSize={16}>
        @gawevi
      </Paragrafo>
      <Descricao tipo="principal" fontSize={12}>
        Aspirante a Escritor e Estudante de Programação
      </Descricao>
      <BotaoTema>Trocar Tema</BotaoTema>
    </SidebarContainer>
  </aside>
)

export default SideBar
