import React from 'react';
import { GrGithub } from 'react-icons/gr';

const Projects = () => {
    return (
        <div>
            <div>
                <h1 align='center'><b>Projects:</b></h1>
            </div>
            <div className="projects">
                <iframe align='center' width='500' height='300' src='https://www.youtube.com/embed/VsTMGpddjSU'  title='Friendhub' /><br></br>
                <a href="https://github.com/matthewlazewski/friendhub-frontend"><GrGithub /> </a>
                <h4>Built With: </h4>
                <ul>
                    <li>Javascript</li>
                    <li>HTML/CSS</li>
                    <li>Backend: Ruby/Rails</li>
                </ul>
                <br></br>
                <iframe align='center' width='500' height='300' src='https://www.youtube.com/embed/TVdrCuZKz6c' title='OnPar' /><br></br>
                <a href="https://github.com/matthewlazewski/on-par-project"><GrGithub /> </a>
                <ul>
                    <li>HTML/CSS</li>
                    <li>Javascript</li>
                    <li>Ruby On Rails</li>
                </ul>
                <br></br>
                <iframe align='center' width='500' height='300' src='https://www.youtube.com/embed/YE5EvmmH2OU' title='MyWorkoutFinder' /><br></br>
                <a href="https://github.com/matthewlazewski/my_workout_finder"><GrGithub /> </a>
                <ul>
                    <li>Ruby on Rails</li>
                    <li>Active Record</li>
                    <li>HTML/CSS</li>
                </ul>
            </div>
        </div>
    )
};

export default Projects;




