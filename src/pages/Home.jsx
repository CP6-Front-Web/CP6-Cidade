import CarrosCard from '../components/CarrosCard';

export default function Home() {
  return (
    <main style={{ padding: '2rem' }}>
      <h1>Bem-vindo à Exotic Drive</h1>
      <p>A melhor experiência em locação de veículos superesportivos e importados.</p>
      <hr style={{ margin: '1.5rem 0' }} />
      <h2>Destaque da Semana</h2>
      <CarrosCard 
        nome="Porsche 911 Carrera S" 
        categoria="Esportivo" 
        origem="Alemanha" 
        imagem="/src/assets/Porsche 911 Carrera S.jpg" 
      />
    </main>
  );
}