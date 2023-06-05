import React from "react"

const styles = {
   li:{
      marginBottom:10
   }
}

export default function LessonItem({lesson})
{
   return (
   <li style={styles.li}>
      Предмет: {lesson.name}<br/>
      Рейтинг: {lesson.rating}
   </li>
   )
}