import Carousel from 'react-bootstrap/Carousel';

function Caroussel1() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://img.freepik.com/fotos-gratis/trabalhador-da-construcao_329181-2851.jpg?w=740&t=st=1699359682~exp=1699360282~hmac=1ff56ab3ebf7e045575a9475cd5f0ebe925c1a9e5b7d2d25bdc339f70db75c29"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://img.freepik.com/fotos-gratis/pilhas-de-tijolo-colocadas-no-chao-da-fabrica_1150-15102.jpg?w=740&t=st=1699359716~exp=1699360316~hmac=6e2f770335a14ecdf0b1839b349068a806577ec862bff19b273fb893249a5739"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://img.freepik.com/fotos-gratis/alvenaria-trabalhador-da-construcao-que-constroi-uma-parede-de-tijolo_1150-14756.jpg?w=740&t=st=1699359737~exp=1699360337~hmac=5d9fcc1d5266f2c833795da2e62200eea572d6b169515bd940a2e702c7019248"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default Caroussel1;