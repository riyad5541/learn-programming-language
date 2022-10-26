import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Course from "../../Pages/Course/Course";
import CourseCategories from "../../Pages/CourseCategories/CourseCategories";
import Home from "../../Pages/Home/Home";

export const routes = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/categories/:id',
                element:<CourseCategories></CourseCategories>
            },
            {
                path:'/course/:id',
                element:<Course></Course>
            }
        ]
    }
])