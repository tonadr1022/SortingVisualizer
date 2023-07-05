import selectionSort from "../sortingAlgorithms.ts/selectionSort";
import insertionSort from "../sortingAlgorithms.ts/insertionSort";
import bubbleSort from "../sortingAlgorithms.ts/bubbleSort";
import heapSort from "../sortingAlgorithms.ts/heapSort";
import { Algorithm } from "../interfaces/interfaces";

interface Algorithms {
  [key: string]: Algorithm;
}
export const algorithms: Algorithms = {
  selection: {
    key: "selection",
    name: "Selection",
    sortFunction: selectionSort,
  },
  insertion: {
    key: "insertion",
    name: "Insertion",
    sortFunction: insertionSort,
  },
  bubble: { key: "bubble", name: "Bubble", sortFunction: bubbleSort },
  heap: { key: "heap", name: "Heap", sortFunction: heapSort },
};
