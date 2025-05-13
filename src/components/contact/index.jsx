import { FaInstagram, FaLinkedin } from 'react-icons/fa';

function Contact() {
    return (
      <section id="contact" className="py-10 px-2 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">Contato</h2>
          <div className='text-gray-600 text-center text-sm'>
            <p>Telefone: (98) 9999-8888</p>
            <p>Email: contato@belfortengenharia.com</p>
            <p>Endereço: Edifício Office Tower - São Luís, MA</p>
          </div>
        </div>
        <div className="max-w-4xl mx-auto text-center m-2 text-gray-600">
          <div className="flex justify-center space-x-4">
            <a href="hhttps://www.instagram.com/belfort.engenharia/" target="_blank" rel="noopener noreferrer" className="hover:text-teal-400">
              <FaInstagram className="text-2xl" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-teal-400">
              <FaLinkedin className="text-2xl" />
            </a>
          </div>
        </div>
      </section>
    );
  }
  
  export default Contact
  