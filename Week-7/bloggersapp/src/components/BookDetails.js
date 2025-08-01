import React from "react";

// Demonstrates: conditional rendering via if/else, ternary, &&, fallback values, list rendering with keys
const BookItem = ({ book }) => {
  // if/else: availability badge
  const availabilityLabel = () => {
    if (book.available) return <span className="badge available">Available</span>;
    else return <span className="badge unavailable">Checked Out</span>;
  };

  return (
    <div className="card">
      <h3>{book.title || "Untitled Book"}</h3>
      <p>
        Author:{" "}
        {book.author ? (
          book.author
        ) : (
          // ternary showing fallback
          <em>Author unknown</em>
        )}
      </p>
      <div>{availabilityLabel()}</div>
      {/* logical &&: show a note only if not available */}
      {!book.available && <p className="note">This book is currently borrowed.</p>}
    </div>
  );
};

const BookDetails = ({ books }) => {
  if (!books || books.length === 0) {
    // early return
    return <div>No book data to show.</div>;
  }

  return (
    <div className="list">
      {books.map((b) => (
        <BookItem key={b.id} book={b} />
      ))}
    </div>
  );
};

export default BookDetails;
