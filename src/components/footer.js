import React, { Component } from 'react';
import { MdEmail } from 'react-icons/md';
import { GrLinkedin } from 'react-icons/gr';
import { GrGithub } from 'react-icons/gr';




export default class Footer extends Component {
    render() {
        return (
            <div className="footer"> 
                 <div className= "icons">
                    <ul><a href="mailto:matthew.lazewski@gmail.com"><MdEmail /></a></ul> 
                    <ul><a href="https://www.linkedin.com/in/matthewlazewski/"><GrLinkedin /></a></ul>
                    <ul><a href="https://github.com/matthewlazewski"><GrGithub /> </a></ul>
                </div>
            </div>
        )
    }
}

