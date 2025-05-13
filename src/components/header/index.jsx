import logo from '../../assets/logo.png';

function Header() {

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 w-full bg-brand-primary bg-opacity-80 backdrop-blur-md shadow-md z-50">
      <nav className="max-w-4xl mx-auto px-2 py-2 flex justify-between items-center">
        <span className="text-xl font-bold">
          <img src={logo} className="w-8" alt="Logo" />
        </span>
        <ul className="flex space-x-6 text-sm sm:text-base">
          <li><button onClick={() => handleScroll('home')} className="hover:text-teal-400 transition">Início</button></li>
          <li><button onClick={() => handleScroll('about')} className="hover:text-teal-400 transition">Sobre</button></li>
          <li><button onClick={() => handleScroll('work')} className="hover:text-teal-400 transition">Serviços</button></li>
          <li><button onClick={() => handleScroll('contact')} className="hover:text-teal-400 transition">Contato</button></li>
        </ul>
      </nav>
    </header>
  )
}
  
  export default Header
  