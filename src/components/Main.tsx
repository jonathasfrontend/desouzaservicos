import { WhatsappLogo } from '@phosphor-icons/react'
import bg1 from '../assets/bg_1.jpeg'

function Main() {
  return (
    <main className="w-full h-screen relative flex items-center justify-center" id='inicio'>
        <div className="w-full h-full z-10">
            <img src={bg1} alt="" className='w-full h-full object-cover' />
        </div>
        <div className='absolute w-full h-full z-20 gradient'></div>
        <div className="absolute w-full min-w-[100px] px-[5%] z-30">
            <h1 className='text text-4xl text-white font-medium w-3/4'>
                <span className='text-[#386cb0] organetto'>DeSouza</span>
                <span className='text-[#8d8d8d] organetto'>Serviços</span>
                <p className='text-3xl organetto'>Consertos e Manutenções em Curitiba e Região!</p>
            </h1>
            <p className='text-lg max-w-[50em] text-white font-medium py-5'>
                Hidráulica e elétrica com agilidade e qualidade. Orçamento gratuito!
            </p>
            <div className='w-[240px]'>
                <a href="https://api.whatsapp.com/send?phone=4199240479" className='px-5 py-3 bg-[#386cb0] rounded outline-none text-white font-medium flex items-center text-base'>
                    <WhatsappLogo className='w-6 h-6 mr-1' />
                    Solicitar Atendimento
                </a>
            </div>
        </div>
    </main>
  )
}

export default Main
