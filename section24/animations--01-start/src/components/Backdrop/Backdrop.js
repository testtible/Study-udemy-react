import React from 'react';

import './Backdrop.css';

const backdrop = (props) => {
    const cssStyles = ['Backdrop', props.show ? 'BackdropOpen' : 'BackdropClose'];

    return <div className="Backdrop"></div>;
};

export default backdrop;