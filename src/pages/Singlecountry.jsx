import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

const Singlecountry = () => {
    const { countryName } = useParams()

    const [countryData, setCountryData] = useState([])

    async function getCountryData (){
      const response = await fetch('https://restcountries.com/v3.1/name/'+countryName)
      const data = await response.json()
      setCountryData(data)
      console.log(data)
    }
  
    useEffect(() => {
      getCountryData()
    },[])

    console.log(countryName)
  return (
    <div>
        {countryData.map((country) => (
        <div className="col-7 col-md-6 col-lg-3 mb-5" key={country.name.common}>
          <div className="card">
            <img src={country.flags.svg} className="card-img-top img-fluid" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{country.name.common}</h5>
              <p className="card-text">Population: {country.population}</p>
              <p className="card-text">Region: {country.region}</p>
              <p className="card-text">Capital: {country.capital}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
export default Singlecountry