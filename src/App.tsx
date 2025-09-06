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
import OurStoryPage from "./pages/OurStoryPage"; // <-- 1. IMPORT THE NEW PAGE

// --- Component & Hook Imports ---
import AnimatedBackground from "./components/AnimatedBackground";
import useScrollToTop from "./hooks/useScrollToTop";

// Create the Query Client instance
const queryClient = new QueryClient();

// This is a small wrapper component that allows our `useScrollToTop` hook 
// to live inside the context of the BrowserRouter.
const AppContent = () => {
  useScrollToTop(); // This hook ensures navigation scrolls the window to the top.
  
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/team" element={<TeamPage />} />
      <Route path="/gallery" element={<GalleryPage />} />
      <Route path="/support" element={<SupportPage />} />
      <Route path="/programs" element={<ProgramsPage />} />
      <Route path="/story" element={<OurStoryPage />} /> {/* <-- 2. ADD THE NEW ROUTE */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

const App = () => (
  // ... rest of the App component remains the same
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      {/* The animated background is placed here in a fixed container to sit behind all pages */}
      <div className="fixed inset-0 z-[-1]">
        <AnimatedBackground />
      </div>

      {/* Toast providers for notifications */}
      <Toaster />
      <Sonner />

      {/* The Router provides navigation context to our app */}
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;