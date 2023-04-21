import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Navbar';
import Header from './components/Header';
import CarRental from './components/CarRental';
import CarTypes from './components/CarTypes';

function App() {
  return (
    <>
    <Navbar/>
    <Header/>
    <CarRental/>
    <CarTypes/>
    
    </>
  );
}

export default App;
