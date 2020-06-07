import React from 'react';
import MyContext from './MyContext';
export const Cars = () => (
    <MyContext.Consumer>
        {context}
    </MyContext.Consumer>
);

