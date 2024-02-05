"use client";
import React, { useState, createContext } from "react";

export const SiteContext = createContext();

export const SiteProvider = ({ children }) => {
  const [state, setState] = useState(false);

  return (
    <SiteContext.Provider value={{ state, useState }}>
      {children}
    </SiteContext.Provider>
  );
};
