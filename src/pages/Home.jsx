import CarrosCard from '../components/CarrosCard';
import porscheImg from '../assets/Porsche 911 Carrera S.jpg';

export default function Home() {
  return (
    <main style={{ padding: '2rem', backgroundColor: '#121212', color: '#fff', minHeight: '80vh' }}>
      <h1>Bem-vindo à Exotic Drive</h1>
      <p>A melhor experiência em locação de veículos superesportivos e importados.</p>
      <hr style={{ margin: '1.5rem 0', borderColor: '#333' }} />
      <h2>Destaque da Semana</h2>
      <CarrosCard 
        nome="Porsche 911 Carrera S" 
        categoria="Esportivo" 
        origem="Alemanha" 
        preco="2.500"
        imagem={porscheImg} 
      />
    </main>
  );
}