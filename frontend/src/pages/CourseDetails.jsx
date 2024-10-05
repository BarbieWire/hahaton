import React from 'react';
import { useParams } from 'react-router-dom';
import Breadcrumbs from '../components/explore/Breadcrumbs';

const CourseDetails = () => {
    const { courseId } = useParams();
    const courses = {
        1: { title: 'React Basics', description: 'Learn the basics of React.' },
        2: { title: 'Advanced JavaScript', description: 'Deep dive into JS features.' },
        3: { title: 'Node.js Fundamentals', description: 'Backend development with Node.js.' },
    };

    const course = courses[courseId];
    if (!course) {
        return <h1>Course Not Found</h1>;
    }

    return (
        <div className="container mx-auto my-10 p-6 bg-white shadow-md rounded-lg">
            <Breadcrumbs />
            <h1 className="text-4xl font-bold mb-4">{course.title}</h1>
            <p className="text-lg">{course.description}</p>
            
        </div>
    );
};

export default CourseDetails;
