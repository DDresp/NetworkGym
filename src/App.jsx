import Auth from "./components/Auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase-config.js";
import AllPage from "./components/DataDisplay/AllPage";


function App() {
  const [user] = useAuthState(auth);

  if (user) {
    return (
      <div>
        <AllPage />
      </div>
    );
  } else {
    return (
      <div>
        <Auth />
      </div>
    );
  }
}

export default App;
