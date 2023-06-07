import "./App.css";
import bookData from "./book-data.json";
import { useState } from 'react'

function App() {
     
  return (
    <div>
      <h1>Freeshelf</h1>
      <ul>
        {bookData.map((book) => <BookInfo name={book} />)}
      </ul>
    </div>
  );
}


function BookInfo(props) {
    const [expanded, setExpanded] = useState(false)

    return (
        <div className="bookCard">
            <h1>{props.title}</h1>
            <h2>{props.author}</h2>
            <p>{props.shortDescription}</p>
            <p><img src={props.coverImageUrl} alt="bookimage" /></p>
            <button onClick={() => setExpanded(!expanded)}> {expanded ? "Show Less" : "Show More"}</button>
            {expanded && (
                <div>
                    <p>{props.url}</p>
                    <p>{props.puhlisher}</p>
                    <p>{props.detailedDescription}</p>
                </div>
            )}

        </div>
    )
}

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

export default App;

//  {/* Use bookData to show books on the page*/}
