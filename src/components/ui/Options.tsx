import { useContext } from "react";
import {
  IsResetAllContext,
  IsSolveAllContext,
  NumColumnsContext,
  SpeedMultiplierContext,
} from "../../App";
import HomeButton from "./HomeButton";
import { PageType } from "../../interfaces/interfaces";
interface Props {
  pageType: PageType;
}
const Options = ({ pageType }: Props) => {
  const { setIsSolveAll } = useContext(IsSolveAllContext);
  const { setIsResetAll } = useContext(IsResetAllContext);
  const { numColumns, setNumColumns } = useContext(NumColumnsContext);
  const { speedMultiplier, setSpeedMultiplier } = useContext(
    SpeedMultiplierContext
  );
  const onSolveAllClick = (): void => {
    if (setIsSolveAll) {
      setIsSolveAll((prev) => !prev);
      setTimeout(() => {
        setIsSolveAll(false);
      }, 1);
    }
  };

  const onResetAllClick = (): void => {
    setIsResetAll(true);
    setTimeout(() => {
      setIsResetAll(false);
    }, 1);
  };
  const onSpeedChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const sliderValue = Number(e.target.value);
    let speedMultiplier;
    if (sliderValue < 10) speedMultiplier = 0.125 / 2;
    else if (sliderValue < 20) speedMultiplier = 0.125;
    else if (sliderValue < 40) speedMultiplier = 0.25;
    else if (sliderValue < 60) speedMultiplier = 1;
    else if (sliderValue < 80) speedMultiplier = 4;
    else speedMultiplier = 8;

    setSpeedMultiplier(speedMultiplier);
  };

  const onNumColumnsChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const sliderValue = Number(e.target.value);
    let numColumns;
    if (pageType === "home") {
      if (sliderValue < 25) numColumns = 10;
      else if (sliderValue < 50) numColumns = 20;
      else if (sliderValue < 75) numColumns = 30;
      else numColumns = 40;
    } else {
      if (sliderValue < 10) numColumns = 10;
      else if (sliderValue < 20) numColumns = 20;
      else if (sliderValue < 30) numColumns = 40;
      else if (sliderValue < 40) numColumns = 60;
      else if (sliderValue < 50) numColumns = 80;
      else if (sliderValue < 60) numColumns = 100;
      else if (sliderValue < 70) numColumns = 120;
      else if (sliderValue < 80) numColumns = 140;
      else if (sliderValue < 90) numColumns = 170;
      else numColumns = 200;
    }

    setNumColumns(numColumns);
  };

  return (
    <div className="options-container">
      <div className="flex-row-center">
        {pageType !== "home" && <HomeButton />}
        <button style={{ margin: 2 }} onClick={onSolveAllClick}>
          Solve{pageType !== "single" ? " All" : ""}
        </button>
        <button style={{ margin: 2 }} onClick={onResetAllClick}>
          Reset
        </button>
      </div>
      <div className="flex-row-center">
        <p
          style={{ marginTop: "0.5em", marginBottom: "0.5em", width: "125px" }}>
          NumCols: {numColumns}
        </p>
        <input
          type="range"
          defaultValue={49}
          id="column-count-input"
          name="column-count"
          onChange={onNumColumnsChange}></input>
      </div>
      <div className="flex-row-center">
        <p
          style={{ marginTop: "0.5em", marginBottom: "0.5em", width: "125px" }}>
          Speed: {speedMultiplier}x
        </p>
        <input
          type="range"
          defaultValue={50}
          id="speed-input"
          name="speed"
          onChange={onSpeedChange}></input>
      </div>
    </div>
  );
};

export default Options;
