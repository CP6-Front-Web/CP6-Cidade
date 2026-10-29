import { BrowserRouter } from 'react-router-dom';

export default function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        {/* Estrutura base da aplicacao */}
      </div>
    </BrowserRouter>
  );
}import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main style={{ minHeight: '80vh' }}>
        {/* Rotas entram aqui */}
      </main>
      <Footer />
    </BrowserRouter>
  );
}