import { board } from "../interfaces/interfaces"
export const generateInitialColumnArray = (): board => {
    const board: board = {columns: []}
    for (let i = 0; i < 30; i++) {
        board.columns.push({value: 0, isMin: false})
    }
    return board;
}