import './index.scss';


export default function Cadastro () {
    return (
        <main className='pag-Cadastro'>
            <div>
                <img className="logo" src="/assets/images/zyro-image__3_-removebg-preview (2) 2.png" alt="logo" />
            </div>
            <section className="global">
                <section className="lado-esquerdo">
                    <img className="computadozinho" src="/assets/images/pczin.png" alt="imagem-de-fundo" />
                    <p>Te escutando de onde estiver, quando puder.</p>
                    <p>Seja bem vindo!</p>
                    <button>Voltar para a página inicial</button>
                </section>
                <section className="lado-direito">
                    <div>
                        <label>Nome</label>
                        <input type="text" />
                    </div>
                    <div>
                        <label>CPF</label>
                        <input type="number" />
                    </div>
                    <div>
                        <label>E-mail</label>
                        <input type="text" />
                    </div>
                    <div>
                        <label>Senha</label>
                        <input type="password" />
                    </div>
                    <div>
                        <label>Número de telefone</label>
                        <input type="number" />
                    </div>
                    <div>
                        <label>Número de telefone alternativo</label>
                        <input type="number" />
                    </div>

                    <div>
                        <p>
                            <input type="checkbox" /> Eu li e concordo com os <a>termos de uso</a> e <a>política de privacidade</a>
                        </p>
                    </div>
                    <button>Cadastrar-se</button>
                </section>'
            </section>
        </main>
    )
}