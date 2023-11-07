import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

const servicos = [
  {
    titulo: "Pá",
    preco: "R$15,00",
    texto: "compre já",
    img: "https://images.tcdn.com.br/img/img_prod/828968/pa_bico_c_cabo_n_4_3599_1_a26bfbc963e7163a000ae4d71907e6ad.png"
  },
  {
    titulo: "Tijolo",
    preco: "R$1,00",
    texto: "compre já",
    img: "https://images.tcdn.com.br/img/img_prod/999130/tijolo_ceramico_de_vedacao_14x19x39cm_8073_1_68fe793c144c5af92ec609f70aa76c52.jpeg"
  },
  {
    titulo: "Martelo",
    preco: "R$40,00",
    texto: "compre já",
    img: "https://cdn.leroymerlin.com.br/products/martelo_de_unha_27mm_tramontina_90709234_0001_600x600.jpg"
  },
]


function Cardon() {
  return (
    <CardGroup>
      {servicos.map(({titulo, preco, texto, img}) =>(
        <Card key ={titulo}>
          <Card.Img variant="top" src={img} />
          <Card.Body>
          <Card.Title>{titulo}</Card.Title>
          <Card.Text>
          {texto}
          <br/>
          {preco}
          </Card.Text>
        </Card.Body>
        </Card>
      ))}
      {/* <Card >
        <Card.Img variant="top" src="data:image/jpeg;base64,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" />
        <Card.Body>
          <Card.Title>Paprica</Card.Title>
          <Card.Text>
          A páprica é um pó vermelho, seco e moído, feito a partir de pimentões e pimentas muito utilizado no Brasil, na América Central e nos países ibéricos como tempero
          </Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Card.Img variant="top" src="https://armazemsaovito.fbitsstatic.net/img/p/sal-marinho-150191/346680.jpg?w=344&h=344&v=no-change&qs=ignore" />
        <Card.Body>
          <Card.Title>Sal</Card.Title>
          <Card.Text>
          O sal está presente na Terra desde a sua formação, e foi em um meio salino que surgiram os primeiros seres unicelulares, desempenhando um importante papel na evolução dos seres vivos e na história da humanidade
          </Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Card.Img variant="top" src="https://cdn.shopify.com/s/files/1/0609/1420/4772/files/700806_H.jpg?v=1682514708&width=480" />
        <Card.Body>
          <Card.Title>Spirulina</Card.Title>
          <Card.Text>
          A spirulina ou espirulina é uma cianobactéria (e não uma alga, como ficou mundialmente conhecida) utilizada há milênios pela humanidade, devido à sua alta concentração de nutrientes e propriedades anti-inflamatórias – ela é um suplemento natural dos mais completos disponíveis na natureza.
          </Card.Text>
        </Card.Body>
      </Card> */}
    </CardGroup>
  );
}

export default Cardon;