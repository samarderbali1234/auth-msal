import React, { useEffect, useState } from "react";
import { useMsal } from "@azure/msal-react";

const Profile = () => {
  const { instance, accounts } = useMsal();
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    if (accounts.length > 0) {
      // Récupère les informations utilisateur
      instance
        .acquireTokenSilent({
          scopes: ["User.Read"],
          account: accounts[0],
        })
        .then((response) => {
          fetch("https://graph.microsoft.com/v1.0/me", {
            headers: {
              Authorization: `Bearer ${response.accessToken}`,
            },
          })
            .then((res) => res.json())
            .then((data) => setUserInfo(data));
        });
    }
  }, [accounts, instance]);

  return (
    <div>
      {userInfo ? (
        <div>
          <h2>Bienvenue, {userInfo.displayName}</h2>
          <p>Email : {userInfo.mail || userInfo.userPrincipalName}</p>
        </div>
      ) : (
        <p>Chargement des informations...</p>
      )}
    </div>
  );
};

export default Profile;
