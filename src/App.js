import "./App.css";
import bookData from "./book-data.json";

function App() {
  return (
    <div>
      <h1>Freeshelf</h1>
      <ul>
        {bookData.map((book) => (
            <li>
            <div>{book.title}</div>
            <div>{book.author}</div>
            <div>{book.coverImageUr}</div>
            </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

//  {/* Use bookData to show books on the page*/}
