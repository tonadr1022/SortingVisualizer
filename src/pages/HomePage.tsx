import SortingAlgorithmVisualizer from "../components/SortingAlgorithmVisualizer";
import Options from "../components/ui/Options";

const HomePage = () => {
  return (
    <main>
      <h1>Sorting Algorithms</h1>
      <Options pageType="home" />
      <SortingAlgorithmVisualizer />
    </main>
  );
};

export default HomePage;
