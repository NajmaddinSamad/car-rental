import React, { useRef,  useState , useEffect } from 'react';
import '../assets/style/Normalize.css';
import '../assets/style/CarSection.css';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { BsFillPersonFill } from 'react-icons/bs';
import { MdLuggage } from 'react-icons/md';
import { TbEngine } from 'react-icons/tb';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useNavigate } from 'react-router-dom';


const CarsCard = ({ imgCard1, imgCard2, carName, carModel, passengerCount, luggageCount, transmission, price }) => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  useEffect(() => {
    AOS.init();
  }, []);
  const navigate = useNavigate();
const handleClick = ()=>{
navigate('/booking')
}
  return (
    <>
      <div className="col-12 col-md-6 col-lg-4 for-next-div" data-aos="fade-up" data-aos-duration="500">
        <div className="everything-about-cars">
          <div className="img-cars">
          <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
               <SwiperSlide> <img src={imgCard1} alt="" /></SwiperSlide>
        <SwiperSlide> <img src={imgCard2} alt="" /></SwiperSlide>
      </Swiper>
           
          </div>
          <div className="down"  onClick={handleClick}>
            <div className="about-cars-left">
              <h3>{carName + '    '}{carModel}</h3>
              <span>
                <AiFillStar className="blue-star" />
                <AiFillStar className="blue-star" />
                <AiFillStar className="blue-star" />
                <AiFillStar className="blue-star" />
                <AiOutlineStar className="empty-star" />
                <h6>4 reviews</h6>
              </span>
              <div className="count-luggage">
                <div className="passenger">
                  <BsFillPersonFill />
                  <h6>{passengerCount}</h6>
                </div>
                <div className="luggage">
                  <MdLuggage />
                  <h6>{luggageCount}</h6>
                </div>
                <div className="transmission">
                  <TbEngine />
                  <h6>{transmission}</h6>
                </div>
              </div>
            </div>
            <div className="about-cars-right">
              <h6>$</h6>
              <h1>{price}</h1>
              <h5>Per Day</h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CarsCard;
