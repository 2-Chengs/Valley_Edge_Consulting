'use client';

import { useEffect } from 'react';
import ReactGA from 'react-ga4';

export function Analytics() {
  useEffect(() => {
    // Google Analytics 4 Measurement ID
    const GA_MEASUREMENT_ID = 'G-WE4HYTRRFQ';
    
    // Initialize Google Analytics
    ReactGA.initialize(GA_MEASUREMENT_ID);
    
    // Send initial pageview
    ReactGA.send({
      hitType: 'pageview',
      page: window.location.pathname + window.location.search
    });
    
    // Track page changes
    const handleRouteChange = (url: string) => {
      ReactGA.send({
        hitType: 'pageview',
        page: url
      });
    };
    
    // Listen for route changes in Next.js
    window.addEventListener('beforeunload', () => {
      ReactGA.event({
        category: 'User',
        action: 'Left Page',
        label: window.location.pathname + window.location.search
      });
    });
    
    // Track search terms related to Port Alberni
    const trackLocalSearch = () => {
      if (window.location.search.includes('alberni') || 
          window.location.search.includes('port') || 
          window.location.search.includes('web') || 
          window.location.search.includes('design')) {
        ReactGA.event({
          category: 'Search',
          action: 'Local Search Term',
          label: window.location.search
        });
      }
    };
    
    trackLocalSearch();
    
    return () => {
      window.removeEventListener('beforeunload', () => {});
    };
  }, []);
  
  return null;
} 