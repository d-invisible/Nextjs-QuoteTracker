"use server"

import { getSession } from "../auth/auth"
import connectDB from "../db"
import { Board, Column, Quote } from "../models/index"

interface quoteData {
    company: string,
    position: string,
    location?: string,
    salary?: string,
    jobUrl?: string,
    tags?: string,
    description?: string,
    notes?: string,
    columnId: string,
    boardId: string,
}

export async function createQuote(data: quoteData) {
    try {
        const session = await getSession()
        if (!session) {
            return { error: "Unauthorized" }
        }

        await connectDB();

        const { company, position, location, salary, jobUrl, tags, description, notes, columnId, boardId } = data

        if (!company || !position || !columnId || !boardId) {
            return { status: "error", message: "Company and position are required" }
        }

        // verify board ownership
        const board = await Board.findById(boardId)
        if (!board) {
            return { status: "error", message: "Board not found" }
        }
        if (board.userId.toString() !== session.user.id.toString()) {
            return { status: "error", message: "Unauthorized" }
        }
        console.log(columnId)
        //verify column ownership
        const column = await Column.findById(columnId)
        if (!column) {
            return { status: "error", message: "Column not found" }
        }
        if (column.boardId.toString() !== boardId.toString()) {
            return { status: "error", message: "Column not found" }
        }

        const maxOrder = (await Quote.findOne({ columnId })
            .sort({ order: -1 })
            .select("order")
            .lean()) as { order: number } | null;



        const newQuote = await Quote.create({ ...data, userId: session.user.id, status: "applied", order: maxOrder ? maxOrder.order + 1 : 0 })

        await Column.findByIdAndUpdate(columnId, { $push: { quotes: newQuote._id } })

        return { status: "success", message: "Quote created successfully", quote: JSON.parse(JSON.stringify(newQuote)) }


    } catch (error) {
        return { status: "error", message: "Failed to create quote" }
    }


}