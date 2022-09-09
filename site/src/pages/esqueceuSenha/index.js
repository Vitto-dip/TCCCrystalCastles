import "./index.scss"

export default function EsqueceuSenha () {

    return (

        <main className='fundo'>
            <div className='inicio'>
                <img className='logo' src="/assets/images/logonat.png" />

                <div className= 'botoes'>
                    <button className='pag-inicial'> Página Incicial </button>
                    <button className='pag-inicial'> Voltar </button>
                </div>
            </div>
            <img className="imagem-2" src="/assets/images/zyro-image__12_-removebg-preview (1) 1.png" alt="imagem-2" />

            <div className='meio'>
                <h1 className='texto1'>Esqueci minha senha</h1>
                <p className='texto2'>Para redefinir sua senha, informe o e-mail cadastrado em sua conta e lhe enviaremos um e-mail com mais informações</p>
                <h2 className='texto3'>E-mail </h2>
                <input className='input' type="text" placeholder='email@email.com' />
            </div>

            <img className='imagem-1' src="/assets/images/Group 62.png" />
        </main>

    )
}
