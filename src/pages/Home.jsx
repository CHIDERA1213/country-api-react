import React, { useState, useEffect } from 'react'
import Countrycard from '../components/Countrycard'
// https://restcountries.com/v3.1/all

const Home = () => {
  const [countryData, setCountryData] = useState([])

  async function getCountryData (){
    const response = await fetch('https://restcountries.com/v3.1/all')
    const data = await response.json()
    setCountryData(data)
  }

  useEffect(() => {
    getCountryData()
  },[])
  
  console.log(countryData)
  

  return (
    <div className='home'>
      <Countrycard countryData={countryData}/>
    </div>
  )
}

export default Home