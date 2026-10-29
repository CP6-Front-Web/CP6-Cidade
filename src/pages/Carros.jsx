import CarrosCard from '../components/CarrosCard';

export default function Carros() {
  const listaCarros = [
    { nome: 'Porsche 911 Carrera S', categoria: 'Esportivo', origem: 'Alemanha', imagem: '/src/assets/Porsche 911 Carrera S.jpg' },
    { nome: 'Ferrari F8 Tributo', categoria: 'Superesportivo', origem: 'Itália', imagem: '/src/assets/Ferrari F8 Tributo.jpg' },
    { nome: 'BMW M4 Competition', categoria: 'Cupê Esportivo', origem: 'Alemanha', imagem: '/src/assets/BMW M4 Competition.jpg' },
    { nome: 'Lamborghini Huracán', categoria: 'Superesportivo', origem: 'Itália', imagem: '/src/assets/Lamborghini Huracán.jpg' },
    { nome: 'Audi RS6 Avant', categoria: 'Perua Esportiva', origem: 'Alemanha', imagem: '/src/assets/Audi RS6 Avant.jpg' },
  ];

  return (
    <main style={{ padding: '2rem' }}>
      <h1>Catálogo de Carros Importados</h1>
      <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', marginTop: '1rem' }}>
        {listaCarros.map((carro, index) => (
          <CarrosCard key={index} {...carro} />
        ))}
      </div>
    </main>
  );
}