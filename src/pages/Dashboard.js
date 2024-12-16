import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import UserMenu from "./userMenu";
const Dashboard = () => {
  const user = useSelector((state) => state.user.user);
  useEffect(() => {
    console.log("Données utilisateur dans Redux :", user);
  }, [user]); 

  return (
   
      <div style={styles.header}>
        
        <img
        src="https://wallboard.heedify.io/static/media/HeedifyLogo_H.63ec7030e651fb5e2d95.png"
        alt="Heedify Logo"
        style={styles.logo}
      />
        <h2 style={styles.title}>Heedify Real Time Dashboard</h2>
        <UserMenu user={user} />
      </div>
      
    
  );
};

const styles = {
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#e8e8e8",
    padding: "1px 20px",
    marginBottom: "10px",
    marginTop: "10px",
    height:"50px"
  },
  logo: {
    width: "145px", 
    height: "44px", 
    objectFit: "contain", 
    cursor: "pointer",
  },
  title: {
    fontSize: "1.5rem ",
    fontWeight: 350,
    color: "rgb(37, 36, 35)",
  },
  
 
};

export default Dashboard;
