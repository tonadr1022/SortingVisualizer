interface props {
  onGenerateBoardClick: () => void;
  onSolveClick: () => void;
}

const Prompt = ({ onGenerateBoardClick, onSolveClick }: props) => {
  return (
    <div>
      <button onClick={onGenerateBoardClick}>Generate Board</button>
      <button onClick={onSolveClick}>Solve</button>
    </div>
  );
};

export default Prompt;
