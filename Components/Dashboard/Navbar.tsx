"use client"

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { BookOpen, Sun, Moon } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";

export default function Navbar() {
    const containerRef = useRef<HTMLDivElement>(null);
    const navRef = useRef<HTMLElement>(null);
    const { theme, toggleTheme } = useTheme();

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
        <header className="fixed  top-0 left-0 right-0 w-full z-50 duration-300 bg-white dark:bg-black border-b border-slate-300 dark:border-slate-800">
            <nav ref={navRef} className="flex justify-between items-center px-8 py-4 max-w-7xl mx-auto w-full">
                <div className="flex items-center gap-4 cursor-pointer group">
                    <div className="bg-indigo-600 p-2 rounded-xl group-hover:rotate-12 transition-transform duration-300">
                        <BookOpen size={20} className="text-white" />
                    </div>
                    <span className="text-xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-600 dark:from-white dark:to-slate-400">
                        FluentAI
                    </span>
                </div>

                <div className="flex items-center gap-4 lg:gap-6">
                    <button
                        onClick={toggleTheme}
                        className="p-2.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 dark:bg-slate-800 dark:hover:bg-slate-700 dark:text-slate-300 transition-all duration-200"
                        title="Toggle dark mode"
                    >
                        {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
                    </button>

                    <button className="hidden sm:block text-sm font-medium text-slate-600 border border-slate-300 px-5 py-2 rounded-2xl dark:border-slate-800 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white transition-colors duration-200">
                        Sign In
                    </button>

                    <button className="text-sm font-medium bg-slate-900 text-white dark:bg-white dark:text-slate-900 px-5 py-2 rounded-2xl hover:scale-105 transition-transform duration-200 shadow-md transition-colors duration-300">
                        Sign Up
                    </button>
                </div>
            </nav>
        </header>
    </>
}