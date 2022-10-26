import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const CourseCard = ({ course }) => {
    const {title,_id,image_url,details} = course
    console.log(course)
    return (
        <Card className="mb-5">
            <Card.Header>{title}</Card.Header>
            <Card.Body>
                <Card.Title></Card.Title>
                <Card.Title><Card.Img style={{height:'250px'}} variant="top" src={image_url} /></Card.Title>
                <Card.Text>
                    {
                    details.length >100?
                        <p>{details.slice(0, 100) + '...'} <Link to={`/course/${_id}`}>Read more</Link></p>
                        :
                        <p>{details}</p>
                    }
                </Card.Text>
            </Card.Body>
        </Card>
    );
};

export default CourseCard;