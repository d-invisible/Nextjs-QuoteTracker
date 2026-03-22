"use client"

import { Board, Column } from "@/lib/models/models.types";
import { Award, Calendar, CheckCircle2, Mic, MoreVertical, Pencil, Trash2, XCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { Button } from "./ui/button";
import CreateQuote from "./CreateQuote";

interface KanbanBoardProps {
    board: Board;
    userId: string;
}

interface ColConfig {
    color: string;
    icon: React.ReactNode;
}
const COLUMN_CONFIG: Array<ColConfig> = [
    {
        color: "bg-cyan-500",
        icon: <Calendar className="h-4 w-4" />,
    },
    {
        color: "bg-purple-500",
        icon: <CheckCircle2 className="h-4 w-4" />,
    },
    {
        color: "bg-green-500",
        icon: <Mic className="h-4 w-4" />,
    },
    {
        color: "bg-yellow-500",
        icon: <Award className="h-4 w-4" />,
    },
    {
        color: "bg-red-500",
        icon: <XCircle className="h-4 w-4" />,
    },
];

function DroppableColumn({ column, config, boardId }: { column: Column, config: ColConfig, boardId: string }) {
    console.log('column ', column);
    return (
        <Card className="pt-0">
            <CardHeader className={`${config.color} text-white py-2 px-4`}>
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        {config.icon}
                        <CardTitle>{column.name}</CardTitle>
                    </div>

                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="ghost" className="text-white">
                                <MoreVertical className="h-4 w-4" />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                            <DropdownMenuItem><Pencil className="h-4 w-4" /> Edit</DropdownMenuItem>
                            <DropdownMenuItem><Trash2 className="h-4 w-4" /> Delete</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </CardHeader>


            <CardContent className="space-y-2 pt-4 bg-gray-100/50 min-h-[400px] rounded-b-lg">
                {column.quotes.length === 0 && <p className="text-gray-500">No quotes yet</p>}
                <CreateQuote columnId={column._id} boardId={boardId} /></CardContent>
        </Card>
    )
}

export default function KanbanBoard({ board, userId }: KanbanBoardProps) {
    const columns = board.columns;
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {columns.map((col, key) => {
                    const config = COLUMN_CONFIG[key] || COLUMN_CONFIG[0];
                    return (
                        <DroppableColumn
                            key={key}
                            column={col}
                            config={config}
                            boardId={board._id}
                        />
                    )

                })}
            </div>
        </div>
    )
}