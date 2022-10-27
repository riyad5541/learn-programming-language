import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


const Course = () => {
    const course = useLoaderData();
    const {title,details,image_url} = course
    return (
        <Card>
            <Card.Header><Button variant="primary">Go somewhere</Button></Card.Header>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Title><Card.Img style={{height:'250px'}} variant="top" src={image_url} /></Card.Title>
                <Card.Text>
                    {details}
                </Card.Text>
                <Card.Header><Link to='/checkout'><Button variant="primary">Get premium access</Button></Link></Card.Header>
            </Card.Body>
        </Card>
    );
};

export default Course;