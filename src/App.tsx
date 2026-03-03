import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";
import MainLayout from "@/components/layout/MainLayout";
import Home from "@/pages/Home";
import About from "@/pages/About";
import News from "@/pages/News";
import Tenders from "@/pages/Tenders";
import Departments from "@/pages/Departments";
import Vendor from "@/pages/Vendor";
import Employee from "@/pages/Employee";
import RTI from "@/pages/RTI";
import Contact from "@/pages/Contact";
import NotFound from "@/pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <LanguageProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <MainLayout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/news" element={<News />} />
              <Route path="/tenders" element={<Tenders />} />
              <Route path="/departments" element={<Departments />} />
              <Route path="/vendor" element={<Vendor />} />
              <Route path="/employee" element={<Employee />} />
              <Route path="/rti" element={<RTI />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </MainLayout>
        </BrowserRouter>
      </LanguageProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
