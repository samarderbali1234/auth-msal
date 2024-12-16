import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { logoutUser } from "../redux/actions/userActions";

const UserMenu = ({ user }) => {
  const [isOpen, setIsOpen] = useState(false); 
  const dispatch = useDispatch();

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };
  const handleSignOut = () => {
    dispatch(logoutUser()); 
  };

  return (
    <div style={styles.container}>
      <div style={styles.userInfo} onClick={toggleMenu}>
        <img
          src={user?.imageUrl}
          alt="User Profile"
          style={styles.userImage}
        />
        <span style={styles.userName}>{user?.name}</span>
      </div>
      {isOpen && (
        <div style={styles.menu}>
          <div style={styles.menuHeader}>
            <img
              src={user?.imageUrl }
              alt="User Profile"
              style={styles.menuImage}
            />
            <div>
              <p style={styles.menuName}>{user?.name}</p>
              <p style={styles.menuEmail}>{user?.username}</p>
            </div>
          </div>
          <a style={styles.logoutButton} onClick={handleSignOut}>
            Sign Out
          </a>
        </div>
      )}
    </div>
  );
};

const styles = {
  container: { 
    position: "relative",
    cursor: "pointer",
    borderRadius:"8px",
    display: "flex",
   
    padding: "10px"
  },
  userInfo: { display: "flex", alignItems: "center" },
  userImage:{
    width: "30px", 
    height: "30px",
    borderRadius: "50%", 
    marginRight: "10px", 
  },
  userName: {
    marginLeft: "10px",
    fontSize: "13px",
    fontWeight: "500",
    color: "rgb(37, 36, 35)",
  },
  menu: {
    position: "absolute",
    top: "45px",
    right: 0,
    width: "200px",
    height:"100px",
    backgroundColor: "#fff",
    boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
    borderRadius: "8px",
    padding: "10px",
    zIndex: 100,
  },
  menuHeader: { display: "flex", alignItems: "center", marginBottom: "10px" },
  menuImage: {width: "50px", height: "50px", borderRadius: "50%", },
  menuName: { 
    marginLeft: "10px",
    fontSize: "13px",
    fontWeight: "500",
    color: "rgb(37, 36, 35)",
  },
  menuEmail: { 
    fontSize: "12px", 
    color: "#666",
    marginLeft:"10px", 
    marginTop:"-10px",
    },
  logoutButton: {
    padding: "8px",
    color: "rgb(0, 120, 212)",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    fontSize: "bold",
  },
};

export default UserMenu;
