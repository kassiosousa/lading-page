import background from '../../assets/background.jpg';
import logoBelfort from '../../assets/logo_belfort.png';

function Introduction() {
    return (
      <section
        id="home"
        className="h-screen flex items-center justify-center text-4xl font-bold bg-brand-complementary"
        style={{
          backgroundImage: `url(${background})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <span className="m-2">
          <h1 className="text-white m-2"><img src={logoBelfort} alt="Logo" /></h1>
          <div className="text-sm m-2">Construindo um novo futuro</div>
        </span>
      </section>
    )
}
export default Introduction