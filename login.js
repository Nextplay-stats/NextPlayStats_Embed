const msalConfig = {
  auth: {
    clientId: "YOUR_CLIENT_ID",
    authority: "https://login.microsoftonline.com/YOUR_TENANT_ID",
    redirectUri: "https://yourusername.github.io/repo-name",
  }
};

const msalInstance = new msal.PublicClientApplication(msalConfig);

function signIn() {
  msalInstance.loginPopup({ scopes: ["user.read"] })
    .then(response => {
      console.log("Login successful", response);
      // Check user level here
    })
    .catch(error => console.error(error));
}
