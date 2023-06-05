import React from 'react'
import {useParams} from 'react-router-dom'

export function CategotyPage() {
   const {category} = useParams()
  return (
    <div className='Content'><h2>{category}</h2></div>
  )
}
