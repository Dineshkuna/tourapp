import React from 'react'
import { CiLocationOn } from "react-icons/ci";
import { GiPathDistance } from "react-icons/gi";
import { IoPeopleOutline } from "react-icons/io5";
import { IoSearchOutline } from "react-icons/io5";
import './TravelCheck.css'

const TravelCheck = () => {
  return (
    <div  className='travelfeature'>
      <span>
      
        <label htmlFor="location"><CiLocationOn />Location</label>
        <input type="text" placeholder='Where are you going?'/>
        <label htmlFor="distance"><GiPathDistance />Distance</label>
        <input type="text" placeholder='Distance k/m'/>
        <label htmlFor="maxPeople"><IoPeopleOutline />max People</label>
        <input type="text" placeholder='0'/>
        <button><IoSearchOutline /></button>
      </span>


    </div>
  )
}

export default TravelCheck
