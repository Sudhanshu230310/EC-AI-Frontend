import Hero from "@/Components/Dashboard/Hero";
import Navbar from "@/Components/Dashboard/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-50 overflow-hidden font-sans selection:bg-indigo-500/30 transition-colors duration-300">

      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

    </div>
  );
}
