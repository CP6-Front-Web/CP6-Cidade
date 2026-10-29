export default function CarrosCard({ nome, categoria, origem, imagem }) {
  return (
    <div style={{ border: '1px solid #ddd', borderRadius: '8px', overflow: 'hidden', width: '260px', boxShadow: '0 2px 5px rgba(0,0,0,0.1)' }}>
      <img src={imagem} alt={nome} style={{ width: '100%', height: '160px', objectFit: 'cover' }} />
      <div style={{ padding: '1rem' }}>
        <h3 style={{ margin: '0 0 0.5rem 0' }}>{nome}</h3>
        <p style={{ margin: '0.2rem 0', color: '#555' }}><strong>Categoria:</strong> {categoria}</p>
        <p style={{ margin: '0.2rem 0', color: '#555' }}><strong>Origem:</strong> {origem}</p>
      </div>
    </div>
  );
}