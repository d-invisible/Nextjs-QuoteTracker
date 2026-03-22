import { Board, Column } from "./index";
import connectDB from "../db";

export default async function initUserBoard(userId: string) {
    try {
        await connectDB();
        const board = await Board.findOne({ userId });
        if (board) {
            return board;
        }
        const newBoard = await Board.create({
            userId,
            name: "Quotes",
            columns: [],
        });
        const default_columns = [
            { name: "Opportunity", order: 0, boardId: newBoard._id, userId, quotes: [] },
            { name: "Review", order: 1, boardId: newBoard._id, userId, quotes: [] },
            { name: "Closed", order: 2, boardId: newBoard._id, userId, quotes: [] },
            { name: "Loop", order: 3, boardId: newBoard._id, userId, quotes: [] },
        ];
        const createdColumns = await Column.insertMany(default_columns);

        const columnIds = createdColumns.map((column) => column._id);
        newBoard.columns = columnIds;
        await newBoard.save();

        return newBoard;

    } catch (err) {
        throw err;
    }

}