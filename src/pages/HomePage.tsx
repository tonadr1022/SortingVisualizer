import { createContext, useState } from "react";
import SortingAlgorithmVisualizer from "../components/SortingAlgorithmVisualizer";

export const IsSolveAllContext = createContext(false);
export const ResetAllContext = createContext(false);
export const NumColumnsContext = createContext(10);
const HomePage = () => {
  const [isSolveAll, setIsSolveAll] = useState(false);
  const [resetAll, setResetAll] = useState(false);
  const [numColumns, setNumColumns] = useState(10);

  const onSolveAllClick = (): void => {
    setIsSolveAll((prev) => !prev);

    // Delay turning off the solve all toggle
    setTimeout(() => {
      setIsSolveAll(false);
    }, 10); // Adjust the delay as per your requirements
  };

  const onResetAllClick = (): void => {
    setResetAll((prev) => !prev);
    // Delay turning off the solve all toggle
    setTimeout(() => {
      setResetAll(false);
    }, 10); // Adjust the delay as per your requirements
  };

  const onNumColumnsChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const numColumns = Number(e.target.value);
    setNumColumns(numColumns);
  };

  return (
    <>
      <button onClick={onSolveAllClick}>Solve All</button>
      <button onClick={onResetAllClick}>Reset</button>
      <input
        type="range"
        id="column-count"
        name="column-count"
        onChange={onNumColumnsChange}></input>
      <IsSolveAllContext.Provider value={isSolveAll}>
        <ResetAllContext.Provider value={resetAll}>
          <NumColumnsContext.Provider value={numColumns}>
            <SortingAlgorithmVisualizer />
          </NumColumnsContext.Provider>
        </ResetAllContext.Provider>
      </IsSolveAllContext.Provider>
    </>
  );
};

export default HomePage;
