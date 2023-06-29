export interface board {
  columns: column[];
}
export interface column {
  value: number;
  isColorOne: boolean;
  isColorTwo: boolean;
  isSeen: boolean;
}
