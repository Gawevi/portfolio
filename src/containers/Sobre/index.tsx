import Titulo from "../../components/Titulo"
import Paragrafo from "../../components/Paragrafo"
import { GithubSecao } from "./styles"

const Sobre = () => (
  <section>
    <Titulo fontSize={16}>Sobre Mim</Titulo>
    <Paragrafo>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Error sequi quas,
      delectus amet vel nihil temporibus? Aliquam, suscipit, odio tenetur quis
      adipisci asperiores ea possimus quibusdam inventore explicabo fuga quae!
    </Paragrafo>
    <GithubSecao>
      <img src="https://github-readme-stats.vercel.app/api?username=gawevi&show_icons=true&theme=dracula&include_all_commits=true&count_private=true" />
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=gawevi&layout=compact&langs_count=7&theme=dracula" />
    </GithubSecao>
  </section>
)

export default Sobre
