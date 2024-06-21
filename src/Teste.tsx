//TESTE DE STYLED COMPONENTS

import styled from "styled-components"

//Para aplicar a propriedade "principal" no Botao, foi necessário cria-la da seguinte forma:
type BotaoProps = {
  principal: boolean
  fontSize?: string
}
//A "?" deve ser colocada para dizer que uma propriedade não é obrigatória para o elemento

//Aqui o Botao foi criado usando styled components, que é feito da seguinte forma:
const Botao = styled.button<BotaoProps>`
  background-color: ${(props) => (props.principal ? "green" : "blue")};
  font-size: ${(props) => props.fontSize || "16px"};
`
//Em "${(props) => (props.principal ? "green" : "blue")}", a cor do botão é definida para:
//Caso o Botao possua "Principal" como true, deve ser verde, caso contrário deverá ser azul
//Em "${(props) => props.fontSize || "16px"}", é  checado se há a propriedade "fontSize" no Botao,
//e ao ser encontrada seu valor é usado como font-size do elemento

//Aqui uma outra versão do Botao foi criada derivando do original criado anteriormente
// A cor definida aqui é superior a cor definida pelo atributo "Principal", ou seja, o BotaoPerigo será vermelho, não verde
const BotaoPerigo = styled(Botao)`
  background-color: red;
  color: white;

  span {
    text-decoration: line-through;
  }
`
//Por conta do BotaoPerigo lá em baixo ter recebido a propriedade "as='a'", para ser tratado como um link, isso possibilitou
//receber um "span" dentro de si, agora o span pode ser personalizado com propriedades de texto, aumentando as possibilidades
//de modificação estética do botão

function Teste() {
  return (
    <>
      <Botao fontSize="18px" principal>
        Clique Aqui
      </Botao>
      <Botao fontSize="14px" principal={false}>
        Clique Aqui
      </Botao>
      {/* "As" pode ser usado para alterar como um elemento deve ser visto pelo navegador, ou seja, mesmo tendo sido criado
      como um botão, agora é tratado como um link */}
      <BotaoPerigo as="a" principal>
        <span>Não Clique Aqui</span>
      </BotaoPerigo>
    </>
  )
}

export default Teste

//Continua em "styles.js"
