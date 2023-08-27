import { useState } from "react";
import { AuthProvider } from "./contexts/AuthContext";
import Dashboard from "./components/Dashboard";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <AuthProvider>
        <Dashboard></Dashboard>
      </AuthProvider>
    </>
  );
}

export default App;
