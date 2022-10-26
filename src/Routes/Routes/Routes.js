import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Course from "../../Pages/Course/Course";
import CourseCategories from "../../Pages/CourseCategories/CourseCategories";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login/Login";
import Register from "../../Pages/Login/Register/Register";

export const routes = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
                loader:() =>fetch('http://localhost:5000/course-info')
            },
            {
                path:'/categories/:id',
                element:<CourseCategories></CourseCategories>,
                loader:({params}) => fetch(`http://localhost:5000/category/${params.id}`)
            },
            {
                path:'/course/:id',
                element:<Course></Course>,
                loader:({params}) => fetch(`http://localhost:5000/course-info/${params.id}`)
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            }
        ]
    }
])