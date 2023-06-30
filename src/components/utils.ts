// export const generateInitialColumnArray = (): board => {
//     const board: board = {columns: []}
//     for (let i = 0; i < 30; i++) {
//         board.columns.push({value: 0, isFinalOrder: false})
//     }
//     return board;
// }

export const deepCopySimpleObject = <T>(obj: T): T => {
  return JSON.parse(JSON.stringify(obj));
};

/**
 * Pauses execution for x milliseconds
 */
export const pause = async (): Promise<void> => {
  await new Promise((resolve) => setTimeout(resolve, 50));
};
