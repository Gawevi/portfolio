import { P } from "./styles"

export type Props = {
  children: string
  tipo?: "principal" | "secundario"
  fontSize?: number
}

const Paragrafo = ({ fontSize, children, tipo = "principal" }: Props) => (
  <P fontSize={fontSize} tipo={tipo}>
    {children}
  </P>
)

export default Paragrafo
