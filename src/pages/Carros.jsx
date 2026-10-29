import CarrosCard from '../components/CarrosCard';
import porscheImg from '../assets/Porsche 911 Carrera S.jpg';
import ferrariImg from '../assets/Ferrari F8 Tributo.jpg';
import bmwImg from '../assets/BMW M4 Competition.jpg';
import lamboImg from '../assets/Lamborghini Huracán.jpg';
import audiImg from '../assets/Audi RS6 Avant.jpg';

export default function Carros() {
  const listaCarros = [
    { nome: 'Porsche 911 Carrera S', categoria: 'Esportivo', origem: 'Alemanha', preco: '2.500', imagem: porscheImg },
    { nome: 'Ferrari F8 Tributo', categoria: 'Superesportivo', origem: 'Itália', preco: '4.800', imagem: ferrariImg },
    { nome: 'BMW M4 Competition', categoria: 'Cupê Esportivo', origem: 'Alemanha', preco: '1.900', imagem: bmwImg },
    { nome: 'Lamborghini Huracán', categoria: 'Superesportivo', origem: 'Itália', preco: '5.200', imagem: lamboImg },
    { nome: 'Audi RS6 Avant', categoria: 'Perua Esportiva', origem: 'Alemanha', preco: '2.200', imagem: audiImg },
  ];

  return (
    <main style={{ padding: '2rem', backgroundColor: '#121212', color: '#fff', minHeight: '80vh' }}>
      <h1>Catálogo de Carros Importados</h1>
      <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', marginTop: '1.5rem' }}>
        {listaCarros.map((carro, index) => (
          <CarrosCard key={index} {...carro} />
        ))}
      </div>
    </main>
  );
}