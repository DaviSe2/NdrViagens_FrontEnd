import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState, Suspense, lazy } from 'react';
import token from "./components/token";

const Home = lazy(() => import('./views/home'))
const GerenciarPassagens = lazy(() => import('./views/gerenciarPassagens'))
const NovaPassagem = lazy(() => import('./views/novaPassagem'))
const NovoRoteiro = lazy(() => import('./views/novoRoteiro'))
const GerenciarRoteiros = lazy(() => import('./views/gerenciarRoteiros'))
const Header = lazy(() => import('./components/header'));
const Copyright = lazy(() => import('./components/copyright'));

function App() {

  const [logado, setLogado] = useState(true)

    function checkToken() {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

        var urlencoded = new URLSearchParams();
        urlencoded.append("token", token.access);

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: urlencoded,
            redirect: 'follow'
        };

        fetch("http://localhost:8080/oauth/check_token", requestOptions)
            .then(response => {
                if (response.ok) {
                    setLogado(true)
                } else {
                  setLogado(false)
                }
            })
            .catch(error => console.log('error', error));

    }

  return (
    <div className="App">
      <Router>
        <header>
          <Suspense fallback={<p>"Carregando..."</p>}>
            <Header />
          </Suspense>
        </header>
        <Routes>
          <Route exact path="/" element=
            {<Suspense fallback={<p>"Carregando..."</p>}>
              <Home />
            </Suspense>}
          />
          <Route exact path="/GerenciarPassagens" element=
            {<Suspense fallback={<p>"Carregando..."</p>}>
              <GerenciarPassagens checkToken={checkToken} logado={logado} setLogado={setLogado}/>
            </Suspense>}
          />
          <Route exact path="/GerenciarRoteiros" element=
            {<Suspense fallback={<p>"Carregando..."</p>}>
              <GerenciarRoteiros checkToken={checkToken} logado={logado} setLogado={setLogado}/>
            </Suspense>}
          />
          <Route exact path="/NovaPassagem" element=
            {<Suspense fallback={<p>"Carregando..."</p>}>
              <NovaPassagem checkToken={checkToken} logado={logado} setLogado={setLogado}/>
            </Suspense>}
          />
          <Route exact path="/NovaPassagem/:id" element=
            {<Suspense fallback={<p>"Carregando..."</p>}>
              <NovaPassagem checkToken={checkToken} logado={logado} setLogado={setLogado}/>
            </Suspense>}
          />
          <Route exact path="/NovoRoteiro" element=
            {<Suspense fallback={<p>"Carregando..."</p>}>
              <NovoRoteiro checkToken={checkToken} logado={logado} setLogado={setLogado}/>
            </Suspense>}
          />
          <Route exact path="/NovoRoteiro/:id" element=
            {<Suspense fallback={<p>"Carregando..."</p>}>
              <NovoRoteiro checkToken={checkToken} logado={logado} setLogado={setLogado}/>
            </Suspense>}
          />
        </Routes>
      </Router>
      <footer>
        <Suspense fallback={<p>"Carregando..."</p>}>
          <Copyright />
        </Suspense>
      </footer>
    </div>
  );
}

export default App;
