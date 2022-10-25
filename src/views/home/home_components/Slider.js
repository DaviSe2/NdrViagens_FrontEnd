function Slider() {
    return (
        <div id="destaques" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
                <li data-target="#destaques" data-slide-to="0" className="active"></li>
                <li data-target="#destaques" data-slide-to="1"></li>
                <li data-target="#destaques" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src="./imagens/hobbiton.jpg" className="d-block w-100" alt="Hobbiton" />
                    <div className="carousel-caption d-md-block">
                        <h2>Hobbiton</h2>
                        <p>Conheça a maravilhosa vila dos Hobbits. O lugar fantástico que serviu de cenário para às icônicas trilogias de filmes “O Senhor dos Anéis” e “O Hobbit”.</p>
                        <a href="#" className="main-btn">Ver Pacote</a>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src="./imagens/Kennedy Space Center.jpg" className="d-block w-100" alt="Kennedy Space Center" />
                    <div className="carousel-caption d-md-block">
                        <h2>Kennedy Space Center</h2>
                        <p>Um museu interativo, com diversos artefatos de ciência, onde é possivel conhecer programas e atividades da Nasa.</p>
                        <a href="#" className="main-btn">Ver Pacote</a>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src="./imagens/Museu-Ghibli-Mitaka.webp" className="d-block w-100" alt="Museu Ghibli" />
                    <div className="carousel-caption d-md-block">
                        <h2>Museu Ghibli</h2>
                        <p>O Museu Ghibli é um espaço de arte totalmente dedicado às obras do Studio Ghibli. Elaborado pelo próprio Hayao Miyazaki.</p>
                        <a href="#" className="main-btn">Ver Pacote</a>
                    </div>
                </div>
            </div>
            <a href="#destaques" className="carousel-control-prev" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a href="#destaques" className="carousel-control-next" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
        </div>
    );
} 
export default Slider;