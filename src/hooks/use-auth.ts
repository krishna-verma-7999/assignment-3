import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { authenticationAction } from "../store/authentication-slice";

export const useAuth = () => {
  const dispatch = useDispatch();
  const authenticated = useSelector(
    (state: { isAuthenticated: boolean }) => state.isAuthenticated
  );

  useEffect(() => {
    if (localStorage.getItem("authenticated")) {
      dispatch(authenticationAction.loggedInHandler());
    }
  }, []);

  const logoutHandler = () => {
    localStorage.removeItem("authenticated");
    dispatch(authenticationAction.loggedOutHandler());
  };

  return { authenticated, logoutHandler };
};
