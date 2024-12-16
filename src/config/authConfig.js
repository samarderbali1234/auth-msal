export const msalConfig = {
  auth: {
      clientId: 'a97bab63-6f5d-4bd8-9508-141030130263',
      authority: "https://login.microsoftonline.com/common",
      redirectUri: "http://localhost:3000/"
  },
  cache: {
      cacheLocation: 'localStorage',
      storeAuthStateInCookie: false,
  }
};

  
  export const loginRequest = {
    scopes: ["User.Read"], 
  };