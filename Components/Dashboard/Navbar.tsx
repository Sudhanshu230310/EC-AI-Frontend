"use client"

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { BookOpen } from "lucide-react";

export default function Navbar() {
    const containerRef = useRef<HTMLDivElement>(null);
    const navRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(navRef.current, {
                y: -50,
                opacity: 0,
                duration: 1,
                ease: "power3.out",
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return <>
        <nav ref={navRef} className="flex justify-between items-center px-8 py-6 max-w-7xl mx-auto relative z-10 w-full">
            <div className="flex items-center gap-2 cursor-pointer group">
                <div className="bg-indigo-600 p-2 rounded-xl group-hover:rotate-12 transition-transform duration-300">
                    <BookOpen size={24} className="text-white" />
                </div>
                <span className="text-2xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">
                    FluentAI
                </span>
            </div>

            <div className="flex items-center gap-6">
                <button className="text-sm font-medium text-slate-300 hover:text-white transition-colors duration-200">
                    Sign In
                </button>
                <button className="text-sm font-medium bg-white text-slate-900 px-5 py-2.5 rounded-full hover:bg-slate-200 hover:scale-105 transition-all duration-200 shadow-[0_0_20px_rgba(255,255,255,0.3)]">
                    Sign Up
                </button>
            </div>
        </nav>
    </>
}