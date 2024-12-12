import { WhatsappLogo } from "@phosphor-icons/react";
import logo from '../assets/logo_nome.png'

function Contact() {
    return (
        <main className="w-full h-full px-[5%] pb-5" id="contato">
            <h1 className='text-4xl relative text-center p-5 font-bold text-[#0b3c7c] organetto line'>Solicite Orçamento</h1>
            <div className='flex items-center gap-10 flex-wrap justify-center'>
                <img src={logo} alt="" className="w-[400px] object-cover"/>
                <div className="w-[400px]">
                    <p className="text-4xl py-5 text-center font-bold text-[#0b3c7c]">Fale comigo!</p>
                    <p className="text-3xl mb-5 text-center font-semibold text-[#00786a]">(41) 99924-0479</p> 

                    <p className="text-3xl py-5 text-center font-semibold text-[#0b3c7c]">Atendimento imediato!</p>
                    <a href="https://api.whatsapp.com/send?phone=4199240479" className='px-5 py-3 bg-[#386cb0] rounded-full outline-none text-white font-medium flex items-center justify-center text-base'>
                        <WhatsappLogo className='w-6 h-6 mr-1' />
                        Solicitar Atendimento
                    </a>                   
                </div>
            </div>
        </main>
    );
}

export default Contact;