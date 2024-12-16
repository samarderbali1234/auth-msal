import { PublicClientApplication } from "@azure/msal-browser";
import { msalConfig } from "../../config/authConfig";

export const setUser = (user) => ({
    type: "SET_USER",
    payload: user,
  });
  export const logoutUser = () => {
    return (dispatch) => {
      dispatch({ type: "LOGOUT_USER" }); 
      window.location.href = "/"; 
    };
  };
  
/*const msalInstance = new PublicClientApplication(msalConfig);
export const logoutUser = () => {
  return async (dispatch) => {
    try {
      await msalInstance.logoutPopup(); // Déconnexion avec MSAL
      dispatch({ type: "LOGOUT_USER" }); // Réinitialiser Redux
      window.location.href = "/"; // Rediriger vers la page d'accueil
    } catch (error) {
      console.error("Erreur lors du logout :", error);
    }
  };
};*/
