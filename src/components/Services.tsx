import hidraulica from '../assets/hidraulica.jpg'
import eletrica from '../assets/eletrica.jpg'

function Services() {
  return (
    <main className="w-full h-full px-[5%] pb-5" id='servicos'>
        <h1 className='text-4xl text-center p-5 font-bold text-[#0b3c7c] organetto line'>Serviços</h1>
        <div className='flex justify-center gap-10 flex-wrap'>

            <div className='w-[460px] h-full bg-gray-300 rounded-md overflow-hidden'>
                <img src={hidraulica} alt="Hidráulica" className='w-full h-[280px] object-cover' />
                <div className='p-5'>
                    <h1 className='text-[#00786a] text-3xl font-bold py-2'>Hidráulica</h1>
                    <p className='text-[#595959] text-lg font-medium'>Consertos de chuveiros, registros, torneira, reparo de válvulas Hydra, caixa acoplada e vazamentos.</p>
                </div>
            </div>
            <div className='w-[460px] h-full bg-gray-300 rounded-md overflow-hidden'>
                <img src={eletrica} alt="Elétrica" className='w-full h-[280px] object-cover' />
                <div className='p-5'>
                    <h1 className='text-[#00786a] text-3xl font-bold py-2'>Elétrica</h1>
                    <p className='text-[#595959] text-lg font-medium'>Troca de disjuntores, tomadas, refletores, instalação de sensores de presença e quadros gerais.</p>
                </div>
            </div>
        </div>
    </main>
  );
}

export default Services;