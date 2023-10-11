import React, { useState, useEffect } from "react";
import "../assets/style/Normalize.css";
import "../assets/style/CarsSearchBar.css";
import Button from "./Buttons";
import AOS from "aos";
import "aos/dist/aos.css";

const CarsSearchBar = ({ applyFilters }) => {
  useEffect(() => {
    AOS.init();
  }, []);


  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          "https://res.cloudinary.com/doqjpxywu/raw/upload/v1683540766/AboutCar_dy4uy0"
        );
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);

  const [selectedBrand, setSelectedBrand] = useState("Any brand");
  const [selectedType, setSelectedType] = useState("Any type");
  const [selectedPrice, setSelectedPrice] = useState("Price");


  const brandOptions = data
    ? data.map((item) => (
        <option key={item.id} value={item.carName}>
          {item.carName}
        </option>
      ))
    : [];


  const brandData = data ? data.filter((item) => item.carName === selectedBrand) : [];


  const modelOptions = brandData.map((item) => (
    <option key={item.id} value={item.carModel}>
      {item.carModel}
    </option>
  ));

  const priceOptions = brandData.map((item) => (
    <option key={item.id} value={item.price}>
      {item.price}
    </option>
  ));

  const handleBrandChange = (e) => {
    const selectedBrand = e.target.value;
    setSelectedBrand(selectedBrand);

    const brandData = data.filter((item) => item.carName === selectedBrand);
    const modelOptions = brandData.map((item) => (
      <option key={item.id} value={item.carModel}>
        {item.carModel}
      </option>
    ));
    const priceOptions = brandData.map((item) => (
      <option key={item.id} value={item.price}>
        {item.price}
      </option>
    ));

    setSelectedType("Any type");
    setSelectedPrice("Price");
  };

  const handleFilterApply = () => {
    applyFilters(selectedBrand, selectedType, selectedPrice);
  };

  return (
    <>
      <section className="for-cars-search-box" data-aos="flip-up">
        <form className="row cars-header-search-box" data-aos="flip-up">
          <select
            name="for-brand"
            id=""
            className="col-12 col-md-3 col-lg-3 for-select"
            value={selectedBrand}
            onChange={handleBrandChange}
          >
            <option value="Any brand">Any brand</option>
            {brandOptions}
          </select>

          <select
            name="for-type"
            id=""
            className="col-12 col-md-3 col-lg-3 for-select"
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
          >
            <option value="Any type">Any type</option>
            {modelOptions}
          </select>

          <select
            name="for-price"
            id=""
            className="col-12 col-md-3 col-lg-3 for-select"
            value={selectedPrice}
            onChange={(e) => setSelectedPrice(e.target.value)}
          >
            <option value="Price">Price</option>
            {priceOptions}
          </select>

          <Button
            nameOfClass="col-12 col-md-3 col-lg-3 searching-btn"
            valueOfButton="Search"
            onClick={handleFilterApply}
          />
        </form>
      </section>
    </>
  );
};

export default CarsSearchBar;
