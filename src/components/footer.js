import React, { Component } from 'react';
import { MdEmail } from 'react-icons/md';
import { GrLinkedin } from 'react-icons/gr';
import { GrGithub } from 'react-icons/gr';




export default class Footer extends Component {
    render() {
        return (
            <footer> 
                <a href="mailto:matthew.lazewski@gmail.com"><MdEmail /></a>
                <a href="https://www.linkedin.com/in/matthewlazewski/"><GrLinkedin /></a>
                <a href="https://github.com/matthewlazewski"><GrGithub /></a>
            </footer>
        )
    }
}

