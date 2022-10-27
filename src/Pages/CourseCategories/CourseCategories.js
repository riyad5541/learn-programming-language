import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseCard from '../Shared/CourseCard/CourseCard';

const CourseCategories = () => {
const categoryCourses = useLoaderData();

    return (
        <div>
            
            {
                categoryCourses.map(course =><CourseCard
                key={course._id}
                course={course}
                ></CourseCard>)
            }
        </div>
    );
};

export default CourseCategories;<h2>thiis  is category</h2>