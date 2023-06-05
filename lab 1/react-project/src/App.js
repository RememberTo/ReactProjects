import React, { useState } from "react";
import { SchoolLessons } from "./components/SchoolLessons";

function App() {
  let fulltext =
    "Для корректной работы React, каждый элемент в массивах должен иметь атрибут key. Его можно указать очевидно, как в примере выше.Другой способ — использовать атрибут key-is. Это может немного улучшить читаемость. Также можно указать keyIs в параметрах плагина. Тогда key не нужно будет писать в шаблоне — логика его получения уходит в бизнес-логику.";
  let shorttext =
    "Для корректной работы React, каждый элемент в массивах должен иметь атрибут key. Его можно указать очевидно, как в примере выше...";
  const [count, setDetails] = useState(0);
  const [nameBut, setName] = useState("Закрасить");
  const [text, setText] = useState(
    "Для корректной работы React, каждый элемент в массивах должен иметь атрибут key. Его можно указать очевидно, как в примере выше... "
  );
  const [color, setColor] = useState("black");
  const lessons = [
    {
      id: 1,
      name: "математика",
      rating: 2.9,
    },
    {
      id: 2,
      name: "русский язык",
      rating: 4.1,
    },
    {
      id: 3,
      name: "литература",
      rating: 2.5,
    },
    {
      id: 4,
      name: "история",
      rating: 4.7,
    },
    {
      id: 5,
      name: "музыка",
      rating: 0.9,
    },
    {
      id: 6,
      name: "физика",
      rating: 4.9,
    },
    {
      id: 7,
      name: "биология",
      rating: 4.2,
    },
    {
      id: 8,
      name: "химия",
      rating: 3.7,
    },
    {
      id: 9,
      name: "география",
      rating: 3.8,
    },
  ];

  const styles = {
    div: {
      marginLeft: 220,
    },
    buttonStyle: {
      marginLeft: 30,
      marginRight: 0,
    },
    rect: {
      width: "200px",
      height: "100px",
      background: color,
    },
  };
  return (
    <div className="container" style={styles.div}>
      <p style={{ marginLeft: 30 }}>
        Текущая температура: <b>{count}</b>
      </p>

      {/* <button style={styles.buttonStyle} onClick={()=>setDetails(count+1)}>Увеличить</button>
    <button style={styles.buttonStyle} onClick={()=>setDetails(count-1)}>Уменьшить</button> */}

      {/* <button
        style={styles.buttonStyle}
        onClick={() =>{
          setName(nameBut == "Закрасить" ? "Очистить" : "Закрасить")
          setColor(nameBut == "Закрасить" ? "blue" : "black")
        }
        }
      >
        {nameBut}
      </button>
      <div style={styles.rect}></div> */}
      <div>{text}</div>
      <button onClick={() => setText(text == fulltext ? shorttext : fulltext)}>
        Подробнее
      </button>

      <SchoolLessons lesson={lessons} />
    </div>
  );
}

export default App;
