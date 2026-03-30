import Hero from "@/Components/Dashboard/Hero";
import Navbar from "@/Components/Dashboard/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 overflow-hidden font-sans selection:bg-indigo-500/30">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl -z-10 mix-blend-screen" />
      <div className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-violet-600/20 rounded-full blur-3xl -z-10 mix-blend-screen" />

      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

    </div>
  );
}
