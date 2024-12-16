
import React from "react";
import { useMsal } from "@azure/msal-react";
import { loginRequest } from "../config/authConfig";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser } from "../redux/actions/userActions";
const Login = () => {
  const { instance } = useMsal();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const fetchUserPhoto = async (accessToken) => {
  try {
    const response = await fetch("https://graph.microsoft.com/v1.0/me/photo/$value", {
      headers: {
        Authorization: `Bearer ${accessToken}`, 
      },
    });

    if (response.ok) {
      const blob = await response.blob();
      return URL.createObjectURL(blob); 
    } else if (response.status === 404) {
      console.warn("L'utilisateur n'a pas de photo de profil.");
      return null; 
    } else {
      throw new Error(`Erreur lors de la récupération de la photo: ${response.statusText}`);
    }
  } catch (error) {
    console.error("Erreur lors de la récupération de la photo :", error);
    return null;
  }
};


const handleLogin = async () => {
  try {
    const loginResponse = await instance.loginPopup({
      prompt: "login", 
      scopes: loginRequest.scopes,
    });

    const accessToken = loginResponse.accessToken;
    const user = loginResponse.account;
    console.log("Données de l'utilisateur :",user);
    const photoUrl = await fetchUserPhoto(accessToken);
    const userData = { ...user, imageUrl: photoUrl };
    dispatch(setUser(userData));
    console.log("connexion réussite");
    navigate("/dashboard"); 
  } catch (error) {
    console.error("Erreur de connexion:", error);
  }
};


  return (
    <div style={styles.container}>
         <img
        src="https://cdn.prod.website-files.com/671b47b1adc6b92a369fd8e7/671b69b5956d9009e116f7a6_logo-heedify-nav.avif"
        alt="Heedify Logo"
        style={styles.image}
      />
      <h2 style={styles.subtitle}>Heedify Real Time Dashboard</h2>
      <p style={styles.paragraph}>Sign in with Microsoft</p>
      <button onClick={handleLogin} style={styles.button}>
        Login
      </button>
      <a href="https://wallboard.heedify.io" style={styles.link}>
        Or request your Free Trial
      </a>
    </div>
  );
};

const styles = {
  container: {
    textAlign: "center",
    margin: "30px ",
    paddingTop:"20px",
    backgroundColor:"#f0f0f0"
  },
  image: {
    display: "block",  
    margin: "0 auto",  
    width: "350px",     
    height: "auto",     
  },
  subtitle: {
    fontSize: "24px",
    color:"#242424"
  },
  button: {
    padding: "10px 20px",
    fontSize: "16px",
    cursor: "pointer",
    backgroundColor:"#ffffff",
    border: "2px solid #d1d1d1",
    color:"#3a3a3a"
  },
  link: {
    color: "blue",
    textDecoration: "none",
    display: "block",
    marginTop: "10px",
    paddingBottom:"20px"
  },
  paragraph:{
    color:"#797979Ò"

  },
};

export default Login;
