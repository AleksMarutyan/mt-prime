"use client"

import { useState } from 'react';

interface InteractiveMapProps {
  address: string;
  className?: string
}

export default function InteractiveMap({ address, className = "" }: InteractiveMapProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [buttonClicked, setButtonClicked] = useState<string | null>(null);
  
  // Encode the address for the map URL
  const encodedAddress = encodeURIComponent(address);

  const handleGetDirections = () => {
    setButtonClicked('directions');
    setTimeout(() => setButtonClicked(null), 2000); // Reset after 2 seconds
    
    try {
      const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
      const isMac = /Mac/.test(navigator.userAgent);
      
      let url: string;
      if (isIOS || isMac) {
        // Use Apple Maps for iOS/Mac devices
        url = `http://maps.apple.com/?daddr=${encodedAddress}`;
      } else {
        // Use Google Maps for other devices
        url = `https://www.google.com/maps/dir/?api=1&destination=${encodedAddress}`;
      }
      
      const opened = window.open(url, '_blank');
      if (!opened) {
        // Fallback: direct navigation if popup is blocked
        window.location.href = url;
      }
    } catch (error) {
      console.error('Error opening map directions:', error);
      // Fallback to basic Google Maps search
      const fallbackUrl = `https://www.google.com/maps/search/${encodedAddress}`;
      try {
        const opened = window.open(fallbackUrl, '_blank');
        if (!opened) {
          window.location.href = fallbackUrl;
        }
      } catch (fallbackError) {
        console.error('Fallback also failed:', fallbackError);
        alert('Unable to open maps. Please search for: ' + address);
      }
    }
  };

  const handleViewInMaps = () => {
    const url = `https://www.google.com/maps/search/${encodedAddress}`;
    window.open(url, '_blank');
  };
  
  // Create the working map embed URL using Google Maps
  const workingMapUrl = `https://maps.google.com/maps?q=${encodedAddress}&t=&z=15&ie=UTF8&iwloc=&output=embed`;

  return (
    <div className={`relative ${className}`}>
      {/* Map Container with Enhanced Glassmorphism */}
      <div className="relative backdrop-blur-xl bg-gradient-to-br from-white/20 via-purple-50/30 to-blue-50/20 border-2 border-white/30 rounded-2xl overflow-hidden shadow-2xl shadow-purple-500/10">
        
        {/* Animated Background Gradients */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-400/10 via-blue-400/10 to-purple-400/10 animate-pulse pointer-events-none"></div>  
        {/* Map Iframe Container */}
        <div className="relative h-80 md:h-96">
          {/* Enhanced Loading Placeholder */}
          {!isLoaded && (
            <div className="absolute inset-0 bg-gradient-to-br from-purple-100/60 to-blue-100/60 backdrop-blur-sm flex items-center justify-center">
              <div className="text-center">
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-purple-500 via-purple-600 to-blue-600 rounded-2xl flex items-center justify-center shadow-xl shadow-purple-500/30 animate-pulse">
                    <svg className="w-10 h-10 text-white animate-spin" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                  </div>
                </div>
                <div className="space-y-2">
                  <p className="text-gray-700 font-semibold text-lg">Loading interactive map...</p>
                  <p className="text-gray-500 text-sm">Preparing your navigation experience</p>
                  <div className="flex justify-center gap-1 mt-4">
                    <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {/* Actual Map */}
          <iframe
            src={workingMapUrl}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className={`transition-all duration-700 ${isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
            onLoad={() => setIsLoaded(true)}
            title="MT PRIME Location Map"
          />
          
          {/* Enhanced Map Overlay for Glassmorphism Effect */}
          <div className="absolute inset-0 pointer-events-none">
            {/* Gradient Borders */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-400/40 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-400/40 to-transparent"></div>
            <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-purple-400/30 to-transparent"></div>
            <div className="absolute right-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-blue-400/30 to-transparent"></div>
            
            {/* Corner Accents */}
            <div className="absolute top-2 left-2 w-4 h-4 border-l-2 border-t-2 border-purple-400/60 rounded-tl-lg"></div>
            <div className="absolute top-2 right-2 w-4 h-4 border-r-2 border-t-2 border-blue-400/60 rounded-tr-lg"></div>
            <div className="absolute bottom-2 left-2 w-4 h-4 border-l-2 border-b-2 border-blue-400/60 rounded-bl-lg"></div>
            <div className="absolute bottom-2 right-2 w-4 h-4 border-r-2 border-b-2 border-purple-400/60 rounded-br-lg"></div>
          </div>
        </div>

        {/* Map Footer with Actions */}
        <div className="p-4 bg-gradient-to-r from-white/60 to-gray-50/60 border-t border-purple-200/30">
          <div className="flex flex-col sm:flex-row gap-3">
            {/* Get Directions Button */}
            <button
              onClick={handleGetDirections}
              disabled={buttonClicked === 'directions'}
              className={`flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 ${
                buttonClicked === 'directions' 
                  ? 'bg-gradient-to-r from-green-500 to-green-600 scale-95' 
                  : 'bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700'
              } text-white font-medium rounded-lg transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-purple-500/25 disabled:cursor-not-allowed`}
            >
              {buttonClicked === 'directions' ? (
                <>
                  <svg className="w-4 h-4 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  Opening...
                </>
              ) : (
                <>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                  </svg>
                  Get Directions
                </>
              )}
            </button>
            
            {/* View in Maps Button */}
            <button
              onClick={handleViewInMaps}
              className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 bg-white/70 hover:bg-white/90 text-gray-700 font-medium rounded-lg transition-all duration-300 border border-gray-200/50 hover:border-gray-300/70 shadow-sm hover:shadow-md"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              View in Maps
            </button>
          </div>
          
          {/* Address Display */}
          <div className="mt-3 pt-3 border-t border-purple-200/30">
            <p className="text-sm text-gray-600 text-center">
              📍 {address}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
