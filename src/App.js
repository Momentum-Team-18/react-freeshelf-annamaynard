import "./App.css";
import bookData from "./book-data.json";
import { useState } from "react";

function App() {
  return (
    <div>
      <h1>Freeshelf</h1>
      <ul>
        {bookData.map((book) => (
          <BookInfo book={book}
          />
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
        <h2>{props.book.title}</h2>
        <h3>{props.book.author}</h3>
        <p>{props.book.shortDescription}</p>
        <p>
          <img className="image" src={props.book.coverImageUrl} alt="bookimage" />
        </p>
        <button onClick={() => setExpanded(!expanded)}>
          {" "}
          {expanded ? "Show Less" : "Show More"}
        </button>
        {expanded && (
            <div>
            <p>{props.book.url}</p>
            <p>{props.book.publisher}</p>
            <p>{props.book.detailedDescription}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;

// The page should display a list of books with a thumbnail display of information for each book, including:

// + title
// + author
// + short description
// + image of the book's cover

// The additional information shown in the expanded view should include:

// + URL
// + publisher
// + publication date
// + expanded description

//  {/* Use bookData to show books on the page*/}

// title={book.title}
// author={book.author}
// description={book.shortDescription}
// image={book.coverImageUrl}
// url={book.url}
// publisher={book.publisher}
// detailed={book.detailedDescription}