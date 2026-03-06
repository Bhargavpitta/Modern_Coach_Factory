import { ReactNode } from "react";
import UtilityBar from "./UtilityBar";
import Header from "./Header";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function MainLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      <UtilityBar />
      <Header />
      <Navbar />
      <main className="flex-1" id="main-content" role="main">
        {children}
      </main>
      <Footer />
    </div>
  );
}
