import React from 'react';
import pdf from '../images/certificate.pdf'



const Certification = () => {
    return (
        <div>
            <div class="info">
                <p>My name is Matt Lazewski. I am a software engineer living in Oklahoma City. I have recently completed the Full Stack Software Engineering Bootcamp at Flatiron School. My knowledge includes JavaScript, React, Redux, HTML5, CSS, Ruby and SQL, but I am learning more every day.</p>
            </div>
            <div class="certficate">
                <h1 align='center'><b>Education:</b></h1>
                <iframe align='center' width='500' height='300' src={pdf} title='Certificate' />
            </div>
        </div>
    )
};

export default Certification;
