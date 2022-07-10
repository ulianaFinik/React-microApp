import About from "../pages/About";
import Posts from "../pages/Posts";
import PostPage from "../pages/PostPage";
import Login from "../pages/Login";


export const privateRoutes = [ //экспортируем константу, проинициализированную массивом
    {path: '/about', element: About, exact: true}, //это будут объекты, содержащие поля - path будет хранить маршрут
    {path: '/posts', element: Posts, exact: true},
    {path: '/posts/:id', element: PostPage, exact: true},
]

export const publicRoutes = [ //экспортируем константу, проинициализированную массивом
    {path: '/Login', element: Login, exact: true},
]