import React from "react";
import './styles/App.css';
import {BrowserRouter} from 'react-router-dom';
import Navbar from "./components/UI/navbar/Navbar";
import AppRouter from "./components/AppRouter";
import { AuthContext } from "./context";
import { useState } from 'react';



function App() {
  const [isAuth, setIsAuth] = useState(false);


    return (
      <AuthContext.Provider value= {{
          isAuth,
          setIsAuth
      }}>
        <BrowserRouter>
          <Navbar/>
          <AppRouter/>
        </BrowserRouter> 
      </AuthContext.Provider>
    );
};

{/* 


            {routes.map(route =>
                <Route
                  component={route.component}
                  path={route.path}
                  exact={route.exact}
                />
            )}

*/}
export default App;
