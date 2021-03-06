// import React from "react";
// import { BrowserRouter as Router, Link, Route } from "react-router-dom";
// import Home from "./pages/Home";
// import Admin from "./pages/Admin";

// function App(props) {
//   return (
//     <Router>
//       <div>
//         <ul>
//           <li>
//             <Link to="/">Home Page</Link>
//           </li>
//           <li>
//             <Link to="/admin">Admin Page</Link>
//           </li>
//         </ul>
//         <Route exact path="/" component={Home} />
//         <Route path="/admin" component={Admin} />
//       </div>
//     </Router>
//   );
// }

// export default App;

// https://medium.com/better-programming/building-basic-react-authentication-e20a574d5e71

import React, { useState } from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import { AuthContext } from "./context/auth";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import "./styles.css";

function App(props) {
  const existingTokens = JSON.parse(localStorage.getItem("tokens"));
  const [authTokens, setAuthTokens] = useState(existingTokens);

  const setTokens = data => {
    localStorage.setItem("tokens", JSON.stringify(data));
    setAuthTokens(data);
  };

  return (
    <AuthContext.Provider value={{ authTokens, setAuthTokens: setTokens }}>
      {/* <AuthContext.Provider value={false}> */}
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Home Page</Link>
            </li>
            <li>
              <Link to="/admin">Admin Page</Link>
            </li>
          </ul>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <PrivateRoute path="/admin" component={Admin} />
        </div>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
