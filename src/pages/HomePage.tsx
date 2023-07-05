import SortingAlgorithmVisualizer from "../components/SortingAlgorithmVisualizer";
import Options from "../components/ui/Options";
import { OptionsProps } from "../interfaces/interfaces";

const HomePage = ({
  onSolveAllClick,
  onResetAllClick,
  onNumColumnsChange,
}: OptionsProps) => {
  return (
    <>
      <Options
        onNumColumnsChange={onNumColumnsChange}
        onSolveAllClick={onSolveAllClick}
        onResetAllClick={onResetAllClick}
      />
      <SortingAlgorithmVisualizer />
    </>
  );
};

export default HomePage;
