import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const LeftSideNav = () => {
    const [categories,setCategories] = useState([]);

    useEffect(()=>{
        fetch('https://programming-languages-server.vercel.app/course-categories')
        .then(res => res.json())
        .then(data =>setCategories(data))
    },[])
    return (
        <div>
            <h2>All Course List :{categories.length}</h2>
            <div>
                {
                    categories.map(category => <p key={category.id}>
                        <Link to={`/categories/${category.id}`}>{category.name}</Link>
                    </p>)
                }
            </div>
        </div>
    );
};

export default LeftSideNav;