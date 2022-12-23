import { useEffect } from "react";
import Hermes from "./components/Hermes";
import { gapi } from "gapi-script";

const CLIENT_ID = import.meta.env.VITE_CLIENT_ID;
const API_KEY = import.meta.env.VITE_API_KEY;
const SCOPES = "https://www.googleapis.com/auth/documents";

function App() {
  useEffect(() => {
    function start() {
      gapi.client.init({
        apiKey: API_KEY,
        clientId: CLIENT_ID,
        scope: SCOPES,
      });
    }

    gapi.load("client:auth2", start);
  });
  return (
    <div className="App">
      <Hermes />
    </div>
  );
}

export default App;
