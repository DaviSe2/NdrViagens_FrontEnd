function Novidades(){
    return(
        <div id="novidades-area">
            <div className="container">
                <div className="col-md-12">
                    <h3 className="main-title">Fique por dentro das novidades</h3>
                </div>
                <p>Assine nossa lista de e-mails, e receba nossas promoções em primeira mão.</p>
                <form action="">
                    <input type="email" className="form-control" id="email-input" name="email" placeholder="Seu melhor e-mail"/>
                    <input type="submit" id="novidades-btn" value="Inscrever"/>
                </form>
            </div>
        </div>
    )
}
export default Novidades;