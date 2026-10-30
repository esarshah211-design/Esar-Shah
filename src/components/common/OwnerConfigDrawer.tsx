import React, { useState } from 'react';
import { useBusiness } from '../../context/BusinessContext';
import { X, Save, RotateCcw, Download, Check, AlertCircle, Plus, Trash2 } from 'lucide-react';
import { MenuItem, defaultBusinessConfig } from '../../config/businessConfig';

export const OwnerConfigDrawer: React.FC = () => {
  const {
    config,
    updateConfig,
    resetConfig,
    showSampleMenu,
    setShowSampleMenu,
    isConfigDrawerOpen,
    setIsConfigDrawerOpen,
  } = useBusiness();

  const [activeTab, setActiveTab] = useState<'info' | 'contact' | 'hours' | 'menu'>('info');
  const [copied, setCopied] = useState(false);
  const [saveToast, setSaveToast] = useState(false);

  // Form local state
  const [formData, setFormData] = useState(config);

  // Sync formData when drawer opens
  React.useEffect(() => {
    if (isConfigDrawerOpen) {
      setFormData(config);
    }
  }, [isConfigDrawerOpen, config]);

  if (!isConfigDrawerOpen) return null;

  const handleSave = () => {
    updateConfig(formData);
    setSaveToast(true);
    setTimeout(() => setSaveToast(false), 2500);
  };

  const handleExportJson = () => {
    const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(formData, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute('href', dataStr);
    downloadAnchor.setAttribute('download', `ks_cafe_config_${Date.now()}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  const handleCopyConfig = () => {
    navigator.clipboard.writeText(JSON.stringify(formData, null, 2));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Menu item adder helper
  const handleAddMenuItem = () => {
    const newItem: MenuItem = {
      id: `verified-${Date.now()}`,
      name: 'New Menu Offering',
      category: formData.menuCategories[0]?.id || 'hot-coffee',
      description: 'Handcrafted with fresh ingredients.',
      pricePKR: 450,
      imageCategory: 'espresso',
      samplePlaceholder: false,
    };
    setFormData((prev) => ({
      ...prev,
      isMenuVerified: true,
      verifiedMenuItems: [...prev.verifiedMenuItems, newItem],
    }));
  };

  const handleRemoveMenuItem = (id: string) => {
    setFormData((prev) => ({
      ...prev,
      verifiedMenuItems: prev.verifiedMenuItems.filter((i) => i.id !== id),
    }));
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/50 backdrop-blur-xs flex justify-end">
      <div className="w-full max-w-2xl bg-[#FAF6EF] h-full shadow-2xl flex flex-col border-l border-[#E6DED2] animate-in slide-in-from-right duration-200">
        {/* Drawer Header */}
        <div className="bg-[#291710] text-[#FAF6EF] p-5 flex items-center justify-between border-b border-[#3B241C]">
          <div>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#C58B54]" />
              <h2 className="font-serif text-lg font-bold">Owner Content Manager</h2>
            </div>
            <p className="text-xs text-[#E6DED2]/80 mt-0.5">
              Edit verified details, contact links, opening hours & real menu in real time.
            </p>
          </div>
          <button
            onClick={() => setIsConfigDrawerOpen(false)}
            className="p-2 rounded-lg text-[#E6DED2] hover:bg-[#3B241C] hover:text-white transition-colors cursor-pointer"
            aria-label="Close configuration drawer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Global Demo Switch Banner */}
        <div className="bg-[#E6DED2]/40 border-b border-[#E6DED2] px-5 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold text-[#292622]">Display Mode:</span>
            <span className="text-xs text-[#6B665F]">
              {showSampleMenu ? 'Sample Demo Layout Preview (with demo badges)' : 'Verified Strict Mode (only confirmed items)'}
            </span>
          </div>
          <button
            onClick={() => setShowSampleMenu(!showSampleMenu)}
            className={`px-3 py-1.5 rounded-md text-xs font-medium transition-colors cursor-pointer ${
              showSampleMenu
                ? 'bg-[#687653] text-white hover:bg-[#4D5B3C]'
                : 'bg-[#3B241C] text-white hover:bg-[#291710]'
            }`}
          >
            {showSampleMenu ? 'Switch to Strict Mode' : 'Switch to Demo Preview'}
          </button>
        </div>

        {/* Navigation Tabs */}
        <div className="flex border-b border-[#E6DED2] bg-white px-5 gap-4">
          <button
            onClick={() => setActiveTab('info')}
            className={`py-3 text-xs font-semibold border-b-2 transition-colors cursor-pointer ${
              activeTab === 'info'
                ? 'border-[#3B241C] text-[#3B241C]'
                : 'border-transparent text-[#6B665F] hover:text-[#3B241C]'
            }`}
          >
            Business & Address
          </button>
          <button
            onClick={() => setActiveTab('contact')}
            className={`py-3 text-xs font-semibold border-b-2 transition-colors cursor-pointer ${
              activeTab === 'contact'
                ? 'border-[#3B241C] text-[#3B241C]'
                : 'border-transparent text-[#6B665F] hover:text-[#3B241C]'
            }`}
          >
            Phone & WhatsApp
          </button>
          <button
            onClick={() => setActiveTab('hours')}
            className={`py-3 text-xs font-semibold border-b-2 transition-colors cursor-pointer ${
              activeTab === 'hours'
                ? 'border-[#3B241C] text-[#3B241C]'
                : 'border-transparent text-[#6B665F] hover:text-[#3B241C]'
            }`}
          >
            Operating Hours
          </button>
          <button
            onClick={() => setActiveTab('menu')}
            className={`py-3 text-xs font-semibold border-b-2 transition-colors cursor-pointer ${
              activeTab === 'menu'
                ? 'border-[#3B241C] text-[#3B241C]'
                : 'border-transparent text-[#6B665F] hover:text-[#3B241C]'
            }`}
          >
            Menu Items ({formData.verifiedMenuItems.length})
          </button>
        </div>

        {/* Tab Contents */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {/* TAB 1: INFO */}
          {activeTab === 'info' && (
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-[#292622] mb-1">
                  Business Name
                </label>
                <input
                  type="text"
                  value={formData.businessName}
                  onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                  className="w-full text-sm bg-white border border-[#E6DED2] rounded-lg px-3 py-2 text-[#292622] focus:ring-2 focus:ring-[#C58B54] focus:outline-hidden"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#292622] mb-1">
                  Business Category
                </label>
                <input
                  type="text"
                  value={formData.businessCategory}
                  onChange={(e) => setFormData({ ...formData, businessCategory: e.target.value })}
                  className="w-full text-sm bg-white border border-[#E6DED2] rounded-lg px-3 py-2 text-[#292622] focus:ring-2 focus:ring-[#C58B54] focus:outline-hidden"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#292622] mb-1">
                  Tagline / Hero Hook
                </label>
                <input
                  type="text"
                  value={formData.tagline}
                  onChange={(e) => setFormData({ ...formData, tagline: e.target.value })}
                  className="w-full text-sm bg-white border border-[#E6DED2] rounded-lg px-3 py-2 text-[#292622] focus:ring-2 focus:ring-[#C58B54] focus:outline-hidden"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#292622] mb-1">
                  Short Description
                </label>
                <textarea
                  rows={2}
                  value={formData.shortDescription}
                  onChange={(e) => setFormData({ ...formData, shortDescription: e.target.value })}
                  className="w-full text-sm bg-white border border-[#E6DED2] rounded-lg px-3 py-2 text-[#292622] focus:ring-2 focus:ring-[#C58B54] focus:outline-hidden"
                />
              </div>

              <div className="pt-2 border-t border-[#E6DED2]">
                <div className="flex items-center justify-between mb-2">
                  <label className="text-xs font-semibold text-[#292622]">
                    Street Address & Locality
                  </label>
                  <label className="flex items-center gap-2 text-xs text-[#6B665F] cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.isAddressVerified}
                      onChange={(e) =>
                        setFormData({ ...formData, isAddressVerified: e.target.checked })
                      }
                      className="rounded text-[#3B241C]"
                    />
                    <span>Mark as Verified by Owner</span>
                  </label>
                </div>
                <input
                  type="text"
                  placeholder="e.g. Shop 4, Ground Floor, Commercial Center"
                  value={formData.fullAddress}
                  onChange={(e) => setFormData({ ...formData, fullAddress: e.target.value })}
                  className="w-full text-sm bg-white border border-[#E6DED2] rounded-lg px-3 py-2 text-[#292622] focus:ring-2 focus:ring-[#C58B54] focus:outline-hidden mb-2"
                />
                <div className="grid grid-cols-2 gap-2">
                  <input
                    type="text"
                    placeholder="Locality / Sector"
                    value={formData.locality}
                    onChange={(e) => setFormData({ ...formData, locality: e.target.value })}
                    className="text-sm bg-white border border-[#E6DED2] rounded-lg px-3 py-2 text-[#292622]"
                  />
                  <input
                    type="text"
                    placeholder="City"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="text-sm bg-white border border-[#E6DED2] rounded-lg px-3 py-2 text-[#292622]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#292622] mb-1">
                  Google Maps Directions Link
                </label>
                <input
                  type="text"
                  value={formData.googleMapsDirectionsUrl}
                  onChange={(e) =>
                    setFormData({ ...formData, googleMapsDirectionsUrl: e.target.value })
                  }
                  className="w-full text-xs font-mono bg-white border border-[#E6DED2] rounded-lg px-3 py-2 text-[#292622]"
                />
              </div>
            </div>
          )}

          {/* TAB 2: CONTACT */}
          {activeTab === 'contact' && (
            <div className="space-y-4">
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-3 text-xs text-amber-900 flex items-start gap-2">
                <AlertCircle className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                <p>
                  Per the business requirements, the <strong>Call button</strong> only appears when a phone number is entered and verified. Similarly, the <strong>WhatsApp button</strong> is only active when a verified number is configured.
                </p>
              </div>

              <div className="p-4 bg-white rounded-xl border border-[#E6DED2] space-y-3">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-semibold text-[#292622]">
                    Telephone Number
                  </label>
                  <label className="flex items-center gap-1.5 text-xs text-[#687653] cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.isPhoneVerified}
                      onChange={(e) =>
                        setFormData({ ...formData, isPhoneVerified: e.target.checked })
                      }
                    />
                    <span>Verified</span>
                  </label>
                </div>
                <input
                  type="text"
                  placeholder="+92 300 1234567"
                  value={formData.phoneNumber || ''}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      phoneNumber: e.target.value || null,
                      isPhoneVerified: !!e.target.value,
                    })
                  }
                  className="w-full text-sm bg-white border border-[#E6DED2] rounded-lg px-3 py-2"
                />
              </div>

              <div className="p-4 bg-white rounded-xl border border-[#E6DED2] space-y-3">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-semibold text-[#292622]">
                    WhatsApp Number (International Digits)
                  </label>
                  <label className="flex items-center gap-1.5 text-xs text-[#687653] cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.isWhatsAppVerified}
                      onChange={(e) =>
                        setFormData({ ...formData, isWhatsAppVerified: e.target.checked })
                      }
                    />
                    <span>Verified</span>
                  </label>
                </div>
                <input
                  type="text"
                  placeholder="923001234567 (no spaces or + symbol)"
                  value={formData.whatsAppNumber || ''}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      whatsAppNumber: e.target.value || null,
                      isWhatsAppVerified: !!e.target.value,
                    })
                  }
                  className="w-full text-sm bg-white border border-[#E6DED2] rounded-lg px-3 py-2"
                />
                <input
                  type="text"
                  placeholder="Default WhatsApp message"
                  value={formData.whatsAppDefaultMessage}
                  onChange={(e) =>
                    setFormData({ ...formData, whatsAppDefaultMessage: e.target.value })
                  }
                  className="w-full text-xs bg-[#FAF6EF] border border-[#E6DED2] rounded-lg px-3 py-1.5"
                />
              </div>

              <div className="p-4 bg-white rounded-xl border border-[#E6DED2] space-y-3">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-semibold text-[#292622]">
                    Official Email
                  </label>
                  <label className="flex items-center gap-1.5 text-xs text-[#687653] cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.isEmailVerified}
                      onChange={(e) =>
                        setFormData({ ...formData, isEmailVerified: e.target.checked })
                      }
                    />
                    <span>Verified</span>
                  </label>
                </div>
                <input
                  type="email"
                  placeholder="hello@kscafe.com"
                  value={formData.emailAddress || ''}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      emailAddress: e.target.value || null,
                      isEmailVerified: !!e.target.value,
                    })
                  }
                  className="w-full text-sm bg-white border border-[#E6DED2] rounded-lg px-3 py-2"
                />
              </div>
            </div>
          )}

          {/* TAB 3: HOURS */}
          {activeTab === 'hours' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-[#292622]">
                  Daily Schedule
                </span>
                <label className="flex items-center gap-1.5 text-xs text-[#687653] cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.areHoursVerified}
                    onChange={(e) =>
                      setFormData({ ...formData, areHoursVerified: e.target.checked })
                    }
                  />
                  <span>Mark All Hours Confirmed</span>
                </label>
              </div>

              <div className="space-y-2">
                {formData.hours.map((item, index) => (
                  <div
                    key={item.day}
                    className="bg-white p-3 rounded-lg border border-[#E6DED2] flex items-center justify-between gap-3 text-xs"
                  >
                    <span className="font-semibold text-[#3B241C] w-24">{item.day}</span>
                    <div className="flex items-center gap-2">
                      <input
                        type="text"
                        value={item.opens}
                        onChange={(e) => {
                          const newHours = [...formData.hours];
                          newHours[index].opens = e.target.value;
                          setFormData({ ...formData, hours: newHours });
                        }}
                        className="w-24 text-center border border-[#E6DED2] rounded px-2 py-1 text-xs"
                      />
                      <span>to</span>
                      <input
                        type="text"
                        value={item.closes}
                        onChange={(e) => {
                          const newHours = [...formData.hours];
                          newHours[index].closes = e.target.value;
                          setFormData({ ...formData, hours: newHours });
                        }}
                        className="w-24 text-center border border-[#E6DED2] rounded px-2 py-1 text-xs"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 4: MENU */}
          {activeTab === 'menu' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xs font-semibold text-[#292622]">
                    Verified Menu Items
                  </h3>
                  <p className="text-[11px] text-[#6B665F]">
                    Items added here will render in production mode.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={handleAddMenuItem}
                  className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-[#3B241C] text-white text-xs font-medium hover:bg-[#291710] cursor-pointer"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>Add Item</span>
                </button>
              </div>

              {formData.verifiedMenuItems.length === 0 ? (
                <div className="bg-white border border-dashed border-[#E6DED2] rounded-xl p-8 text-center text-xs text-[#6B665F] space-y-2">
                  <p className="font-medium text-[#292622]">
                    No verified menu items entered yet.
                  </p>
                  <p className="text-[#6B665F]">
                    Click "Add Item" to add confirmed items with exact prices in PKR, or toggle "Display Mode" above to preview sample cards.
                  </p>
                </div>
              ) : (
                <div className="space-y-3">
                  {formData.verifiedMenuItems.map((item, index) => (
                    <div
                      key={item.id}
                      className="bg-white border border-[#E6DED2] rounded-xl p-4 space-y-2 relative"
                    >
                      <button
                        onClick={() => handleRemoveMenuItem(item.id)}
                        className="absolute top-3 right-3 text-red-500 hover:text-red-700 p-1"
                        title="Delete item"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                      <div className="grid grid-cols-2 gap-2">
                        <div>
                          <label className="text-[10px] text-[#6B665F] uppercase font-semibold">
                            Item Name
                          </label>
                          <input
                            type="text"
                            value={item.name}
                            onChange={(e) => {
                              const updated = [...formData.verifiedMenuItems];
                              updated[index].name = e.target.value;
                              setFormData({ ...formData, verifiedMenuItems: updated });
                            }}
                            className="w-full text-xs font-semibold border border-[#E6DED2] rounded p-1.5"
                          />
                        </div>
                        <div>
                          <label className="text-[10px] text-[#6B665F] uppercase font-semibold">
                            Price in PKR
                          </label>
                          <input
                            type="number"
                            value={item.pricePKR || ''}
                            onChange={(e) => {
                              const updated = [...formData.verifiedMenuItems];
                              updated[index].pricePKR = Number(e.target.value) || null;
                              setFormData({ ...formData, verifiedMenuItems: updated });
                            }}
                            className="w-full text-xs font-semibold border border-[#E6DED2] rounded p-1.5"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="text-[10px] text-[#6B665F] uppercase font-semibold">
                          Description
                        </label>
                        <input
                          type="text"
                          value={item.description}
                          onChange={(e) => {
                            const updated = [...formData.verifiedMenuItems];
                            updated[index].description = e.target.value;
                            setFormData({ ...formData, verifiedMenuItems: updated });
                          }}
                          className="w-full text-xs border border-[#E6DED2] rounded p-1.5"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>

        {/* Drawer Footer Actions */}
        <div className="bg-[#FAF6EF] border-t border-[#E6DED2] p-5 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <button
              onClick={handleExportJson}
              className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-[#3B241C] bg-white border border-[#E6DED2] hover:bg-[#E6DED2]/50 rounded-lg cursor-pointer transition-colors"
              title="Download JSON configuration"
            >
              <Download className="w-3.5 h-3.5 text-[#C58B54]" />
              <span>Export JSON</span>
            </button>
            <button
              onClick={handleCopyConfig}
              className="inline-flex items-center gap-1 px-2.5 py-2 text-xs text-[#6B665F] hover:text-[#3B241C] cursor-pointer"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-green-600" /> : null}
              <span>{copied ? 'Copied!' : 'Copy Code'}</span>
            </button>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                resetConfig();
                setFormData(defaultBusinessConfig);
              }}
              className="inline-flex items-center gap-1 px-3 py-2 text-xs font-medium text-[#6B665F] hover:text-[#3B241C] cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset</span>
            </button>
            <button
              onClick={handleSave}
              className="inline-flex items-center gap-1.5 px-5 py-2 text-xs font-medium bg-[#3B241C] text-white hover:bg-[#291710] rounded-lg shadow-xs cursor-pointer"
            >
              <Save className="w-3.5 h-3.5" />
              <span>Apply Changes</span>
            </button>
          </div>
        </div>

        {/* Toast confirmation */}
        {saveToast && (
          <div className="absolute bottom-20 left-1/2 -translate-x-1/2 bg-[#291710] text-[#FAF6EF] text-xs px-4 py-2 rounded-lg shadow-lg flex items-center gap-2 border border-[#C58B54]/40 animate-fade-in">
            <Check className="w-3.5 h-3.5 text-emerald-400" />
            <span>Configuration updated and saved to browser memory!</span>
          </div>
        )}
      </div>
    </div>
  );
};
