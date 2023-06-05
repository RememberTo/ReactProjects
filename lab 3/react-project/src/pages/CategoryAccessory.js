import React from 'react'
import {useParams} from 'react-router-dom'

export function CategotyAccessory() {
   const {category} = useParams()
  return (
    <div className='Content'>{category}</div>
  )
}