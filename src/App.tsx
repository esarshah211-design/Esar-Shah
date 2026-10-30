import React from 'react';
import { BusinessProvider, useBusiness } from './context/BusinessContext';
import { AnnouncementBar } from './components/layout/AnnouncementBar';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { StickyMobileActions } from './components/layout/StickyMobileActions';
import { OwnerConfigDrawer } from './components/common/OwnerConfigDrawer';
import { HomePage } from './pages/HomePage';
import { MenuPage } from './pages/MenuPage';
import { AboutPage } from './pages/AboutPage';
import { GalleryPage } from './pages/GalleryPage';
import { ContactPage } from './pages/ContactPage';
import { SlidersHorizontal } from 'lucide-react';

const MainLayout: React.FC = () => {
  const { currentPage, setIsConfigDrawerOpen } = useBusiness();

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'menu':
        return <MenuPage />;
      case 'about':
        return <AboutPage />;
      case 'gallery':
        return <GalleryPage />;
      case 'contact':
        return <ContactPage />;
      case 'home':
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF6EF] text-[#292622] font-sans antialiased selection:bg-[#C58B54]/25 selection:text-[#3B241C]">
      {/* Top Announcement Bar */}
      <AnnouncementBar />

      {/* Main Sticky Header */}
      <Header />

      {/* Active Page View */}
      <main className="flex-1">{renderCurrentPage()}</main>

      {/* Footer */}
      <Footer />

      {/* Mobile Sticky Quick Actions (Directions, Menu, Call/WhatsApp) */}
      <StickyMobileActions />

      {/* Real-time Business Content Manager Drawer */}
      <OwnerConfigDrawer />

      {/* Subtle Floating Owner Config Button for Client Demonstration */}
      <button
        onClick={() => setIsConfigDrawerOpen(true)}
        className="hidden md:flex fixed bottom-6 right-6 z-30 items-center gap-2 px-3.5 py-2.5 rounded-full bg-[#291710]/90 hover:bg-[#3B241C] text-[#FAF6EF] border border-[#C58B54]/40 shadow-xl backdrop-blur-xs text-xs font-medium transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer"
        title="Open Owner Content Manager to edit verified business details, menu & hours"
      >
        <SlidersHorizontal className="w-3.5 h-3.5 text-[#C58B54]" />
        <span>Owner Config</span>
      </button>
    </div>
  );
};

export default function App() {
  return (
    <BusinessProvider>
      <MainLayout />
    </BusinessProvider>
  );
}
