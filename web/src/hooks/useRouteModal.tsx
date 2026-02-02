import { useEffect } from "react";
import {  useNavigate } from "react-router-dom";
import type { Location } from "react-router-dom";
import type { LocationState } from "../types/modal";

export function useRouteModal(isVisible: boolean, location: Location<LocationState>, background?: Location) {
    const navigate = useNavigate();

    useEffect(()=> {
     const isModalRoute = location.pathname === '/nova-senha';
     const lastPath = sessionStorage.getItem('modal_background');

    if (isModalRoute && !isVisible && lastPath) {
      sessionStorage.removeItem('modal_background');
      navigate(lastPath, {replace: true});

    }
  }, [location, background, navigate, isVisible])


  return {location, background}
}