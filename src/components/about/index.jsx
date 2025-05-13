
const partners = [
  { picture: <img src="../../src/assets/rogerio.png" />, title: 'Rogério Belfort', desc: 'Engenheiro há quase 30 anos, mais de 11 anos de docência, com uma vasta experiência profissional em obras residenciais, comerciais e industriais. Especialista em diversas áreas desenvolvendo projetos e executando obras Brasil a fora.' },
  { picture: <img src="../../src/assets/karina.png" />, title: 'Karina Freire', desc: 'Arquiteta na Belfort Engenharia Ltda. Arquiteta na Belfort Engenharia Ltda.' },
]

function About() {
  return (
    <section id="about" className="py-20 px-4 bg-white flex flex-col items-center gap-8">
      <div className="w-full">
        <h2 className="text-3xl font-bold mb-4 text-center text-gray-900">Sobre Nós</h2>
        <p className="text-gray-600 text-center">
          Somos especialistas em obras residenciais e comerciais.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
      {partners.map((item, idx) => (
        <div
          key={idx}
          className="bg-brand-complementary p-6 rounded-lg shadow hover:shadow-teal-500/20 transition transform hover:scale-105 md:hover:scale-110"
        >
        <div className="text-teal-400 mb-4">{item.picture}</div>
        <h2 className="font-semibold text-lg mb-2">{item.title}</h2>
        <p className="text-gray-400 text-md">{item.desc}</p>
        </div>
      ))}
      </div>
    </section>
  );
}

export default About
