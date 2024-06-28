import { Titulo as TituloEstilo } from "./styles"

export type Props = {
  children: string
  fontSize?: number
  //children deve ser usado para que um componente aceite um valor "dentro" de si, e não como uma propriedade
  //como dessa forma: <Titulo>Nome<Titulo/>
}

const Titulo = (props: Props) => (
  <TituloEstilo fontSize={props.fontSize}>{props.children}</TituloEstilo>
)

export default Titulo
