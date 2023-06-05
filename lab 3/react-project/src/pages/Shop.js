import React from 'react'
import { Link } from 'react-router-dom'

export function Shop() {

  const style ={
    div:{
      marginRight:"10px",
    }
  }
    return (
      <div>
        <Link style={style.div} to="/shop/Iphone">Iphone</Link>
        <Link style={style.div} to="/shop/Ten">Galaxy</Link>
        <Link style={style.div} to="/shop/Redmi">Redmi</Link>
      </div>
    )
}
