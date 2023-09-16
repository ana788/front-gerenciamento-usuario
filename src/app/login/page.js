import Image from 'next/image'
import Logo from '@/app/assets/logo.png'
import ImgSideBar from '@/app/assets/img-dentro-sidebar.png'

const Login = () => {
    return (
        <>
            <div className="flex bg-white">

                <div id="sidebar-tela-login" className="relative h-screen w-2/6 bg-gradient-to-r from-sky-50 to-blue-100">
                    <Image src={Logo} className='absolute top-[36px] left-[92px] w-[178px] h-[52px]' />
                    <p className='absolute top-[200px] left-[92px] text-4xl font-medium text-azul-escuro'>Domine suas despesas <span className='font-bold'>com facilidade<span className='text-amber-400'>.</span></span></p>
                    <Image src={ImgSideBar} className='absolute top-[400px] left-[80px] w-[394px]' />
                </div>

                <div id="cadastro-area" className="flex flex-col flex-1 justify-center items-center">
                    <div className='flex flex-col w-1/3'>
                        <h2 className="text-lg font-medium text-azul-escuro mb-5">Acesse sua conta</h2>
                        <input className="block mb-5 border-solid border-2 border-gray-900 border-opacity-5 text-cinza-claro pl-2 font-light text-sm" type="text" name='E-mail' value="E-mail"></input>
                        <input className="mb-5 border-solid border-2 border-gray-900 border-opacity-5 text-cinza-claro pl-2 font-light text-sm" type="text" name='Senha' value="Senha"></input>
                        <p className='mb-5 text-sm font-semibold text-azul-suave'><a href='#'>Esqueceu a senha? ➜</a></p>
                        <button className='bg-azul-escuro rounded text-white h-[35px]'>Entrar</button>
                        <p className='flex justify-center mt-5 text-sm'>Não possui uma conta? <a href='#' className="text-amber-400 font-bold ml-1">Cadastre-se agora.</a></p>

                        <div id="politica-privacidade" className='flex flex-col justify-center items-center gap-2 mt-10'>
                            <h5 className='text-[10px] text-cinza-suave'>Políticas de Privacidade</h5>
                            <p className='text-[10px] text-cinza-suave'>Direitos autorais © 2023 XXXX. Todos os direitos reservados.</p>
                        </div>

                    </div>

                </div>

            </div>

        </>
    )
}

export default Login