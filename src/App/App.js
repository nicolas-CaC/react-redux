import './App.css';
import { Contador, Criptos } from '../components';

const styles = "App bg-dark text-white d-flex justify-content-center align-items-center"

function App() {
  return (
    <div className={ styles } style={ { height: '100vh' } }>
      <Contador />
      <Criptos />
    </div>
  );
}

export default App;
