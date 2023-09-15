import Image from 'next/image'
import Logo from '@/app/assets/logo.png'

const Login = () => {
    return (
        <>
            <div className="flex bg-white">

                <div id="sidebar-tela-login" className="relative h-screen w-2/6 bg-gradient-to-r from-sky-50 to-blue-100">
                    <Image src={Logo} className='absolute top-[36px] left-[92px] w-[178px] h-[52px]'/>
                    <p className='absolute top-[200px] left-[92px] text-4xl font-medium'>Domine suas despesas <span className='font-bold'>com facilidade.</span></p>
                    <p className='absolute top-[300px] left-[92px]'>Não possui uma conta? <a href='#' className="text-amber-400">Cadastre-se agora.</a></p>
                </div>

                <div id="cadastro-area" className="flex flex-col flex-1 justify-center items-center">
                    <div className='flex flex-col w-1/3'>
                        <h2 className="text-lg font-medium text-sky-950 mb-5">Acesse sua conta</h2>
                        <input className="block mb-5 border-solid border-2 border-gray-900 border-opacity-5" type="text" name='E-mail'></input>
                        <input className="mb-5 border-solid border-2 border-gray-900 border-opacity-5" type="text" name='Senha'></input>
                        <p className='mb-5'><a href='#'>Esqueceu a senha?</a></p>
                        <button className='items-center bg-cyan-900 rounded text-white'>Entrar</button>
                    </div>

                </div>

            </div>

        </>
    )
}

export default Login