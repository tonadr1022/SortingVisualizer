interface props {
  onResetClick: () => void;
  onSolveAllClick: () => void;
  onNumColumnsChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Prompt = ({
  onResetClick,
  onSolveAllClick,
  onNumColumnsChange,
}: props) => {
  return (
    <div>
      <button onClick={onResetClick}>Reset</button>
      <button onClick={onSolveAllClick}>Solve All</button>
      <input
        type="range"
        id="column-count"
        name="column-count"
        onChange={onNumColumnsChange}></input>
    </div>
  );
};

export default Prompt;
