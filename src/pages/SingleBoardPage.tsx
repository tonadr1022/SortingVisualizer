import { useParams } from "react-router-dom";
import Board from "../components/ui/Board";
import { algorithms } from "../components/algorithms";
import { useGetSortOrders } from "../components/sortOrders";
import Options from "../components/ui/Options";

const SingleBoardPage = () => {
  const { algorithmKey, sortOrderKey } = useParams();
  const sortOrders = useGetSortOrders();

  // initialize with defaults
  let algorithm = algorithms.selection;
  let sortOrder = sortOrders.random;

  if (algorithmKey) {
    ({ [algorithmKey]: algorithm } = algorithms);
  }
  if (sortOrderKey) {
    ({ [sortOrderKey]: sortOrder } = sortOrders);
  }

  return (
    <main>
      <h1 style={{ textAlign: "center" }}>
        {algorithm.name} Sort - {sortOrder.name}
      </h1>
      <Options pageType="single" />

      <div style={{ width: "90vw", height: "500px" }}>
        <Board
          algorithm={algorithm}
          sortOrder={sortOrder}
          isSingleBoard={true}
        />
      </div>
    </main>
  );
};

export default SingleBoardPage;
