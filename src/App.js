import Header from './components/Header';
import Table from './components/Table';
import fundo from './imagens/fundo.png';
import grafismo from './imagens/grafismo.png';
import logo from './imagens/logo.png';
import './App.css';

function App() {
  return (
    <div>
      <img src={ fundo } alt="fundo" />
      {/* <img src={ grafismo } alt="grafismo" /> */}
      <img src={ logo } alt="logo" className="logo" />
      <Header />
      <Table />
    </div>
  );
}

export default App;
