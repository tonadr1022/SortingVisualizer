// export const generateInitialColumnArray = (): board => {
//     const board: board = {columns: []}
//     for (let i = 0; i < 30; i++) {
//         board.columns.push({value: 0, isColorOne: false})
//     }
//     return board;
// }

export const deepCopySimpleObject = <T>(obj: T): T => {
  return JSON.parse(JSON.stringify(obj));
};
