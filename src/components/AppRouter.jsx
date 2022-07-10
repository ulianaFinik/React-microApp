import React, {useContext} from 'react';
import {Navigate, Route, Routes, Switch} from "react-router-dom";
import {privateRoutes, publicRoutes} from "../router";
import {AuthContext} from "../context";
import Loader from "./UI/Loader/Loader";
import About from "../pages/About";
import Posts from "../pages/Posts";
import Error from "../pages/Error";
import PostPage from "../pages/PostPage";



const AppRouter = () => {
    return (
        <Routes>
            <Route path="/about" element={<About />} /> 
            <Route path="/posts" element={<Posts />} />
            <Route path="/posts/:id" element={<PostPage />} />
            <Route path="*" element={<Error />} />,
        </Routes>
    )
};


// return (
//     isAuth
//     ?
//     <Routes>
//     {privateRoutes.map(route =>
//         <Route
//             component={route.component}
//             path={route.path}
//             exact={route.exact}
//         />
//     )}
//     <Route path='/' element={<Navigate to='/posts' replace />} />
//     </Routes>
//     :
//     <Routes>
//     {publicRoutes.map(route =>
//         <Route
//             component={route.component}
//             path={route.path}
//             exact={route.exact}
//         />
//     )}
//     <Route path='/' element={<Navigate to='/Login' replace />} />
//     </Routes>
// );

//<Route path="/about" element={<About />} /> 
//<Route path="/posts" element={<Posts />} />
//<Route path="/posts/:id" element={<PostPage />} />
//<Route path="*" element={<Error />} />,

export default AppRouter;