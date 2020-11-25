import React from 'react';
import pdf from '../images/certificate.pdf'



const Certification = () => {
    return (
        <div>
            <iframe align='center' width='500' height='300' src={pdf} title='Certificate' />
        </div>
    )
};

export default Certification;
