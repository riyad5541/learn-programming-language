import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Blog from "../../Pages/Blog/Blog";
import CheckOut from "../../Pages/CheckOut/CheckOut";
import Course from "../../Pages/Course/Course";
import CourseCategories from "../../Pages/CourseCategories/CourseCategories";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login/Login";

import Register from "../../Pages/Login/Register/Register";
import PrivateRoute from "../PrivateRoute";

export const routes = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
                loader:() =>fetch('https://programming-languages-server.vercel.app/course-info')
            },
            {
                path:'/categories/:id',
                element:<PrivateRoute><CourseCategories></CourseCategories></PrivateRoute>,
                loader:({params}) => fetch(`https://programming-languages-server.vercel.app/category/${params.id}`)
            },
            {
                path:'/course/:id',
                element:<PrivateRoute><Course></Course></PrivateRoute>,
                loader:({params}) => fetch(`https://programming-languages-server.vercel.app/course-info/${params.id}`)
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path:'/blog',
                element:<Blog></Blog>
            },
            {
                path:'/checkout',
                element:<PrivateRoute><CheckOut></CheckOut></PrivateRoute>
            },
            {
                path:'*',
                element:<div>This route not found: 404</div>
            }
            
        ]
    }
])