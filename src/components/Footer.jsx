import '../cabeca.css';

const Footer = () => <footer className="page-footer font-small blue pt-4 toto bg-primary">
    <div className="container-fluid text-center text-md-left">
        <div className="row">
            <div className="col-md-6 mt-md-0 mt-3">
                <h5 className="text-uppercase">ConstruBem</h5>
                <p>A loja que constroi seus sonhos</p>
            </div>

            <hr className="clearfix w-100 d-md-none pb-0"/>

            <div className="col-md-3 mb-md-0 mb-3 bg-dark">
                <h5 className="text-uppercase">Sobre a loja</h5>
                <ul className="list-unstyled">
                    <li><a href="/">Home</a></li>
                    <li><a href="/contato">Cadastro</a></li>
                    <li><a href="/sobre">Login</a></li>
                </ul>
            </div>
        </div>
    </div>
</footer>

export default Footer