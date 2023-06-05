import React from "react"
import LessonItem from "../data/lessons"

const styles = {
   ul:{
      listStyle: 'none'
   }
}

export function SchoolLessons(props)
{
   return(
      <ul style = {styles.ul}>    
         {props.lesson.map(lesson =>{
            return <LessonItem lesson={lesson} key={lesson.id}/>
         })}
      </ul>
   )
}