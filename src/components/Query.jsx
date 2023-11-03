function Query({ query, index, handleInput }) {
  return (
    <div
      contentEditable="true"
      className="query"
      onInput={(e) => {
        handleInput(index, e.target.innerHTML);
      }}
    >
      {query}
    </div>
  );
}

export default Query;
