import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Navbar';
import Header from './components/Header';
import CarRental from './components/CarRental';
import CarTypes from './components/CarTypes';
import Fleet from './components/Fleet';
import ChooseUs from './components/ChooseUs';

function App() {
  return (
    <>
    <Navbar/>
    <Header/>
    <CarRental/>
    <CarTypes/>
    <Fleet/>
    <ChooseUs/>
    
    </>
  );
}

export default App;
