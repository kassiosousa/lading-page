
import work1 from '../../assets/work/1.png';
import work2 from '../../assets/work/2.png';
import work3 from '../../assets/work/3.png';
import work4 from '../../assets/work/4.png';
import work5 from '../../assets/work/5.png';
import work6 from '../../assets/work/6.png';

const features = [
  { picture: <img src={work1} />, title: 'Excelência Técnica', desc: 'Temos uma equipe com vasto conhecimento técnico em engenharia e arquitetura, o que nos permite compreender os detalhes e as complexidades dos projetos executivos dos clientes' },
  { picture: <img src={work2} />, title: 'Soluções Personalizadas', desc: 'Adquirimos habilidades ao longo de anos para resolver problemas de forma assertiva e com rapidez, assim, oferecemos soluções personalizadas e inovadoras em sua construção' },
  { picture: <img src={work3} />, title: 'Atuação em todas as fases', desc: 'Atuamos de forma objetiva, integrando todos os processos e fases que envolvem o seu empreendimento. Iniciação -> Planejamento -> Execução -> Monitoramento e Controle -> Encerramento -> Pós-Obra' },
  { picture: <img src={work4} />, title: 'Comunicação técnica efetiva', desc: 'Transmitimos de forma clara e compreensível todas as informações técnicas complexas para que nossos clientes interajam com sua obra ou projeto, sem deixar dúvidas de nossos serviços' },
  { picture: <img src={work5} />, title: 'Compromisso com a segurança', desc: 'Nossas atividades, ações e processos sempre são pautados no compromisso com a segurança e a valorização da vida dos nossos tomadores de serviços e colaboradores' },
  { picture: <img src={work6} />, title: 'Custos bem administrados', desc: 'Saúde financeira e boa administração dos seus custos é um diferencial imprescindível para os nossos negócios. A gestão financeira do empreendimento é feita de forma sistemática, planejada e sustentável.' },
]

function Work() {
  return (
    <section id="work" className="py-20 px-4 bg-brand-complementary text-center">
      <h2 className="text-3xl font-bold mb-12">Como Trabalhamos</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {features.map((item, idx) => (
          <div key={idx} className="bg-gray-900 p-6 rounded-lg shadow hover:shadow-teal-500/20 transition">
            <div className="text-teal-400 mb-4">{item.picture}</div>
            <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
            <p className="text-gray-400 text-sm">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Work
