import React from 'react';
import { useParams } from 'react-router-dom';
import { Rating } from "flowbite-react";

import Breadcrumbs from '../components/explore/Breadcrumbs';
import { AboutCourse } from '../components/faq/Accordion';

const CourseDetails = () => {
    const { courseId } = useParams();

    // Mock data for the courses, including YouTube video ID and additional details
    const courses = {
        1: {
            title: 'React Basics',
            description: 'Learn the basics of React.',
            videoId: 'w7ejDZ8SWv8',  // Example YouTube video ID for React basics
            details: {
                duration: '3 hours',
                prerequisites: 'Basic JavaScript knowledge',
                level: 'Beginner',
                instructor: 'John Doe',
            },
            curriculum: [
                "Introduction to React",
                "Understanding JSX",
                "Components and Props",
                "State and Lifecycle",
                "Handling Events",
              ],
              outcomes: [
                "Build dynamic web applications using React.",
                "Understand component-based architecture.",
                "Manage state effectively using hooks."
            ]
        },
        2: {
            title: 'Advanced JavaScript',
            description: 'Deep dive into JavaScript features.',
            videoId: 'Oe421EPjeBE',  // Example YouTube video ID for JavaScript
            details: {
                duration: '5 hours',
                prerequisites: 'Intermediate JavaScript',
                level: 'Advanced',
                instructor: 'Jane Smith',
            }
        },
        3: {
            title: 'Node.js Fundamentals',
            description: 'Backend development with Node.js.',
            videoId: 'TlB_eWDSMt4',  // Example YouTube video ID for Node.js
            details: {
                duration: '4 hours',
                prerequisites: 'Basic JavaScript and server-side knowledge',
                level: 'Intermediate',
                instructor: 'Mike Johnson',
            }
        }
    };     

    const course = courses[courseId];

    if (!course) {
        return <h1>Course Not Found</h1>;
    }

    return (
        <div className="container mx-auto my-10 p-6 bg-white shadow-md rounded-lg  flex flex-col gap-2">
            {/* Breadcrumbs */}

            <div className='flex justify-between flex-wrap'>
                <Breadcrumbs />
                <Rating>
                    <Rating.Star />
                    <p className="ml-2 text-sm font-bold text-gray-900 dark:text-white">4.95</p>
                    <span className="mx-1.5 h-1 w-1 rounded-full bg-gray-500 dark:bg-gray-400" />
                    <a href="#" className="text-sm font-medium text-gray-900 underline hover:no-underline dark:text-white">
                        73 reviews
                    </a>
                </Rating>
            </div>

            {/* Course Title and Description */}
            <h1 className="text-4xl font-bold mb-4">{course.title}</h1>

            {/* YouTube Video */}
            <div className="mb-6">
                <h2 className="text-2xl font-bold mb-4">Course Video</h2>
                <iframe
                    width="100%"
                    height="500px"
                    src={`https://www.youtube.com/embed/${course.videoId}`}
                    title={course.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </div>

            <div className="mb-6">
                <h2 className="text-2xl font-bold mb-4">Description</h2>
                <p className="text-lg">{course.description}</p>
            </div>

            {/* Course Details Section */}
            <div className="mb-6">
                <h2 className="text-2xl font-bold mb-4">Course Details</h2>
                <div className="flex gap-5">
                    {/* Each detail block with equal space and border */}
                    <div className="flex-1 bg-black flex flex-col p-5 border border-gray-300 rounded-lg">
                        <span className="text-gray-300">Duration</span>
                        <span className="font-bold text-white">{course.details.duration}</span>
                    </div>
                    <div className="flex-1 bg-black flex flex-col p-5 border border-gray-300 rounded-lg">
                        <span className="text-gray-300">Prerequisites</span>
                        <span className="font-bold text-white">{course.details.prerequisites}</span>
                    </div>
                    <div className="flex-1 bg-black flex flex-col p-5 border border-gray-300 rounded-lg">
                        <span className="text-gray-300">Level</span>
                        <span className="font-bold text-white">{course.details.level}</span>
                    </div>
                    <div className="flex-1 bg-black flex flex-col p-5 border border-gray-300 rounded-lg">
                        <span className="text-gray-300">Creator</span>
                        <span className="font-bold text-white">{course.details.instructor}</span>
                    </div>
                </div>
            </div>

            <div className="mb-6">
                <h2 className="text-2xl font-bold mb-4">Questions And Answers</h2>
                <AboutCourse course={course} />
            </div>
        </div>
    );
};

export default CourseDetails;
