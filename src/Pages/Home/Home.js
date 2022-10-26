import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseCard from '../Shared/CourseCard/CourseCard';

const Home = () => {
    const allCourse = useLoaderData();
    return (
        <div>
            this is home:{allCourse.length}
            {
                allCourse.map(course =><CourseCard 
                key={course._id}
                course={course}
                ></CourseCard>)
            }
        </div>
    );
};

export default Home;