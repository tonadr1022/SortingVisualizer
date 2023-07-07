import { useGetSortOrders } from "../components/sortOrders";
import { Column, HandleBoardResetParams } from "../interfaces/interfaces";

const useBoardReset = ({ setBoard, sortOrderKey }: HandleBoardResetParams) => {
  const sortOrders = useGetSortOrders();
  const { random, reversed, nearlySorted, fewUnique } = sortOrders;

  const sortOrderColumns: { [key: string]: Column[] } = {
    random: random.initialColumns,
    reversed: reversed.initialColumns,
    nearlySorted: nearlySorted.initialColumns,
    fewUnique: fewUnique.initialColumns,
  };
  const columns: Column[] = sortOrderColumns[sortOrderKey];
  const handleBoardReset = () => {
    setBoard((prevBoard) => ({
      ...prevBoard,
      columns: columns,
    }));
  };
  return handleBoardReset;
};

export default useBoardReset;
