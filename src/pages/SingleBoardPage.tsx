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
      <h1 style={{ margin: 0 }}>{algorithm.name} Sort</h1>
      <h3 style={{ marginBottom: 8 }}>{sortOrder.name} Order</h3>
      <Options pageType="single" />
      <div style={{ width: "90vw" }}>
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
