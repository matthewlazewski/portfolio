import React from 'react';
import pdf from '../images/certificate.pdf'



const Certification = () => {
    return (
        <div>
            <div class="info">
                <h1><b>About Me:</b></h1>
                <br></br>
                <p>My name is Matt Lazewski. I am a software engineer living in Oklahoma City. I have recently completed the Full Stack Software Engineering Bootcamp at Flatiron School. My knowledge includes JavaScript, React, Redux, HTML5, CSS, Ruby, SQL, PHP, and C#. I enjoy a new challenge and am constantly striving to learn more.</p>
            </div>
            <div class="certficate">
                <h1 align='center'><b>Education:</b></h1>
                <iframe align='center' width='500' height='300' src={pdf} title='Certificate' />
            </div>
        </div>
    )
};

export default Certification;
