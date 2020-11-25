import React from 'react';
import { GrGithub } from 'react-icons/gr';

const Projects = () => {
    return (
        <div>
            <div>
                <h1 align='center'><b>Projects:</b></h1>
            </div>
            <div className="projects">
                <a href="https://github.com/matthewlazewski/friendhub-frontend"><GrGithub /> </a><br></br>
                <a href="https://github.com/matthewlazewski/on-par-project"><GrGithub /> </a><br></br>
                <a href="https://github.com/matthewlazewski/my_workout_finder"><GrGithub /> </a>
            </div>
        </div>
    )
};

export default Projects;




