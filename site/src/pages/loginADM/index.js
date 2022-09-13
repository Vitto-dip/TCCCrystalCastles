import './index.scss'

export default function LoginADM() {
    return (

        <main className='pag-loginADM'>
            <header>
                <img className="logo-img" src="/assets/images/logonat.png" alt="logo" />
                <button> Página Inicial </button>
            </header>

            <section>
                <div>
                    <label>E-mail:</label>
                    <input type='text' placeholder='Email do adm'/>
                </div>
            </section>




        </main>

    )
}