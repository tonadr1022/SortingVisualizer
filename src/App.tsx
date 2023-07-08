/* eslint-disable @typescript-eslint/no-empty-function */
import HomePage from "./pages/HomePage";
import { createContext, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AlgorithmPage from "./pages/AlgorithmPage";
import SortOrderPage from "./pages/SortOrderPage";

interface IsSolveAllInterface {
  isSolveAll: boolean;
  setIsSolveAll: React.Dispatch<React.SetStateAction<boolean>>;
}
interface IsResetAllInterface {
  isResetAll: boolean;
  setIsResetAll: React.Dispatch<React.SetStateAction<boolean>>;
}
interface NumColumnsInterface {
  numColumns: number;
  setNumColumns: React.Dispatch<React.SetStateAction<number>>;
}

interface SpeedMultiplierInterface {
  speedMultiplier: number;
  setSpeedMultiplier: React.Dispatch<React.SetStateAction<number>>;
}

export const IsSolveAllContext = createContext<IsSolveAllInterface>({
  isSolveAll: false,
  setIsSolveAll: () => {},
});
export const IsResetAllContext = createContext<IsResetAllInterface>({
  isResetAll: false,
  setIsResetAll: () => {},
});
export const NumColumnsContext = createContext<NumColumnsInterface>({
  numColumns: 20,
  setNumColumns: () => {},
});

export const SpeedMultiplierContext = createContext<SpeedMultiplierInterface>({
  speedMultiplier: 1,
  setSpeedMultiplier: () => {},
});

function App() {
  const [isSolveAll, setIsSolveAll] = useState(false);
  const [isResetAll, setIsResetAll] = useState(false);
  const [numColumns, setNumColumns] = useState(20);
  const [speedMultiplier, setSpeedMultiplier] = useState(1);

  return (
    <>
      <IsSolveAllContext.Provider value={{ isSolveAll, setIsSolveAll }}>
        <IsResetAllContext.Provider value={{ isResetAll, setIsResetAll }}>
          <NumColumnsContext.Provider value={{ numColumns, setNumColumns }}>
            <SpeedMultiplierContext.Provider
              value={{ speedMultiplier, setSpeedMultiplier }}>
              <BrowserRouter>
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route
                    path="/algorithms/:algorithmKey"
                    element={<AlgorithmPage />}
                  />
                  <Route
                    path="/sorts/:sortOrderKey"
                    element={<SortOrderPage />}
                  />
                </Routes>
              </BrowserRouter>
            </SpeedMultiplierContext.Provider>
          </NumColumnsContext.Provider>
        </IsResetAllContext.Provider>
      </IsSolveAllContext.Provider>
    </>
  );
}

export default App;
