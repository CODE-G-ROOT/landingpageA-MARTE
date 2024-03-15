import React from 'react';
import WPP from "../public/images/R.png";

export const Wpp = () => {
  return (
    <div className="fixed bottom-12 right-1 animate-bounce">
      <a href="https://web.whatsapp.com/">
        <img className="w-20 h-20 object-cover rounded-full" src={WPP} alt="WPP" />
      </a>
    </div>
  );
};
