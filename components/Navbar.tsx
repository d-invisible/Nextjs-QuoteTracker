import Link from "next/link";
import { Button } from "./ui/button";
import { Briefcase } from "lucide-react";


export default function Navbar() {
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
                    <Link href="/sign-in">
                        <Button variant="ghost">Login</Button>
                    </Link>
                    <Link href="/sign-up" >
                        <Button className="bg-blue-500">Sign Up</Button>
                    </Link>
                </div>
            </div>
        </nav>
    )
}