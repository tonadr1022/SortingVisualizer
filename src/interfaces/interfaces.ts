export interface board {
  columns: column[];
}
export type column = {
  value: number;
  isMin: boolean;
};