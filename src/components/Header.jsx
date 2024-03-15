import colombia from "../public/images/colombia.png";
import "../styles/header.css";

export const Header = () => {
  return (
    <header className="header-container fixed top-0 w-full shadow-md z-50 p-4">
      <div className="yellow-rectangle flex-grow flex items-center">
        <h1 className="h11 text-black text-2xl mx-auto"> ✈️ Envíos a toda Colombia ✈️</h1>
      </div>
      <img className="colombia-image max-h-8 object-contain" src={colombia} alt="Colombia" />
    </header>
  );
};
