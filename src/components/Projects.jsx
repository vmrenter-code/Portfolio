import React from 'react'
import fluentHands from '../assets/fluentHands.png';
import uniHousing from '../assets/uniHousing.png';
import owlet from '../assets/owlet.png';


const Projects = () =>  {
    const projects = [
        {
            id: 1,
            image: fluentHands,
            title: 'Fluent Hands',
            desc: 'Fluent Hands is a full-stack American Sign Language learning app built to make fingerspelling practice interactive instead of static.',
            tech: ['React', 'Vite', 'Node.js', 'MediaPipe', 'Tensorflow'],
            link: 'https://fluent-hands.vercel.app/'
        },
        {
            id: 2,
            image: proj2,
            title: 'Fitness Tracker',
            desc: 'Track workouts and nutrition ',
            tech: ['React Native', 'Firebase']
        },
        {
            id: 3,
            image: uniHousing,
            title: 'Uni Housing',
            desc: 'A housing web application for university students to search nearby housing options with interactive map-based filtering by price, room count, and distance to campus.',
            tech: ['React', 'Node.js', 'MongoDB','leaflet', 'bcrypt'],
            link: 'https://d3ii4vzsvf7f2x.cloudfront.net/'
        },
        {
            id: 4,
            image: owlet,
            title: 'Owlet',
            desc: 'Owlet is a cross-platform mobile and web application for at-home developmental screening of children. Parents create a profile for their child, complete guided video-recorded screening sessions Built mobile-first with React Native/Expo, with a web version deployed for easy demoing without app store installs.',
            tech: ['React', 'Firebase', 'Node.js', 'AWS', 'Prisma', 'PostgreSQL'],
            link: 'https://owlet-gilt.vercel.app/'
        },



    ]

    return(
        <section className = 'py-16 bg-gray-900' id='projects'>
            <div className = 'container mx-auto px-4 max-w-7xl'> 
                <h2 className = 'text-4xl md:text-5xl font-extrabol text-white'>
                    Projects.
                </h2>
                <div className = 'w-28 h-1 bg-primary mx-auto mt-2 rounded-2xl'>
                </div>

                <div className = 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                    {projects.map((project) => {
                        const CardTag = project.link ? 'a' : 'div';
                        const cardProps = project.link
                            ? { href: project.link, target: '_blank', rel: 'noopener noreferrer' }
                            : {};

                        return (
                        <CardTag key = {project.id} {...cardProps}
                        className = 'bg-gray-800 rounded-lg overflow-hidden shadow-sm hover:shadow-lg hover:scale-105 transition-all duration 300'>
                            <img src = {project.image} alt = {project.title}
                            className = 'w-full h-44 object-cover hover:opacity-90 transition-opacity duration-300' />
                            <div className='p-4'>
                                <h3 className = 'text-lg font-semibold text-white group-hover:text-primary transiton-colors'>
                                    {project.title}
                                </h3>
                                <p className = 'text-gray-400 text-sm mt-1'>
                                    {project.desc}
                                </p>
                                <div className = 'flex flex-wrap gap-1.5 mt-3'>
                                    {project.tech.map((tec, idx) => (
                                        <span key = {idx}
                                        className = 'text-xs px-2 py-0.5 bg-gray-700 text-gray-300 rounded hover:bg-primary hover:text-white transition-colors duration-300'>
                                            {tec}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </CardTag>
                        );
                    })}

                </div>

            </div>
        </section>
    )


}


export default Projects