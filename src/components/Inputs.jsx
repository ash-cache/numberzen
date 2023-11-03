import Query from "./Query";

function Inputs({ history, handleInput }) {
  return (
    <>
      <div id="inputs">
        {history.queries.map((query, index) => {
          return (
            <Query
              query={query}
              key={index}
              index={index}
              handleInput={handleInput}
            />
          );
        })}
      </div>
    </>
  );
}

export default Inputs;
