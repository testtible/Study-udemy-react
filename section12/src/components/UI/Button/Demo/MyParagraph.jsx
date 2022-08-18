import React from 'react';

const MyParagraph = (props) => {
    console.log('myparagraph');
    return <p>{props.children}</p>;
};

export default MyParagraph;