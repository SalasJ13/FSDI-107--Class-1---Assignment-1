//importar archivos
import './App.css';
import NavBar from './components/navBar';
import Footer from './components/footer';
import QuantityPicker from './components/quantityPicker';
//import NavBar from './components/navBar';

function App() {
  return( 
  <div className="App">
    <NavBar></NavBar>
    <h1>Hello Word</h1>

    <QuantityPicker>
    </QuantityPicker>
    <Footer></Footer>
  </div>
  );
}

export default App;
