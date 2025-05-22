import { FaBars, FaTimes } from "react-icons/fa";
import { useState, useEffect, useRef } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef();

  // Fermer le menu si on clique à l'extérieur
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <nav className="fixed top-0 left-1/2 transform -translate-x-1/2 w-full md:w-4/5 z-50 bg-gray-900 shadow-md">
      <div className="flex items-center justify-between px-4 py-3">
        <a href="#home" className="text-white font-bold text-xl">BONANE</a>

        {/* Liens desktop */}
        <div className="hidden md:flex space-x-6">
          <a href="#home" className="text-white hover:text-blue-500 transition">Home</a>
          <a href="#about" className="text-white hover:text-blue-500 transition">About</a>
          <a href="#skills" className="text-white hover:text-blue-500 transition">Skills</a>
          <a href="#projects" className="text-white hover:text-blue-500 transition">Projects</a>
          <a href="#contact" className="text-white hover:text-blue-500 transition">Contact</a>
        </div>

        {/* Bouton burger ou X */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Menu mobile */}
      {isOpen && (
        <div
          ref={menuRef}
          className="md:hidden flex flex-col items-center bg-gray-800 mx-6 px-4 py-4 space-y-2 animate-fade-in-down"
        >
          <a href="#home" className="block text-white" onClick={() => setIsOpen(false)}>Home</a>
          <a href="#about" className="block text-white" onClick={() => setIsOpen(false)}>About</a>
          <a href="#skills" className="text-white hover:text-blue-500 transition">Skills</a>
          <a href="#projects" className="block text-white" onClick={() => setIsOpen(false)}>Projects</a>
          <a href="#contact" className="block text-white" onClick={() => setIsOpen(false)}>Contact</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;






// import { FaBars } from "react-icons/fa";
// import { useState } from "react";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <nav className="fixed top-0 w-4/5  z-50 bg-gray-900 shadow-md max-w-full">
//       <div className="flex items-center justify-between px-4 py-3  ">
//         <h1 className="text-white font-bold text-xl">BONANE</h1>

//         <div className="hidden md:flex space-x-6">
//           <a href="#home" className="text-white hover:text-blue-500 transition">Home</a>
//           <a href="#about" className="text-white hover:text-blue-500 transition">About</a>
//           <a href="#projects" className="text-white hover:text-blue-500 transition">Projects</a>
//           <a href="#contact" className="text-white hover:text-blue-500 transition">Contact</a>
//         </div>

//         <button
//           className="md:hidden text-white"
//           onClick={() => setIsOpen(!isOpen)}
//         >
//           <FaBars />
//         </button>
//       </div>

//       {/* Menu mobile */}
//       {isOpen && (
//         <div className="md:hidden bg-gray-800 px-4 pb-4">
//           <a href="#home" className="block text-white py-1">Home</a>
//           <a href="#about" className="block text-white py-1">About</a>
//           <a href="#projects" className="block text-white py-1">Projects</a>
//           <a href="#contact" className="block text-white py-1">Contact</a>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;
