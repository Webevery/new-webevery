"use client";
import { useState, createContext } from "react";

export const SiteContext = createContext();

export const SiteProvider = ({ children }) => {
  const [burgerMenu, setBurgermenu] = useState(false);
  // console.log(burgerMenu);
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <SiteContext.Provider
      value={{
        burgerMenu,
        setBurgermenu,
        isModalOpen,
        openModal,
        closeModal,
      }}
    >
      {children}
    </SiteContext.Provider>
  );
};
