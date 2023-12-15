"use client"
import { useState } from 'react';
import Link from 'next/link';
import LoginModal from './LoginModal'; 
import RegisterModal from './RegisterModal'; 

const Navbar: React.FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);

  return (
    <>
      <nav className="bg-gray-800 text-white p-4">
        <div className="flex items-center justify-between">
          {/* Logo / Home Link */}
          <Link href="/" className="text-xl font-bold">
            MiApp
          </Link>

          {/* Menu Items */}
          <div>
            {/* Trigger Register Modal */}
            <button onClick={() => setIsRegisterModalOpen(true)} className="px-4">
              Register
            </button>

            {/* Trigger Login Modal */}
            <button onClick={() => setIsLoginModalOpen(true)} className="px-4">
              Login
            </button>

            {/* Dropdown Trigger */}
            <button onClick={() => setIsDropdownOpen(!isDropdownOpen)} className="px-4">
              Menú
            </button>

            {/* Dropdown Menu */}
            {isDropdownOpen && (
              <div className="absolute mt-4 bg-white text-gray-800 shadow-lg rounded">
              
                <Link href="/cajas" className="block px-4 py-2 hover:bg-gray-200">Cajas</Link>

                <Link href="/Productos" className="block px-4 py-2 hover:bg-gray-200">Productos</Link>
              <Link href="/AddProducts" className="block px-4 py-2 hover:bg-gray-200">Agregar Producto</Link>
              <Link href="/edicion-masiva" className="block px-4 py-2 hover:bg-gray-200">Edición Masiva</Link>
              <Link href="/body" className="block px-4 py-2 hover:bg-gray-200">Pantalla de Cobro</Link>
              </div>
            )}
          </div>
        </div>
      </nav>

      {/* Login and Register Modals */}
      <LoginModal isOpen={isLoginModalOpen} onClose={() => setIsLoginModalOpen(false)} />
      <RegisterModal isOpen={isRegisterModalOpen} onClose={() => setIsRegisterModalOpen(false)} />
    </>
  );
};

export default Navbar;