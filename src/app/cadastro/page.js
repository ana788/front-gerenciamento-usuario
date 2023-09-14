import Image from 'next/image'

const Cadastro = () => {
    return (
        <>
            <div className="flex">
                <div id="sidebar-tela-cadastro" className="h-screen w-2/6 bg-emerald-700">
                    <Image />
                    <p>Não possui uma conta? <a href='#'>Cadastre-se agora.</a></p>
                </div>

                <div id="cadastro-space">
                    <h2>Entre no Lorem</h2>
                    <input className="block mb-5" type="text" name='E-mail'></input>
                    <input type="text" name='Senha'></input>
                    <p><a href='#'>Esqueceu a senha?</a></p>
                    <button>Entrar</button>
                </div>
            </div>

        </>
    )
}

export default Cadastro