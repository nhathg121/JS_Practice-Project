import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { data } from "./books";
import Book from "./Book";

function BookList() {
  return (
    <section className="bookList">
      {data.map((book, index) => {
        return <Book key={index} {...book} />;
      })}
    </section>
  );
}

createRoot(document.getElementById("root")).render(<BookList />);
