import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <main className="flex-1">
        {/* hero section */}
        <section className="container mx-auto px-4 py-32">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-black mb-6 text-6xl font-bold">Better way to track <span className="text-blue-500">Quotes</span></h1>
            <p className="text-muted-foreground mb-10 text-xl">Manage your quotes and invoices in one place.</p>
            <div className="flex flex-col gap-4 items-center">
              <Link href="/sign-up">
                <Button size="lg" className="h-12 px-8 text-lg font-medium cursor-pointer bg-blue-500 hover:bg-blue-600">Start for free <ArrowRight className="ml-2 h-5 w-5" /></Button>
              </Link><p className="text-sm text-muted-foreground">Free forever. No Credit card required</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
