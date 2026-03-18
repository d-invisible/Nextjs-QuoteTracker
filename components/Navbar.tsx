"use client"

import Link from "next/link";
import { Button } from "./ui/button";
import { Briefcase } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { Avatar, AvatarFallback } from "./ui/avatar";
import SignOutBtn from "./sign-out-btn";
import { useSession } from "@/lib/auth/auth-client";


export default function Navbar() {
    const { data: session } = useSession();

    return (
        <nav className="border-b border-gray-200 bg-white">
            <div className="container mx-auto h-16 flex items-center justify-between px-4 py-4">
                <Link href="/" className="flex items-center gap-2 text-xl font-semibold text-blue-500">
                    <Briefcase />
                    <p>Q-Tracker</p>
                </Link>
                <div className="flex items-center gap-6 text-muted-foreground">
                    <Link href="/dashboard" className="text-blue-500 hover:text-blue-600">Dashboard</Link>
                    <Link href="/quotes">Quotes</Link>
                    <Link href="/invoices">Invoices</Link>
                    <Link href="/clients">Clients</Link>

                </div>
                <div className="flex items-center gap-2">
                    {session?.user ? (
                        <>
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button variant="ghost">
                                        <Avatar>
                                            {/* <AvatarImage src={session.user.image} /> */}
                                            <AvatarFallback className="bg-blue-200 text-blue-500">{session.user.name[0]}</AvatarFallback>
                                        </Avatar>
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent className="mr-4">
                                    <DropdownMenuLabel>
                                        <div>
                                            <p className="font-semibold text-sm text-black">{session.user.name}</p>
                                            <p className="text-xs text-muted-foreground">{session.user.email}</p>
                                        </div>
                                    </DropdownMenuLabel>
                                    <DropdownMenuSeparator />

                                    <SignOutBtn />

                                </DropdownMenuContent>
                            </DropdownMenu>
                        </>
                    ) : (
                        <><Link href="/sign-in">
                            <Button variant="ghost">Login</Button>
                        </Link>
                            <Link href="/sign-up" >
                                <Button className="bg-blue-500">Sign Up</Button>
                            </Link></>
                    )}

                </div>
            </div>
        </nav>
    )
}