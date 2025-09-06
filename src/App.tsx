import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// --- Page Imports ---
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import TeamPage from "./pages/TeamPage"; 
import GalleryPage from "./pages/GalleryPage";
import SupportPage from "./pages/SupportPage";
import ProgramsPage from "./pages/ProgramsPage";
import OurStoryPage from "./pages/OurStoryPage"; // Assuming you created this page

// --- Component & Hook Imports ---
import AnimatedBackground from "./components/AnimatedBackground";
import ScrollToTop from "./components/ScrollToTop"; // <-- IMPORT THE NEW COMPONENT

// Create the Query Client instance
const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <div className="fixed inset-0 z-[-1]">
        <AnimatedBackground />
      </div>

      <Toaster />
      <Sonner />

      <BrowserRouter>
        {/* THIS COMPONENT WILL FIX THE SCROLLING ISSUE ON ALL NAVIGATIONS */}
        <ScrollToTop /> 
        
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/support" element={<SupportPage />} />
          <Route path="/programs" element={<ProgramsPage />} />
          <Route path="/story" element={<OurStoryPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;