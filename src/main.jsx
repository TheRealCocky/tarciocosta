import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';

// 👉 Importa e ativa o Vercel Analytics
import { inject } from '@vercel/analytics';
inject();

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <App />
    </StrictMode>
);

