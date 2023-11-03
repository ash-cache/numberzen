import Solution from "./Solution";

function Answers({ history }) {
  return (
    <>
      <div id="answers">
        {history.answers.map((answer, index) => {
          return <Solution key={index} answer={answer} />;
        })}
      </div>
    </>
  );
}

export default Answers;
