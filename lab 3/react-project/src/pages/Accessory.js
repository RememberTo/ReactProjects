import React from 'react'
import { Link } from 'react-router-dom'

export function Accessory () {
  const style ={
    div:{
      marginRight:"10px",
    }
  }
    return (
      <div>
        <Link style={style.div} to="/accessory/Cases">Cases</Link>
        <Link style={style.div} to="/accessory/Glasses">Glasses</Link>
        <Link style={style.div} to="/accessory/Headphones">Headphones</Link>
        <Link style={style.div} to="/accessory/Watch">Watch</Link>
      </div>
    )
}
