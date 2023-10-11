import React, { useEffect} from 'react';
import '../assets/style/Normalize.css';
import '../assets/style/Header.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import CarsSearchBar from './CarsSearchBar';

const Header = () => {
  useEffect(() => {
    AOS.init();
  }, []);


  return (
    <>
      <header className="home-header">
        <div className="h-content">
          <h1 className="header-content">
            Find Best Car & Limousine
          </h1>
          <h6 className='price'>
            From as low as $10 per day with limited time offer discount
          </h6>
        </div>
        <CarsSearchBar/>
      </header>
    </>
  );
}

export default Header;
