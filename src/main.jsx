import React from 'react';
import ReactDOM from 'react-dom/client';
import { NextUIProvider } from '@nextui-org/react';

import "./styles/input.css";
import "./styles/output.css";

import { App } from './components/App';
import { Header } from './components/Header';
import { Wpp } from './components/wpp';
import { Footer } from './components/Footer'; // Corrección en la importación

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NextUIProvider>
      <Header />
      <App />
      <Wpp />
      <Footer />
    </NextUIProvider>
  </React.StrictMode>
);
