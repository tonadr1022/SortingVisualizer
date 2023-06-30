interface props {
  onResetClick: () => void;
  onNumColumnsChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Prompt = ({ onResetClick, onNumColumnsChange }: props) => {
  return (
    <div>
      <button onClick={onResetClick}>Reset</button>
      <input
        type="range"
        id="column-count"
        name="column-count"
        onChange={onNumColumnsChange}></input>
    </div>
  );
};

export default Prompt;
