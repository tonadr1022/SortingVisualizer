import {
  useGetFewUniqueColumns,
  useGetNearlySortedColumns,
  useGetRandomColumns,
  useGetReverseColumns,
} from "../utils/getInitialColumns";

export const useGetSortOrders = () => {
  console.log("in get sort orders");
  const randomColumns = useGetRandomColumns();
  const reversedColumns = useGetReverseColumns();
  const nearlySortedColumns = useGetNearlySortedColumns();
  const fewUniqueColumns = useGetFewUniqueColumns();
  return {
    random: {
      key: "random",
      name: "Random",
      getColumnsFunction: useGetRandomColumns,
      initialColumns: randomColumns,
    },
    reversed: {
      key: "reversed",
      name: "Reversed",
      getColumnsFunction: useGetReverseColumns,
      initialColumns: reversedColumns,
    },
    nearlySorted: {
      key: "nearlySorted",
      name: "Nearly Sorted",
      getColumnsFunction: useGetNearlySortedColumns,
      initialColumns: nearlySortedColumns,
    },
    fewUnique: {
      key: "fewUnique",
      name: "Few Unique",
      getColumnsFunction: useGetFewUniqueColumns,
      initialColumns: fewUniqueColumns,
    },
  };
};
