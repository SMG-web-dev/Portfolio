import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './i18n/i18n.ts';
import './index.css';
import SEO from './components/SEO.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <SEO />
    <App />
  </StrictMode>
);