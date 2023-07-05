import HomePage from "./pages/HomePage";
import { createContext, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AlgorithmPage from "./pages/AlgorithmPage";
import { useGetSortOrders } from "./components/sortOrders";
import { Column } from "./interfaces/interfaces";

export const IsSolveAllContext = createContext(false);
export const ResetAllContext = createContext(false);
export const NumColumnsContext = createContext(10);
export const InitialColumnsContext = createContext<{ [key: string]: Column[] }>(
  {}
);

function App() {
  const [isSolveAll, setIsSolveAll] = useState(false);
  const [resetAll, setResetAll] = useState(false);
  const [numColumns, setNumColumns] = useState(10);

  const sortOrders = useGetSortOrders();
  const { random, reversed, nearlySorted, fewUnique } = sortOrders;

  const sortOrderColumns: { [key: string]: Column[] } = {
    random: random.initialColumns,
    reversed: reversed.initialColumns,
    nearlySorted: nearlySorted.initialColumns,
    fewUnique: fewUnique.initialColumns,
  };

  const onSolveAllClick = (): void => {
    setIsSolveAll((prev) => !prev);
    setTimeout(() => {
      setIsSolveAll(false);
    }, 1);
  };

  const onResetAllClick = (): void => {
    setResetAll((prev) => !prev);
    setTimeout(() => {
      setResetAll(false);
    }, 1);
  };

  const onNumColumnsChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const numColumns = Number(e.target.value);
    setNumColumns(numColumns);
  };
  return (
    <>
      <IsSolveAllContext.Provider value={isSolveAll}>
        <ResetAllContext.Provider value={resetAll}>
          <NumColumnsContext.Provider value={numColumns}>
            <InitialColumnsContext.Provider value={sortOrderColumns}>
              <BrowserRouter>
                <Routes>
                  <Route
                    path="/"
                    element={
                      <HomePage
                        onSolveAllClick={onSolveAllClick}
                        onResetAllClick={onResetAllClick}
                        onNumColumnsChange={onNumColumnsChange}
                      />
                    }
                  />
                  <Route
                    path="/algorithms/:algorithmKey"
                    element={
                      <AlgorithmPage
                        onSolveAllClick={onSolveAllClick}
                        onResetAllClick={onResetAllClick}
                        onNumColumnsChange={onNumColumnsChange}
                      />
                    }
                  />
                  <Route
                    path="/sorts/:sortOrderKey"
                    element={
                      <AlgorithmPage
                        onSolveAllClick={onSolveAllClick}
                        onResetAllClick={onResetAllClick}
                        onNumColumnsChange={onNumColumnsChange}
                      />
                    }
                  />
                </Routes>
              </BrowserRouter>
            </InitialColumnsContext.Provider>
          </NumColumnsContext.Provider>
        </ResetAllContext.Provider>
      </IsSolveAllContext.Provider>
    </>
  );
}

export default App;
