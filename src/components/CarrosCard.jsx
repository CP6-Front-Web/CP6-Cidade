export default function CarrosCard({ nome, categoria, origem, preco, imagem }) {
  return (
    <div style={{ border: '1px solid #333', borderRadius: '8px', overflow: 'hidden', width: '280px', backgroundColor: '#1e1e1e', color: '#fff', boxShadow: '0 4px 10px rgba(0,0,0,0.3)' }}>
      <img src={imagem} alt={nome} style={{ width: '100%', height: '180px', objectFit: 'cover' }} />
      <div style={{ padding: '1rem' }}>
        <h3 style={{ margin: '0 0 0.5rem 0', color: '#e50914' }}>{nome}</h3>
        <p style={{ margin: '0.2rem 0', color: '#ccc' }}><strong>Categoria:</strong> {categoria}</p>
        <p style={{ margin: '0.2rem 0', color: '#ccc' }}><strong>Origem:</strong> {origem}</p>
        <p style={{ margin: '0.8rem 0 0 0', fontSize: '1.2rem', color: '#4caf50', fontWeight: 'bold' }}>
          R$ {preco} <span style={{ fontSize: '0.8rem', color: '#aaa' }}>/ dia</span>
        </p>
      </div>
    </div>
  );
}