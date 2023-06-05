import React, { useState } from "react";
import { BookItem } from "./BookItem";

function BookList() {
  const [spisok, setSpisok] = useState([]);
  const [field, setField] = useState();

  const styles = {
    div: {
      marginTop: "20px",
      width: '100%'
    },
    disp: {
      marginTop: "20px",
    },
  };

  return (
    <form style={styles.disp}>
      <div>
        <label>Список книги по React</label>
        <input
          type="text"
          required
          placeholder="The Road to Learn React"
          onChange={(e) => {
            setField(e.target.value);
          }}
        />
        <button
          type="button"
          style={styles.div}
          className="custom-btn btn-16"
          onClick={() => {
            setSpisok([...spisok, field]);
          }}
        >
          Добавить в список
        </button>
      </div>
      <div>
        {spisok.map((book) => (
          <BookItem book={book} />
        ))}
      </div>
    </form>
  );
}

function List(props) {
  return (
    <h3>
      <li>{props.model}</li>
    </h3>
  );
}

export default BookList;
