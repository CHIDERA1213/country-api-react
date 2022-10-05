import React from 'react'
import { Link } from 'react-router-dom'

const Countrycard = ({countryData}) => {
  console.log(countryData)
  return (
    <div className='row align-items-center justify-content-center'>
      {countryData.map((country) => (
        <Link to={`/single/${country.name.common}`} className="col-7 col-md-6 col-lg-3 mb-5" key={country.name.common}>
          <div className="card">
            <img src={country.flags.svg} className="card-img-top img-fluid" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{country.name.common}</h5>
              <p className="card-text">Population: {country.population}</p>
              <p className="card-text">Region: {country.region}</p>
              <p className="card-text">Capital: {country.capital}</p>
            </div>
          </div>
        </Link>
      ))}
      
    </div>
  )
}

export default Countrycard