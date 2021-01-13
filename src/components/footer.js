import React, { Component } from 'react';
import { MdEmail } from 'react-icons/md';
import { GrLinkedin } from 'react-icons/gr';
import { GrGithub } from 'react-icons/gr';




export default class Footer extends Component {
    render() {
        return (
            <div className="footer"> 
                <ul>
                    <li><a href="mailto:matthew.lazewski@gmail.com"><MdEmail /></a></li>
                    <li><a href="https://www.linkedin.com/in/matthewlazewski/"><GrLinkedin /></a></li>
                    <li><a href="https://github.com/matthewlazewski"><GrGithub /></a></li>
                </ul>
            </div>
        )
    }
}

