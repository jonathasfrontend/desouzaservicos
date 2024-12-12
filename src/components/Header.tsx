import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { WhatsappLogo, List, X } from '@phosphor-icons/react';
import logo from '../assets/logo_vazado.png';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleNavigation = (path: string, id: string) => {
    navigate(path);
    setTimeout(() => {
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100); // Timeout para garantir que a navegação ocorreu
  };

  return (
    <header className="absolute top-0 left-0 w-full flex items-center justify-between px-[5%] py-5 z-50 bg-transparent">
      <div>
        <img src={logo} className="w-14" alt="Logo" />
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex items-center gap-5">
        <li
          className="text-base cursor-pointer text-white font-medium px-2 hover:text-[#bfbfbf]"
          onClick={() => handleNavigation('/', 'inicio')}
        >
          Inicio
        </li>
        <li
          className="text-base cursor-pointer text-white font-medium px-2 hover:text-[#bfbfbf]"
          onClick={() => handleNavigation('/', 'servicos')}
        >
          Serviços
        </li>
        <li
          className="text-base cursor-pointer text-white font-medium px-2 hover:text-[#bfbfbf]"
          onClick={() => handleNavigation('/', 'sobre')}
        >
          Sobre
        </li>
        <li 
          className="flex items-center text-base cursor-pointer font-medium py-1 px-4 bg-green-600 text-white rounded-sm hover:bg-green-700"
          onClick={() => handleNavigation('/', 'contato')}  
        >
          <WhatsappLogo className="w-6 h-6 mr-1" />
          Contato
        </li>
      </ul>

      {/* Mobile Menu Button */}
      <div className="md:hidden z-10">
        {menuOpen ? (
          <button
            onClick={() => setMenuOpen(false)}
            className="text-white cursor-pointer focus:outline-none"
          >
            <X className="w-7 h-7" />
          </button>
        ) : (
          <button
            onClick={() => setMenuOpen(true)}
            className="text-white cursor-pointer focus:outline-none"
          >
            <List className="w-7 h-7" />
          </button>
        )}
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="fixed top-0 left-0 w-full bg-gray-800 text-white py-5 overflow-visible md:hidden">
          <ul className="flex flex-col items-center gap-4">
            <li
              className="text-base text-white cursor-pointer font-medium px-2 hover:text-[#bfbfbf]"
              onClick={() => {
                setMenuOpen(false);
                handleNavigation('/', 'inicio');
              }}
            >
              Inicio
            </li>
            <li
              className="text-base text-white cursor-pointer font-medium px-2 hover:text-[#bfbfbf]"
              onClick={() => {
                setMenuOpen(false);
                handleNavigation('/', 'servicos');
              }}
            >
              Serviços
            </li>
            <li
              className="text-base text-white cursor-pointer font-medium px-2 hover:text-[#bfbfbf]"
              onClick={() => {
                setMenuOpen(false);
                handleNavigation('/', 'sobre');
              }}
            >
              Sobre
            </li>
            <li 
              className="flex items-center cursor-pointer text-base font-medium py-1 px-4 bg-green-600 text-white rounded-sm hover:bg-green-700"
              onClick={() => {
                setMenuOpen(false);
                handleNavigation('/', 'contato')
              }}  
            >
              <WhatsappLogo className="w-6 h-6 mr-1" />
              Contato
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

export default Header;