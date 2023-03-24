import React, { useEffect } from 'react';
import { CiSettings } from 'react-icons/ci';
import { BiMicrophone } from 'react-icons/bi';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';
import { Link, useParams } from 'react-router-dom';
import { BsChevronLeft } from 'react-icons/bs';
import { useSelector, useDispatch } from 'react-redux';
import './detail.css';
import { fetchCountry } from '../Redux/Api';

function Details() {
  const { country: countryName } = useParams();
  const dispatch = useDispatch();
  const country = useSelector((state) => state.country.country);

  useEffect(() => {
    if (countryName) {
      dispatch(fetchCountry(countryName));
    }
  }, [dispatch, countryName]);

  return (
    <div>
      <header>
        <li>
          <Link to="/">
            <BsChevronLeft style={{ width: '15px', height: '10px' }} className="corner" />
            {' '}
            <h4>2023</h4>
          </Link>
          <h4 className="title">Country/Details</h4>
          <BiMicrophone style={{ width: '24px', height: '29px', padding: '9px' }} />
          {' '}
          <CiSettings style={{ width: '29px', height: '25px', padding: '9px' }} />
        </li>
      </header>
      {country.name ? (
        <div>
          <div className="country-name">
            <h1>{country.name.common.toUpperCase()}</h1>
            <img src={country.flags.svg} alt={`Flag of ${country.name.common}`} className="Flag" />
          </div>
          <ul className="country-info">
            <li>
              <h5 className="info">Region:</h5>
              <span className="iconn">{country.region}</span>
              <HiOutlineArrowNarrowRight
                style={{
                  width: '10px',
                  height: '10px',
                  padding: '2px',
                  color: 'pink',
                  border: '1px solid white',
                  borderRadius: '45px',
                  marginTop: '5px',
                }}
                className="Icon"
              />
            </li>
            <li>
              <h5 className="info">Capital City:</h5>
              <span className="iconn">{country.capital}</span>
              <HiOutlineArrowNarrowRight
                style={{
                  width: '10px',
                  height: '10px',
                  padding: '2px',
                  color: 'pink',
                  border: '1px solid white',
                  borderRadius: '45px',
                  marginTop: '5px',
                }}
                className="Icon"
              />
            </li>
            <li>
              <h5 className="info">Population:</h5>

              <span className="iconn">
                {country.population}
              </span>
              <HiOutlineArrowNarrowRight
                style={{
                  width: '10px',
                  height: '10px',
                  padding: '2px',
                  color: 'pink',
                  border: '1px solid white',
                  borderRadius: '45px',
                  marginTop: '5px',
                }}
                className="Icon"
              />
            </li>
            <li>
              <h5 className="info">Subregion:</h5>

              <span className="iconn">
                {country.subregion}
              </span>
              <HiOutlineArrowNarrowRight
                style={{
                  width: '10px',
                  height: '10px',
                  padding: '2px',
                  color: 'pink',
                  border: '1px solid white',
                  borderRadius: '45px',
                  marginTop: '5px',
                }}
                className="Icon"
              />
            </li>
            <li>
              <h5 className="info">Area:</h5>

              <span className="iconn">
                {country.area}
              </span>
              <HiOutlineArrowNarrowRight
                style={{
                  width: '10px',
                  height: '10px',
                  padding: '2px',
                  color: 'pink',
                  border: '1px solid white',
                  borderRadius: '45px',
                  marginTop: '5px',
                }}
                className="Icon"
              />
            </li>
            <button type="submit" className="view"><a href="{country.maps.googleMaps}">See on map</a></button>
          </ul>
        </div>
      ) : (
        <div className="loading">Loading...</div>
      )}
    </div>
  );
}

export default Details;
