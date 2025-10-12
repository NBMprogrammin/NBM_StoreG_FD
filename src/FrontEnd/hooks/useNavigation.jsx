// src/hooks/useNavigation.js
import { useNavigate, useLocation } from "react-router-dom";

export const useNavigation = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const goTo = (path, options = {}) => {
    navigate(path, {
      replace: true,
      ...options,
    });
  };

  const goBack = () => {
    navigate(-1);
  };

  const goForward = () => {
    navigate(1);
  };

  const replace = (path, state = {}) => {
    navigate(path, { replace: true, state });
  };

  const getCurrentPath = () => {
    return location.pathname;
  };

  const getLocationState = () => {
    return location.state;
  };

  return {
    goTo,
    goBack,
    goForward,
    replace,
    getCurrentPath,
    getLocationState,
    currentPath: location.pathname,
  };
};
