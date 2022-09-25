import axios from "./api";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import ProtectedRouter from "./components/routers/ProtectedRouter";
import PublicOnlyRouter from "./components/routers/PublicOnlyRouter";
import UserContext from "./contexts/UserContext";
import Home from "./pages/Home";
import List from "./pages/List";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Register from "./pages/Register";
import Upload from "./pages/Upload";

function App() {
  const [currentUser, setCurrentUser] = useState<any>(undefined);

  useEffect(() => {
    const authToken = localStorage.getItem("jwt");
    const userId = localStorage.getItem("user-id");

    if (authToken && userId) {
      /* TODO: replace with actual endpoint */
      axios
        .get(`http://localhost:8080/users/${userId}`)
        .then((response) => {
          setCurrentUser(response.data);
        })
        .catch(() => {
          setCurrentUser(null);
          //localStorage.removeItem("jwt");
          //localStorage.removeItem("user-id");
        });
    } else {
      setCurrentUser(null);
    }
  }, []);

  return (
    <UserContext.Provider value={[currentUser, setCurrentUser]}>
      <div>
        <Header />
        <Routes>
          <Route element={<ProtectedRouter redirectTo="login" />}>
            <Route path="upload" element={<Upload />} />
            <Route path="list" element={<List />} />
            <Route path="profile" element={<Profile />} />
          </Route>
          <Route element={<PublicOnlyRouter redirectTo="/" />}>
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
          </Route>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </UserContext.Provider>
  );
}

export default App;
