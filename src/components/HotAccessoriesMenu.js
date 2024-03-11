import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/HotAccessoriesMenu.css'

const HotAccessoriesMenu = () => {
  return (
    <div className='HotAccessoriesMenu'>
        <Link className='HotAccessoriesLink' to="/music">Music Store</Link>
        <Link className='HotAccessoriesLink' to="/smartdevices">Smart Devices</Link>
        <Link className='HotAccessoriesLink' to="/home">Home</Link>
        <Link className='HotAccessoriesLink' to="/lifestyle">Lifestyle</Link>
        <Link className='HotAccessoriesLink' to="/mobileaccessories">Mobile Accessories</Link>
    </div>
  )
}

export default HotAccessoriesMenu