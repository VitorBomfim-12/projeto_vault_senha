import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import type { Location } from "react-router-dom";

interface LocationState {
  backgroundLocation?: Location;
}

export function useRouteModal(isVisible: boolean) {
    const location = useLocation() as Location<LocationState>;
    const navigate = useNavigate();
    const background = location.state?.backgroundLocation;


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