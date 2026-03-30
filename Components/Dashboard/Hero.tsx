"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Sparkles, Globe2, ArrowRight } from "lucide-react";

export default function Hero() {
    const containerRef = useRef<HTMLDivElement>(null);
    const heroTextRef = useRef<HTMLDivElement>(null);
    const heroImageRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            if (heroTextRef.current) {
                const textElements = heroTextRef.current.children;
                gsap.from(textElements, {
                    y: 50,
                    opacity: 0,
                    duration: 1,
                    stagger: 0.2,
                    ease: "back.out(1.7)",
                    delay: 0.3,
                });
            }

            gsap.from(".gsap-card", {
                x: 100,
                y: 50,
                opacity: 0,
                rotation: 10,
                duration: 1,
                stagger: 0.15,
                ease: "power3.out",
                delay: 0.8,
            });

            gsap.utils.toArray(".gsap-card").forEach((card: any, i) => {
                gsap.to(card, {
                    y: "-=15",
                    rotation: i % 2 === 0 ? 2 : -2,
                    duration: 2 + i * 0.5,
                    yoyo: true,
                    repeat: -1,
                    ease: "sine.inOut",
                    delay: 2,
                });
            });

        }, containerRef);

        return () => ctx.revert();
    }, []);


    return <>
        <main className="max-w-7xl mx-auto px-8 pt-20 pb-32 flex flex-col lg:flex-row items-center justify-between min-h-[calc(100vh-100px)] relative z-10">

            <div ref={heroTextRef} className="lg:w-1/2 flex flex-col gap-8 w-full max-w-2xl">
                <div className="inline-flex items-center gap-2 bg-indigo-500/10 border border-indigo-500/20 px-4 py-2 rounded-full w-fit">
                    <Sparkles size={16} className="text-indigo-400" />
                    <span className="text-xs font-semibold text-indigo-300 tracking-wide uppercase">AI-Powered Language Learning</span>
                </div>

                <h1 className="text-6xl lg:text-7xl font-extrabold leading-[1.1] tracking-tight">
                    Master English <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-violet-400 to-purple-400">
                        10x Faster.
                    </span>
                </h1>

                <p className="text-lg text-slate-400 leading-relaxed max-w-lg">
                    Immerse yourself in real-time conversations, get instant feedback, and achieve fluency with our advanced AI tutors designed specifically for your learning pace.
                </p>

                <div className="flex items-center gap-4 pt-4">
                    <button className="flex items-center gap-2 bg-indigo-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-indigo-500 hover:-translate-y-1 transition-all duration-300 shadow-xl shadow-indigo-500/25">
                        Start Learning Free
                        <ArrowRight size={20} />
                    </button>
                    <button className="flex items-center gap-2 bg-slate-800/50 backdrop-blur-md text-white border border-slate-700 px-8 py-4 rounded-full font-semibold hover:bg-slate-800 transition-all duration-300">
                        Watch Demo
                    </button>
                </div>

                <div className="flex items-center gap-4 mt-8 pt-8 border-t border-slate-800/60">
                    <div className="flex -space-x-3">
                        {[1, 2, 3, 4].map((i) => (
                            <div key={i} className={`w-10 h-10 rounded-full border-2 border-slate-950 bg-slate-800 flex items-center justify-center overflow-hidden`}>
                                <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i}&backgroundColor=transparent`} alt="User avatar" />
                            </div>
                        ))}
                    </div>
                    <div className="text-sm text-slate-400">
                        <span className="text-white font-bold">50k+</span> students already joined
                    </div>
                </div>
            </div>

            <div ref={heroImageRef} className="lg:w-1/2 mt-16 lg:mt-0 relative w-full h-[500px] flex items-center justify-center">
                <div
                    className="gsap-card absolute z-20 bg-slate-900 border border-slate-700/50 p-6 rounded-3xl shadow-2xl w-80 backdrop-blur-xl"
                    style={{ transform: "rotate(-5deg)", top: "10%", right: "15%" }}
                >
                    <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 bg-indigo-500/20 rounded-full flex items-center justify-center">
                            <Globe2 className="text-indigo-400" />
                        </div>
                        <div>
                            <h3 className="text-white font-semibold">Pronunciation</h3>
                            <p className="text-indigo-400 text-sm font-medium">98% Accuracy</p>
                        </div>
                    </div>
                    <div className="w-full bg-slate-800 rounded-full h-2 mb-2">
                        <div className="bg-gradient-to-r from-indigo-500 to-purple-500 h-2 rounded-full w-[98%] shadow-[0_0_10px_rgba(99,102,241,0.5)]"></div>
                    </div>
                </div>

                {/* Chat Card */}
                <div
                    className="gsap-card absolute z-30 bg-slate-800/90 border border-slate-700/50 p-4 rounded-2xl shadow-xl w-64 backdrop-blur-md"
                    style={{ transform: "rotate(3deg)", top: "45%", right: "45%" }}
                >
                    <div className="flex items-start gap-3">
                        <img src={`https://api.dicebear.com/7.x/bottts/svg?seed=ai&backgroundColor=c0aede`} className="w-10 h-10 rounded-full bg-slate-700" alt="AI tutor" />
                        <div>
                            <p className="text-sm text-white font-medium bg-slate-700 p-2 rounded-tr-xl rounded-br-xl rounded-bl-xl inline-block">
                                "Your accent is sounding much more natural today! Keep it up."
                            </p>
                            <div className="flex gap-1 mt-2">
                                <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse"></span>
                                <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" style={{ animationDelay: '200ms' }}></span>
                                <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" style={{ animationDelay: '400ms' }}></span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Stats Card */}
                <div
                    className="gsap-card absolute z-10 bg-gradient-to-br from-violet-600 to-indigo-700 p-6 rounded-3xl shadow-2xl w-64"
                    style={{ transform: "rotate(8deg)", bottom: "5%", right: "5%" }}
                >
                    <h4 className="text-violet-200 text-sm font-medium mb-1">Vocabulary Set</h4>
                    <div className="text-4xl font-bold text-white mb-2">2,450</div>
                    <p className="text-violet-200 text-sm border-t border-violet-400/30 pt-3 mt-3">Words mastered this month 🔥</p>
                </div>

            </div>
        </main>
    </>
}