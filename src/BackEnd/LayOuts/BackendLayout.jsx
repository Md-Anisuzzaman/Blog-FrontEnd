import React from 'react';
import BackEndTopbar from './BackEndTopbar';
import BackEndContent from './BackEndContent';
import BackEndSidebar from './BackendSidebar';

const BackEndLayout = () => {
   
    return (
        <div className='dashboard__body'>
            <BackEndSidebar></BackEndSidebar>
            <div className="header_and_content">
                <BackEndTopbar></BackEndTopbar>
                <BackEndContent></BackEndContent>
            </div>
        </div>
    );
};

export default BackEndLayout;