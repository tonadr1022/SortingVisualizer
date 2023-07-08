import selectionSort from "../sortingAlgorithms.ts/selectionSort";
import insertionSort from "../sortingAlgorithms.ts/insertionSort";
import bubbleSort from "../sortingAlgorithms.ts/bubbleSort";
import heapSort from "../sortingAlgorithms.ts/heapSort";
import { Algorithm } from "../interfaces/interfaces";
import shellSort from "../sortingAlgorithms.ts/shellSort";
import quickSort from "../sortingAlgorithms.ts/quickSort";
import mergeSort from "../sortingAlgorithms.ts/mergeSort";

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
  shell: { key: "shell", name: "Shell", sortFunction: shellSort },
  quick: { key: "quick", name: "Quick", sortFunction: quickSort },
  merge: { key: "merge", name: "Merge", sortFunction: mergeSort },
};
