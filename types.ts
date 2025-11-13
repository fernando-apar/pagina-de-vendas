// FIX: Add missing React import to resolve 'Cannot find namespace' error.
import React from 'react';

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
}

export interface FeatureItem {
  icon: React.ReactNode;
  title: string;
  description: string;
}