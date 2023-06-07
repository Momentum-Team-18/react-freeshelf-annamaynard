import { useState } from 'react'

function bookData(props) {
    const [expanded, setExpanded] = useState(false)

    return (
        <div class="bookCard">
            <h1>{props.title}</h1>
            <h2>{props.author}</h2>
            <p>{props.shortDescription}</p>
            <p><img src={props.img} alt="bookimage" /></p>
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
