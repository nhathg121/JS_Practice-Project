const Book = (props) => {
  // destructuring props
  const { img, title, author } = props;

  const clickHandler = (event) => {
    console.log(event);
  };

  //show author fuction
  const complexExample = (author) => {
    console.log(author);
  };
  return (
    <article
      className="book"
      //   onMouseOver={(event) => {
      //     clickHandler(event.target);
      //   }}
    >
      <img src={img} alt="{title}" />
      <h1 className="title"> {title}</h1>
      <h4 className="authorName">{author}</h4>

      <div className="btn">
        <button
          className="buyBtn"
          type="button"
          onClick={() => {
            console.log(title);
          }}
        >
          reference example
        </button>
        <button
          className="buyBtn"
          type="button"
          onClick={() => {
            complexExample(author);
          }}
        >
          More complex example
        </button>
      </div>
    </article>
  );
};
export default Book;
