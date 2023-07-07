import HomePage from "./pages/HomePage";
import { createContext, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AlgorithmPage from "./pages/AlgorithmPage";
import { useGetSortOrders } from "./components/sortOrders";
import { Column } from "./interfaces/interfaces";
import SortOrderPage from "./pages/SortOrderPage";

interface IsSolveAllContextInterface {
  isSolveAll: boolean;
  setIsSolveAll: React.Dispatch<React.SetStateAction<boolean>>;
}

export const IsSolveAllContext = createContext<
  IsSolveAllContextInterface | undefined
>(undefined);
export const ResetAllContext = createContext(false);
export const NumColumnsContext = createContext(10);
export const InitialColumnsContext = createContext<{ [key: string]: Column[] }>(
  {}
);

function App() {
  console.log("app render");
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
    setResetAll(true);
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
      <IsSolveAllContext.Provider value={{ isSolveAll, setIsSolveAll }}>
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
                      <SortOrderPage
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
