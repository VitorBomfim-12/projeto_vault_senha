import { createContext, useContext, useState, type Dispatch, type ReactNode, type SetStateAction } from "react";
import { useRouteModal } from "../hooks/useRouteModal";
import type { Location } from "react-router-dom";
import type { LocationState } from "../types/modal";

interface ContextValues {
  background?: Location;
  isSidebarOpen: boolean;
  setIsSidebarOpen: Dispatch<SetStateAction<boolean>>;
  isNewPasswordVisible: boolean;
  setIsNewPasswordVisible: Dispatch<SetStateAction<boolean>>;
  location: Location<LocationState>;
}

const NavigationContext = createContext<ContextValues | null>(null);

function NavigationProvider({children, location, background}: {children: ReactNode, location: Location<LocationState>, background?: Location}) {
    const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(true);
    const [isNewPasswordVisible, setIsNewPasswordVisible] = useState<boolean>(false);

    useRouteModal(isNewPasswordVisible, location, background);

    return <NavigationContext.Provider value={{
        background, isSidebarOpen, setIsSidebarOpen, isNewPasswordVisible, setIsNewPasswordVisible, location
    }}>{children}</NavigationContext.Provider>

}

function useAppNavigation() {
    const value = useContext(NavigationContext);
    if (value === null) throw new Error("NavigationContext was used outside the NavigationProvider");
    return value;
}

/* eslint-disable react-refresh/only-export-components  */
export {NavigationProvider, useAppNavigation}