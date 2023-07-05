import { OptionsProps } from "../../interfaces/interfaces";

const Options = ({
  onSolveAllClick,
  onResetAllClick,
  onNumColumnsChange,
}: OptionsProps) => {
  return (
    <>
      <button onClick={onSolveAllClick}>Solve All</button>
      <button onClick={onResetAllClick}>Reset</button>
      <input
        type="range"
        id="column-count"
        name="column-count"
        onChange={onNumColumnsChange}></input>
    </>
  );
};

export default Options;
