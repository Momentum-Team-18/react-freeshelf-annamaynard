import "./App.css";
import bookData from "./book-data.json";
import { useState } from "react";

function App() {
  return (
    <div>
      <h1>Freeshelf</h1>
      <ul>
        {bookData.map((book) => (
          <BookInfo book={book} />
        ))}
      </ul>
    </div>
  );
}

function BookInfo(props) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="container">
      <div className="bookCard">
        <div className="bookCardLeft">
          <h2>
            <a href={props.book.url}>{props.book.title}</a>
          </h2>
          <h3>Author: {props.book.author}</h3>
          <p>{props.book.shortDescription}</p>
              <button onClick={() => setExpanded(!expanded)}>
                {" "}
                {expanded ? "Show Less" : "Show More"}
              </button>
              {expanded && (
                <div>
                  <p>{props.book.detailedDescription}</p>
                  <p>Published by: {props.book.publisher}</p>
                  <p>Publication Date: {props.book.publicationDate}</p>
                </div>
              )}
        </div>
        <div clasName="bookCardRight">
          <p>
            <img
              className="image"
              src={props.book.coverImageUrl}
              alt="bookimage"
            />
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
