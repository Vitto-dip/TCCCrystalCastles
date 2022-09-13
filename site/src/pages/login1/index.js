import './index.scss'


export default function() {
    return (
        <main className='pag-login'>
            <img className="capa-fundo" src="/assets/images/zyro-image (7) 2.png" alt="capa-de-fundo" />
            <section>
                <div className="logo">
                    <img className='logo-img' src="/assets/images/imagem_2022-07-30_124517537-removebg-preview 1.png" alt="logo" />
                    <p className="logo-texto">Acesse de onde estiver!</p>
                </div>
                <div>
                    <h2>Entrar</h2>
                    <div className='input'>
                        <label>E-mail</label>
                        <input type="text" />
                    </div>
                    <div className='input'>
                        <label>Senha</label>
                        <input type="password" />
                    </div>
                    <p className="esqueci-senha">Esqueci minha senha</p>
                </div>
                <button>
                    <img className="icone-sair" src="/assets/images/Frame 1 (1).png" alt="sair" />
                </button>
                <p>Não tem uma conta? Cadastre-se <a>aqui</a> </p>
            </section>
        </main>
    )
}