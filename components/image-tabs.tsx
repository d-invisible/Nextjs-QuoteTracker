import { useState } from "react";
import { Button } from "./ui/button";
import Image from "next/image";


export default function ImageTabs() {
    const [activeTab, setActiveTab] = useState("quotes");
    return (
        <section className="border-t bg-white py-16">
            <div className="container mx-auto px-4">
                <div className="mx-auto max-w-6xl">
                    {/* Tabs */}
                    <div className="flex items-center justify-center gap-4 mb-10">
                        <Button onClick={() => setActiveTab("quotes")} variant={activeTab === "quotes" ? "default" : "outline"} className={`rounded-lg py-3 text-sm font-medium transition-colors ${activeTab === "quotes" ? "bg-blue-500 text-white" : "bg-white text-gray-700"}`}>Quotes</Button>
                        <Button onClick={() => setActiveTab("invoices")} variant={activeTab === "invoices" ? "default" : "outline"} className={`rounded-lg py-3 text-sm font-medium transition-colors ${activeTab === "invoices" ? "bg-blue-500 text-white" : "bg-white text-gray-700"}`}>Invoices</Button>
                        <Button onClick={() => setActiveTab("clients")} variant={activeTab === "clients" ? "default" : "outline"} className={`rounded-lg py-3 text-sm font-medium transition-colors ${activeTab === "clients" ? "bg-blue-500 text-white" : "bg-white text-gray-700"}`}>Clients</Button>
                    </div>
                    <div className="relative mx-auto max-w-5xl overflow-hidden rounded-lg border-gray-200 shadow-xl">
                        {activeTab === "quotes" && <Image
                            src="/hero-images/hero1.png"
                            alt="hero1"
                            width={1200}
                            height={800}
                        />}
                        {activeTab === "invoices" && <Image
                            src="/hero-images/hero2.png"
                            alt="hero2"
                            width={1200}
                            height={800}
                        />}
                        {activeTab === "clients" && <Image
                            src="/hero-images/hero3.png"
                            alt="hero3"
                            width={1200}
                            height={800}
                        />}
                    </div>
                </div>
            </div>

        </section>
    )
}