import { createContext, useState } from "react";

export const SidebarContext = createContext<any>(null);

export const AppProvider = ({ children }: any) => {
  const [isOpen, setIsOpen] = useState();

  return (
    <SidebarContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </SidebarContext.Provider>
  );
};
