import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './Home.css';
import { CiSettings } from 'react-icons/ci';
import { BsChevronLeft } from 'react-icons/bs';
import { BiMicrophone } from 'react-icons/bi';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import { fetchData, addCountry } from '../Redux/Slice/countrySlice';

function Home() {
  const dispatch = useDispatch();
  const countriesList = useSelector((state) => state.countries.list);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  useEffect(() => {
    dispatch(addCountry(countriesList));
  }, [dispatch, countriesList]);

  return (
    <div className="section">
      <div className="header">
        <div className="search-info">
          <form>
            <BsChevronLeft style={{ width: '15px', height: '10px' }} className="iconss" />
            <h5>2023</h5>
          </form>
          <BiMicrophone style={{
            width: '24px', height: '24px', padding: '18px', color: 'white',
          }}
          />
          <CiSettings style={{
            width: '25px', height: '25px', padding: '9px', color: 'white',
          }}
          />
        </div>

        <h1>BIENVENIDOS A EUROPA</h1>
      </div>
      <div className="first-container">
        {countriesList && countriesList.length > 0
          ? countriesList.map((country) => (
            <div key={country.name.common} className="second-container">
              <span className="icon">
                <HiOutlineArrowNarrowRight style={{
                  width: '10px',
                  height: '10px',
                  padding: '2px',
                  color: 'white',
                  border: '1px solid white',
                  borderRadius: '45px',
                  marginTop: '5px',
                }}
                />
              </span>
              <div className="country-name">
                <Link to={`/country/${country.name.common}`}>
                  {country.name.common.toUpperCase()}
                  {' '}
                  <img src={country.flags.svg} alt={`Flag of ${country.name.common}`} className="flag" />
                </Link>
              </div>
            </div>
          ))
          : <div className="loading">Loading...</div>}
      </div>
    </div>
  );
}

export default Home;
