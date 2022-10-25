function Contato(){
    return(
        <div id="contato">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h3 className="main-title">Entre em contato conosco</h3>
                    </div>
                    <div className="col-md-3 contato-box">
                        <i className="fas fa-phone"></i>
                        <p><span className="contato-title">Ligue para:</span></p>  
                        <p>(11)97070-7070</p>
                    </div>
                    <div className="col-md-3 contato-box">
                        <i className="fa fa-clock-o"></i>
                        <p><span className="contato-title">Horários:</span></p>
                        <p>08h00 às 19h00</p>
                    </div>
                    <div className="col-md-3 contato-box">
                        <i className="fas fa-envelope"></i>
                        <p><span className="contato-title">Envie um e-mail:</span></p>
                        <p>contato@ndrviagens.com</p>
                    </div>
                    <div className="col-md-3 contato-box">
                        <i className="fas fa-map-marker-alt"></i>
                        <p><span className="contato-title">Venha nos visitar:</span></p>
                        <p>Rua Lorem Ipsum, 7070</p>
                    </div>
                    <div className="col-md-6" id="msg-box">
                        <p>Ou nos deixe uma mensagem:</p>
                    </div>
                    <div className="col-md-6" id="contato-form">
                        <form action="">
                            <input type="email" className="form-control" placeholder="E-mail" name="email"/>
                            <input type="text" className="form-control" placeholder="Assunto" name="assunto"/>
                            <textarea className="form-control" rows="3" placeholder="Sua mensagem..." name="mensagem"></textarea>
                            <input type="submit" className="main-btn" value="enviar"/>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Contato;