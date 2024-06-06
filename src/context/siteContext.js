"use client";
import { useState, createContext } from "react";

export const SiteContext = createContext();

export const SiteProvider = ({ children }) => {
  const [burgerMenu, setBurgermenu] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);
  const [comment, setComment] = useState("");
  const [blogFilterShown, setBlogFilterShown] = useState(false);

  const [blogSorterShown, setBlogSorterShown] = useState(false);

  const [searchTerm, setSearchTerm] = useState("");
  const [searchBlog, setSearchBlog] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setComment("");
    setModalOpen(false);
  };

  return (
    <SiteContext.Provider
      value={{
        burgerMenu,
        setBurgermenu,
        isClicked,
        setIsClicked,
        comment,
        setComment,
        isModalOpen,
        openModal,
        closeModal,
        blogFilterShown,
        setBlogFilterShown,
        blogSorterShown,
        setBlogSorterShown,
        searchTerm,
        setSearchTerm,
        searchBlog,
        setSearchBlog,
      }}
    >
      {children}
    </SiteContext.Provider>
  );
};
