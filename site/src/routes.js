import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Login1 from './pages/login1/index.js'
import Cadastro1 from './pages/cadastro-psicologo/index.js'
import Home from './pages/home/index.js'
import EsqueceuSenha from './pages/esqueceuSenha/index.js'
import LoginADM from './pages/loginADM/index.js'

export default function() {
    return (
        <main>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={ <Home /> } />
                    <Route path="/login" element={ <Login1 /> } />
                    <Route path="/cadastro" element={ <Cadastro1 /> } />
                    <Route path="/esqueceuSenha" element={ <EsqueceuSenha />} />
                    <Route path="/loginADM" element={ < LoginADM />} />
                </Routes>
            </BrowserRouter>
        </main>
    )
}