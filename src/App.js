import './App.css';
import { Contador } from './components';

const styles = "App bg-dark text-white d-flex flex-column justify-content-center align-items-center"

function App() {
  return (
    <div className={ styles } style={ { height: '100vh' } }>
      <Contador />
    </div>
  );
}

export default App;
