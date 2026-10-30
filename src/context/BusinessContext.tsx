import React, { createContext, useContext, useState, useEffect } from 'react';
import { BusinessConfig, defaultBusinessConfig } from '../config/businessConfig';

export type PageId = 'home' | 'menu' | 'about' | 'gallery' | 'contact';

interface BusinessContextType {
  config: BusinessConfig;
  updateConfig: (patch: Partial<BusinessConfig>) => void;
  resetConfig: () => void;
  showSampleMenu: boolean;
  setShowSampleMenu: (show: boolean) => void;
  isConfigDrawerOpen: boolean;
  setIsConfigDrawerOpen: (open: boolean) => void;
  currentPage: PageId;
  setCurrentPage: (page: PageId) => void;
  navigateTo: (page: PageId, anchorId?: string) => void;
}

const STORAGE_KEY = 'ks_cafe_business_config_v1';
const SAMPLE_MODE_KEY = 'ks_cafe_show_sample_menu_v1';

const BusinessContext = createContext<BusinessContextType | undefined>(undefined);

export const BusinessProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [config, setConfig] = useState<BusinessConfig>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        return { ...defaultBusinessConfig, ...JSON.parse(saved) };
      }
    } catch {
      // fallback
    }
    return defaultBusinessConfig;
  });

  const [showSampleMenu, setShowSampleMenuState] = useState<boolean>(() => {
    try {
      const saved = localStorage.getItem(SAMPLE_MODE_KEY);
      return saved !== null ? JSON.parse(saved) : true; // Default true so client can preview full layout on first impression with clear demo banners
    } catch {
      return true;
    }
  });

  const [isConfigDrawerOpen, setIsConfigDrawerOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState<PageId>('home');

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(config));
    } catch (e) {
      console.warn('Failed to save business config', e);
    }
  }, [config]);

  const setShowSampleMenu = (val: boolean) => {
    setShowSampleMenuState(val);
    try {
      localStorage.setItem(SAMPLE_MODE_KEY, JSON.stringify(val));
    } catch (e) {
      console.warn('Failed to save sample mode', e);
    }
  };

  const updateConfig = (patch: Partial<BusinessConfig>) => {
    setConfig((prev) => ({ ...prev, ...patch }));
  };

  const resetConfig = () => {
    setConfig(defaultBusinessConfig);
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch (e) {
      console.warn('Failed to remove config', e);
    }
  };

  const navigateTo = (page: PageId, anchorId?: string) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (anchorId) {
      setTimeout(() => {
        const el = document.getElementById(anchorId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  return (
    <BusinessContext.Provider
      value={{
        config,
        updateConfig,
        resetConfig,
        showSampleMenu,
        setShowSampleMenu,
        isConfigDrawerOpen,
        setIsConfigDrawerOpen,
        currentPage,
        setCurrentPage,
        navigateTo,
      }}
    >
      {children}
    </BusinessContext.Provider>
  );
};

export const useBusiness = (): BusinessContextType => {
  const context = useContext(BusinessContext);
  if (!context) {
    throw new Error('useBusiness must be used within a BusinessProvider');
  }
  return context;
};
